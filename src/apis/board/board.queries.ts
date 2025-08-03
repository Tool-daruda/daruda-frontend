import { useMutation, useQueryClient, InfiniteData, useQuery, useInfiniteQuery, QueryKey } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { getBoardList, delBoard, postBoardScrap, getDeatilBoard, patchBoard } from './board.api';
import { GetPostListResponse, PostResponse, FavoriteBoardListResponse } from './board.model';
import { MYPAGE_QUERY_KEY, BOARD_QUERY_KEY } from '@constants/queryKey';
import { PostFormData } from '@pages/communityWrite/types/PostType';

// 커뮤니티 게시글 조회 hook
export const useBoardListQuery = (toolId: number | null, noTopic: boolean) =>
  useInfiniteQuery<GetPostListResponse>({
    queryKey: BOARD_QUERY_KEY.LIST({ noTopic, toolId }),
    queryFn: ({ pageParam }) =>
      getBoardList({
        pageParam,
        queryKey: ['boards', { noTopic: noTopic, size: 10, toolId: toolId }],
      }),

    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage.scrollPaginationDto.nextCursor;
      return typeof nextCursor === 'number' && nextCursor !== -1 ? nextCursor - 1 : null;
    },
    initialPageParam: 0,
  });

// 커뮤니티 게시글 북마크 hook
export const useBoardScrapMutation = (
  pickedtool?: number | null,
  noTopic?: boolean,
  boardId?: number,
  isMyPage = false,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (boardId: number) => postBoardScrap(boardId),
    onMutate: async (boardId: number) => {
      // 커뮤니티 리스트 페이지 부분, 북마크 낙관적 업데이트
      await queryClient.cancelQueries({ queryKey: BOARD_QUERY_KEY.LIST({ noTopic: noTopic, toolId: pickedtool }) });

      const previousCommuList = queryClient.getQueryData<InfiniteData<GetPostListResponse>>(
        BOARD_QUERY_KEY.LIST({ noTopic: noTopic, toolId: pickedtool }),
      );

      const flatedCommuList = previousCommuList?.pages.map((item) => item.contents ?? []).flat() ?? [];

      const updatedPopularList = flatedCommuList?.map((notice) =>
        notice.boardId === boardId ? { ...notice, isScraped: !notice.isScraped } : notice,
      );

      queryClient.setQueryData(BOARD_QUERY_KEY.LIST({ noTopic: noTopic, toolId: pickedtool }), {
        ...previousCommuList,
        pages:
          previousCommuList?.pages.map((page, index) =>
            index === 0 ? { ...page, contents: updatedPopularList } : page,
          ) ?? [],
      });

      // 세부 페이지 낙관적 업데이트
      await queryClient.cancelQueries({ queryKey: BOARD_QUERY_KEY.DETAIL(boardId.toString()) });
      const previousDetail = queryClient.getQueryData<PostResponse>(BOARD_QUERY_KEY.DETAIL(boardId.toString()));

      const updatedDetail = {
        ...previousDetail,
        isScraped: !previousDetail?.isScraped,
      };

      queryClient.setQueryData(BOARD_QUERY_KEY.DETAIL(boardId.toString()), updatedDetail);

      if (isMyPage) {
        // 마이페이지 BoardList 캐시 낙관적 업데이트
        const previousBoardListMap = new Map<QueryKey, FavoriteBoardListResponse>();
        const pageKeys = queryClient
          .getQueryCache()
          .findAll({
            predicate: (query) =>
              Array.isArray(query.queryKey) && query.queryKey[0] === MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(0)[0],
          })
          .map((q) => q.queryKey as QueryKey);

        pageKeys.forEach((key) => {
          const oldData = queryClient.getQueryData<FavoriteBoardListResponse>(key);
          if (!oldData) return;

          previousBoardListMap.set(key, oldData);
          const updatedBoardList = oldData.boardList.map((board) =>
            board.boardId === boardId ? { ...board, isScrapped: !board.isScrapped } : { ...board },
          );
          queryClient.setQueryData(key, {
            ...oldData,
            boardList: [...updatedBoardList],
          });
        });

        return {
          previousBoardListMap: Array.from(previousBoardListMap.entries()),
          previousCommuList,
          previousDetail,
        };
      }

      return { previousCommuList, previousDetail };
    },
    onError: (_error, _id, context) => {
      if (context?.previousBoardListMap) {
        context.previousBoardListMap.forEach(([key, value]) => {
          queryClient.setQueryData(key, value);
        });
      }
      if (context?.previousCommuList) {
        queryClient.setQueryData(
          BOARD_QUERY_KEY.LIST({ noTopic: noTopic, toolId: pickedtool }),
          context.previousCommuList,
        );
      }
      if (context?.previousDetail && boardId) {
        queryClient.setQueryData(BOARD_QUERY_KEY.DETAIL(boardId.toString()), context.previousDetail);
      }
      // handleModalOpen();
    },
    onSettled: () => {
      if (!isMyPage) {
        // 서버 동기화를 위해 캐시 무효화
        queryClient.refetchQueries({
          predicate: (query) => {
            return Array.isArray(query.queryKey) && query.queryKey[0] === 'myFavoritePostList';
          },
        });
      }
    },
  });
};

// 커뮤니티 게시글 상세 조회
export const useDetailBoardQuery = (id: string | undefined) =>
  useQuery<PostResponse | null>({
    queryKey: BOARD_QUERY_KEY.DETAIL(id),
    queryFn: () => getDeatilBoard(id!),
    enabled: !!id,
    retry: false,
  });

// 커뮤니티 게시글 삭제 hook
export const useBoardDeleteMutation = (boardId?: number, pickedtool?: number | null, noTopic?: boolean) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (boardId: number) => delBoard(boardId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: BOARD_QUERY_KEY.LIST({ noTopic: noTopic, toolId: pickedtool }) });

      const prevList = queryClient.getQueryData<InfiniteData<GetPostListResponse>>(
        BOARD_QUERY_KEY.LIST({ noTopic: noTopic, toolId: pickedtool }),
      );

      if (prevList && Array.isArray(prevList.pages)) {
        const updatedList = {
          ...prevList,
          pages: prevList.pages.map((page) => ({
            ...page,
            contents: Array.isArray(page.contents) ? page.contents.filter((post) => post.boardId !== boardId) : [],
          })),
        };

        queryClient.setQueryData(BOARD_QUERY_KEY.LIST({ noTopic: noTopic, toolId: pickedtool }), updatedList);
      }

      return { prevList };
    },

    onError: (error, _, context) => {
      const queryKey = ['boards', { noTopic, size: 10, lastBoardId: -1, toolId: pickedtool }];
      if (context?.prevList) {
        queryClient.setQueryData(queryKey, context.prevList);
      }
      console.error(error);
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        predicate: (query) => {
          return Array.isArray(query.queryKey) && query.queryKey[0] === 'myPostList';
        },
      });
    },
  });
};

// 커뮤니티 게시글 수정
export const useBoardUpdateMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (req: { id: number | null; data: PostFormData }) => patchBoard(req),
    onSuccess: () => {
      navigate('/community');
    },
  });
};
