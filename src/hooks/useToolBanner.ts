import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGetCategoriesQuery, useToolListQuery } from '@apis/tool';
import { ToolSelectState, ToolProp } from 'src/types/ToolListBannerTypes';

const useToolListBanner = ({ onToolSelect }: Pick<ToolProp, 'originTool' | 'onToolSelect'>) => {
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
  const storedTool = JSON.parse(sessionStorage.getItem('originTool') || 'null');

  const { data: categoryData } = useGetCategoriesQuery();
  const { data: toolListData } = useToolListQuery({
    category: toolState.selectedCategory || 'ALL',
  });

  // originTool 있을 때 초기 세팅
  useEffect(() => {
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
  }, [location.pathname, state]);

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
    sessionStorage.setItem(
      'originTool',
      JSON.stringify({
        toolId: null,
        toolName: null,
        toolLogo: null,
      }),
    );
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
    sessionStorage.removeItem('originTool');
    onToolSelect(null, false);
    navigate(location.pathname, { replace: true, state: null }); // 페이지 새로고침 없이 상태 초기화
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
