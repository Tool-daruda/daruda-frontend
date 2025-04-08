import React, { useEffect, useState } from 'react';

import { useGetCategoriesQuery, useToolListQuery } from '@apis/tool';
import { ToolSelectState, ToolProp } from 'src/types/toolListBanner/ToolListBannerTypes';

const useToolListBanner = ({ originTool, onToolSelect }: Pick<ToolProp, 'originTool' | 'onToolSelect'>) => {
  const [toolState, setToolState] = useState<ToolSelectState>({
    selectedCategory: null,
    selectedTool: null,
    tools: [],
    noTopic: false,
  });

  const { data: categoryData } = useGetCategoriesQuery();
  const { data: toolListData } = useToolListQuery({
    category: toolState.selectedCategory || 'ALL',
  });

  // originTool 있을 때 초기 세팅
  useEffect(() => {
    const storedTool = JSON.parse(sessionStorage.getItem('originTool') || 'null');
    const toolToUse = storedTool || originTool;

    if (toolToUse) {
      setToolState({
        noTopic: toolToUse.toolId === null,
        selectedTool: toolToUse.toolId ?? null,
        selectedCategory: toolToUse.toolName ?? null,
        tools: originTool
          ? [
              {
                toolId: toolToUse.toolId as number,
                toolName: toolToUse.toolName,
                toolLogo: toolToUse.toolLogo,
              },
            ]
          : [],
      });
    }
  }, [originTool]);

  // toolListData 변경 시 toolState.tools 업데이트
  useEffect(() => {
    if (toolListData?.pages?.length) {
      const newTools = toolListData.pages.flatMap((page) => page.tools);
      setToolState((prev) => ({
        ...prev,
        tools: newTools,
      }));
    }
  }, [toolListData]);

  // 카테고리 클릭 시
  const handleCategoryClick = (categoryName: string) => {
    setToolState((prev) => ({
      ...prev,
      selectedCategory: prev.selectedCategory === categoryName ? null : categoryName,
    }));
  };

  // 자유 카테고리 체크박스 클릭 시
  const handleFreeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    setToolState({
      selectedCategory: isChecked ? '자유' : null,
      selectedTool: null,
      tools: toolState.tools,
      noTopic: isChecked,
    });

    onToolSelect?.(null, isChecked);
  };

  return {
    toolState,
    categoryData,
    handleCategoryClick,
    handleFreeCheck,
    setToolState,
  };
};

export default useToolListBanner;
