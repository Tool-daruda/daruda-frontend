import { useMutation, useQueryClient, InfiniteData, useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { getBoardList, delBoard, postBoardScrap, getDeatilBoard, patchBoard } from './board.api';
import { GetPostListResponse, PostResponse, InfiniteQueryResponse, BoardListResponse } from './board.model';
import { MYPAGE_QUERY_KEY, BOARD_QUERY_KEY } from '@constants/queryKey';
import { PostFormData } from '@pages/communityWrite/types/PostType';
import { extractUserId } from '@utils';

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
export const useBoardScrapMutation = (pickedtool?: number | null, noTopic?: boolean, boardId?: number) => {
  const userId = extractUserId();

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

      if (userId) {
        // 마이페이지 BoardList 캐시 낙관적 업데이트
        const previousBoardList = queryClient.getQueryData(MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST());
        queryClient.setQueryData(MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(), (old: BoardListResponse) => {
          if (!old) return old;
          const updatedBoardList = old.boardList.filter((board) => board.boardId !== boardId);
          const newBoardList = {
            ...old,
            boardList: updatedBoardList,
          };
          return newBoardList;
        });
        return { previousBoardList, previousCommuList, previousDetail };
      }

      return { previousCommuList, previousDetail };
    },
    onError: (_error, _id, context) => {
      if (context?.previousBoardList) {
        queryClient.setQueryData(MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(), context.previousBoardList);
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
      // 서버 동기화를 위해 캐시 무효화
      queryClient.refetchQueries({
        predicate: (query) => {
          return Array.isArray(query.queryKey) && query.queryKey[0] === 'myFavoritePostList';
        },
      });
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
export const useBoardDeleteMutation = (boardId?: number, toolId?: number | null, noTopic?: boolean) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (boardId: number) => delBoard(boardId),
    onMutate: async () => {
      const queryKey = ['boards', { noTopic, size: 10, lastBoardId: -1, toolId }];
      await queryClient.cancelQueries({ queryKey });
      const prevList = queryClient.getQueryData<InfiniteQueryResponse>(queryKey);

      if (prevList && Array.isArray(prevList.pages)) {
        const updatedList = {
          ...prevList,
          pages: prevList.pages.map((page) => ({
            ...page,
            contents: Array.isArray(page.contents) ? page.contents.filter((post) => post.boardId !== boardId) : [],
          })),
        };

        queryClient.setQueryData<InfiniteQueryResponse>(queryKey, updatedList);
      }

      return { prevList };
    },

    onError: (error, _, context) => {
      const queryKey = ['boards', { noTopic, size: 10, lastBoardId: -1, toolId }];
      if (context?.prevList) {
        queryClient.setQueryData(queryKey, context.prevList);
      }
      console.error(error);
    },

    onSettled: () => {
      const queryKey = ['boards', { noTopic, size: 10, lastBoardId: -1, toolId }];
      queryClient.invalidateQueries({ queryKey });
    },

    onSuccess: () => {
      queryClient.refetchQueries({
        predicate: (query) => {
          // 'myPostList'랑 userId가 같은 쿼리키들 모두 새로고침
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
