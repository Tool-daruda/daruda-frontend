import { get } from '@apis/index';
import { MYPAGE_QUERY_KEY } from '@pages/myPage/apis/queries';
import { ToolList } from '@pages/myPage/types/tool';
import { ToolType } from '@pages/toolDetail/types';
import { GetToolListResponse } from '@pages/toolList/types/ToolListType';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import { postToolScrap } from './api';
import { DETAIL_QUERY_KEY } from './getToolData';

export interface InfiniteQueryResponse {
  pages: GetToolListResponse[];
  pageParams: number[];
}

export const useToolScrap = (isFree?: boolean, category?: string, criteria?: string) => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (toolId: number) => postToolScrap(toolId),
    onMutate: async (toolId: number) => {
      // 메인 툴 목록 북마크 낙관적 업데이트
      await queryClient.cancelQueries({
        queryKey: ['tools', { isFree: isFree, category: category, criteria: criteria }],
      });
      const previousMainToolList = queryClient.getQueryData<InfiniteQueryResponse>([
        'tools',
        { isFree: isFree, category: category, criteria: criteria },
      ]);
      const flatedToolList = previousMainToolList?.pages.map((item) => item.tools ?? []).flat() ?? [];

      const updatedToolList = flatedToolList?.map((tool) =>
        tool.toolId === toolId ? { ...tool, isScraped: !tool.isScraped } : tool,
      );

      queryClient.setQueryData(['tools', { isFree, category, criteria }], {
        ...previousMainToolList,
        pages:
          previousMainToolList?.pages.map((page, index) =>
            index === 0 ? { ...page, tools: updatedToolList } : page,
          ) ?? [],
      });

      // 마이페이지 찜한 툴 낙관적 업데이트
      const previousBoardList = queryClient.getQueryData(MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(userId));
      queryClient.setQueryData(MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(userId), (old: ToolList) => {
        if (!old) return old;
        const updatedToolList = old.toolList.filter((tool) => tool.toolId !== toolId);
        const newBoardList = {
          ...old,
          boardList: updatedToolList,
        };
        return newBoardList;
      });
      return { previousBoardList, previousMainToolList };
    },
    onError: (_error, _id, context) => {
      // 에러 발생 시 캐시 롤백
      if (context?.previousBoardList) {
        queryClient.setQueryData(MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(userId), context.previousBoardList);
      }
      if (context?.previousMainToolList) {
        queryClient.setQueryData(
          ['tools', { isFree: isFree, category: category, criteria: criteria }],
          context.previousMainToolList,
        );
      }
    },
    onSettled: (_, __, toolId) => {
      // 서버 동기화를 위해 캐시 무효화
      queryClient.refetchQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(userId) });
      queryClient.refetchQueries({ queryKey: DETAIL_QUERY_KEY.TOOL_DETAIL(toolId) });
    },
  });
};

export const getDetail = async (toolId: number): Promise<ToolType | null> => {
  try {
    const response: AxiosResponse<ToolType> = await get(`tools/${toolId}`);
    return response.data;
  } catch (error) {
    console.error('툴 상세 정보 조회 오류:', error);
    throw new Error('툴 상세정보 조회 실패');
  }
};
