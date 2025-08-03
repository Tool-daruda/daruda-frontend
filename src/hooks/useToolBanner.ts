import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useBlocker } from 'react-router-dom';

import { useGetCategoriesQuery, useToolListQuery } from '@apis/tool';
import { useAnalytics } from 'src/hoc/useAnalytics';
import { ToolSelectState, ToolProp } from 'src/types/ToolListBannerTypes';

const useToolListBanner = ({
  onToolSelect,
  forCommunity = false,
}: Pick<ToolProp, 'originTool' | 'onToolSelect'> & { forCommunity: boolean }) => {
  const [toolState, setToolState] = useState<ToolSelectState>({
    selectedCategory: null,
    selectedTool: null,
    tools: [], // 현재 카테고리에서 보여지는 툴배열
    noTopic: false,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as {
    toolId: number | null;
    toolLogo: string;
    toolName: string;
  } | null;
  const { data: categoryData } = useGetCategoriesQuery();
  const { data: toolListData } = useToolListQuery({
    category: toolState.selectedCategory || 'ALL',
  });
  const { trackEvent } = useAnalytics();

  // originTool 있을 때 초기 세팅
  useEffect(() => {
    if (forCommunity || state) {
      const storedTool = JSON.parse(sessionStorage.getItem('originTool') || 'null');

      const toolToUse = state || storedTool || null;
      if (!toolToUse) return;

      const toolInfo = {
        toolId: toolToUse.toolId as number,
        toolName: toolToUse.toolName,
        toolLogo: toolToUse.toolLogo,
      };

      setToolState({
        noTopic: !toolToUse.toolId,
        selectedTool: toolInfo,
        selectedCategory: toolToUse.toolName ?? null,
        tools: [toolInfo],
      });
    }
  }, [location.pathname, state, forCommunity]);

  // toolListData 변경 시 toolState.tools 업데이트
  useEffect(() => {
    if (toolListData?.pages?.length) {
      const newTools = toolListData.pages.flatMap((page) => page.tools);
      setToolState((prev) => ({
        ...prev,
        tools: newTools,
        prevtools: [...prev.tools],
      }));
    }
  }, [toolListData]);

  // 커뮤니티 이탈 시 스토리지 초기화
  const isCommunityRelatedPath = (pathname: string) => {
    return pathname.startsWith('/community');
  };
  useBlocker(({ nextLocation }) => {
    if (forCommunity) {
      if (isCommunityRelatedPath(location.pathname) && !isCommunityRelatedPath(nextLocation.pathname)) {
        sessionStorage.removeItem('originTool');
      }
    }
    return false;
  });

  // 카테고리 클릭 시
  const handleCategoryClick = (categoryName: string) => {
    setToolState((prev) => ({
      ...prev,
      selectedCategory: prev.selectedCategory === categoryName ? null : categoryName,
      prevtools: [...prev.tools],
    }));
  };

  // 자유 카테고리 체크박스 클릭 시
  const handleFreeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setToolState((prev) => ({
      ...prev,
      selectedCategory: isChecked ? '자유' : null,
      selectedTool: null,
      tools: toolState.tools,
      noTopic: isChecked,
    }));

    onToolSelect?.(null, isChecked);
    if (forCommunity) {
      if (isChecked) {
        sessionStorage.setItem(
          'originTool',
          JSON.stringify({
            toolId: null,
            toolName: '자유',
            toolLogo: null,
          }),
        );
      } else {
        sessionStorage.removeItem('originTool');
      }
    }
    if (isChecked) trackEvent('Community_Click', { tool: '자유' });
  };

  const clearSelectedTool = (
    setToolState: React.Dispatch<React.SetStateAction<ToolSelectState>>,
    onToolSelect: (tool: number | null, noTopic: boolean) => void,
  ) => {
    setToolState((prev) => ({
      ...prev,
      selectedTool: null,
      noTopic: false,
      selectedCategory: null,
    }));
    if (forCommunity) {
      sessionStorage.removeItem('originTool');
      navigate(location.pathname, { replace: true, state: null }); // 페이지 새로고침 없이 상태 초기화
    }
    onToolSelect(null, false);
  };

  return {
    toolState,
    categoryData,
    handleCategoryClick,
    handleFreeCheck,
    setToolState,
    clearSelectedTool,
  };
};

export default useToolListBanner;
