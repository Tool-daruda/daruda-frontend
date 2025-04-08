import { useMutation, useQueryClient, useQuery, useInfiniteQuery } from '@tanstack/react-query';

import {
  postToolScrap,
  getDetail,
  getCoreFeature,
  getPlan,
  getAlternativeTool,
  getCategories,
  getToolsByCategory,
} from './tool.api';
import { InfiniteQueryResponse, ToolListResponse } from './tool.model';
import { ToolList } from '@apis/user';
import { MYPAGE_QUERY_KEY, TOOL_QUERY_KEY } from '@constants/queryKey';

// 툴 북마크 hook
export const useToolScrapMutation = (isFree?: boolean, category?: string, criteria?: string) => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (toolId: number) => postToolScrap(toolId),
    onMutate: async (toolId: number) => {
      // 메인 툴 목록 북마크 낙관적 업데이트
      await queryClient.cancelQueries({
        queryKey: TOOL_QUERY_KEY.LIST({ isFree, category, criteria }),
      });
      const previousMainToolList = queryClient.getQueryData<InfiniteQueryResponse>(
        TOOL_QUERY_KEY.LIST({ isFree, category, criteria }),
      );
      const flatedToolList = previousMainToolList?.pages.map((item) => item.tools ?? []).flat() ?? [];

      const updatedToolList = flatedToolList?.map((tool) =>
        tool.toolId === toolId ? { ...tool, isScraped: !tool.isScraped } : tool,
      );

      queryClient.setQueryData(TOOL_QUERY_KEY.LIST({ isFree, category, criteria }), {
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
        queryClient.setQueryData(TOOL_QUERY_KEY.LIST({ isFree, category, criteria }), context.previousMainToolList);
      }
    },
    onSettled: (_, __, toolId) => {
      // 서버 동기화를 위해 캐시 무효화
      queryClient.refetchQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(userId) });
      queryClient.refetchQueries({ queryKey: TOOL_QUERY_KEY.DETAIL(toolId) });
    },
  });
};

// 툴 리스트 조회
export const useToolListQuery = ({
  category = 'ALL',
  isFree = false,
  criteria = 'popular',
}: {
  category?: string;
  isFree?: boolean;
  criteria?: 'popular' | 'createdAt';
}) => {
  return useInfiniteQuery<ToolListResponse>({
    queryKey: TOOL_QUERY_KEY.LIST({ category, isFree, criteria }),
    queryFn: ({ pageParam }) => getToolsByCategory({ lastToolId: pageParam, criteria, isFree, category, size: 18 }),
    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage.scrollPaginationDto.nextCursor;
      return typeof nextCursor === 'number' && nextCursor !== -1 ? nextCursor : null;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 60,
  });
};

// 툴 상세 정보 가져오기
export const useToolDetailQuery = (toolId: number) => {
  return useQuery({
    queryKey: TOOL_QUERY_KEY.DETAIL(toolId),
    queryFn: () => getDetail(toolId),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!toolId,
    retry: false,
  });
};

// 핵심 기능 조회하기
export const useCoreFeatureQuery = (toolId: number) => {
  return useQuery({
    queryKey: TOOL_QUERY_KEY.CORE_FEATURES(toolId),
    queryFn: () => getCoreFeature(toolId),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!toolId,
  });
};

// 툴 플랜(비용) 조회하기
export const usePlanQuery = (toolId: number) => {
  return useQuery({
    queryKey: TOOL_QUERY_KEY.TOOL_PLAN(toolId),
    queryFn: () => getPlan(toolId),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!toolId,
  });
};

// 대안 툴 조회하기
export const useAlternativeToolQuery = (toolId: number) => {
  return useQuery({
    queryKey: TOOL_QUERY_KEY.RELATED_TOOLS(toolId),
    queryFn: () => getAlternativeTool(toolId),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!toolId,
  });
};

// 툴 카테고리 조회
export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: TOOL_QUERY_KEY.CATEGORIES(),
    queryFn: getCategories,
    staleTime: Infinity,
  });
