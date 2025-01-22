import { MYPAGE_QUERY_KEY } from '@pages/myPage/apis/queries';
import { BoardList } from '@pages/myPage/types/board';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { delBoard, postBoardScrap } from './api';

export const useBoardScrap = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (boardId: number) => postBoardScrap(boardId),
    onMutate: async (boardId: number) => {
      // 캐시 백업
      const previousBoardList = queryClient.getQueryData(MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(userId));

      // BoardList 캐시 낙관적 업데이트
      queryClient.setQueryData(MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(userId), (old: BoardList) => {
        if (!old) return old;
        const updatedBoardList = old.boardList.filter((board) => board.boardId !== boardId);
        const newBoardList = {
          ...old,
          boardList: updatedBoardList,
        };
        return newBoardList;
      });
      return { previousBoardList };
    },
    onError: (_error, _id, context) => {
      // 에러 발생 시 캐시 롤백
      if (context?.previousBoardList) {
        queryClient.setQueryData(MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(userId), context.previousBoardList);
      }
    },
    onSettled: () => {
      // 서버 동기화를 위해 캐시 무효화
      // TODO: 민이가 작업하는 툴 리스트 페이지, 찬영언니가 작업하는 툴 디테일 페이지의 쿼리키도 무효화해주기
      queryClient.refetchQueries({
        predicate: (query) => {
          // 'myFavoritePostList'랑 userId가 같은 쿼리키들 모두 새로고침
          return (
            Array.isArray(query.queryKey) && query.queryKey[0] === 'myFavoritePostList' && query.queryKey[1] === userId
          );
        },
      });
    },
  });
};

export const useBoardDelete = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (boardId: number) => delBoard(boardId),
    onSuccess: () => {
      queryClient.refetchQueries({
        predicate: (query) => {
          // 'myPostList'랑 userId가 같은 쿼리키들 모두 새로고침
          return Array.isArray(query.queryKey) && query.queryKey[0] === 'myPostList' && query.queryKey[1] === userId;
        },
      });
    },
  });
};
