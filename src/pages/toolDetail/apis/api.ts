import { useQuery } from '@tanstack/react-query';

import { getCoreFeature, getPlan, getRelatedTool } from './queries';

export const DETAIL_QUERY_KEY = {
  CORE_FEATURES: (coreID: number) => ['corefeature', coreID],
  TOOL_PLAN: (planID: number) => ['toolplan', planID],
  RELATED_TOOLS: (toolID: number) => ['relatedtool', toolID],
};

// 핵심 기능 조회하기
export const useCoreFeature = (toolId: number) => {
  return useQuery({
    queryKey: DETAIL_QUERY_KEY.CORE_FEATURES(toolId),
    queryFn: () => getCoreFeature(toolId),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!toolId,
  });
};

// 툴 플랜(비용) 조회하기
export const usePlan = (toolId: number) => {
  return useQuery({
    queryKey: DETAIL_QUERY_KEY.TOOL_PLAN(toolId),
    queryFn: () => getPlan(toolId),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!toolId,
  });
};

// 대안 툴 조회하기
export const useRelatedTool = (toolId: number) => {
  return useQuery({
    queryKey: DETAIL_QUERY_KEY.RELATED_TOOLS(toolId),
    queryFn: () => getRelatedTool(toolId),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!toolId,
  });
};
