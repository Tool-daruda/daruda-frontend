import React from 'react';

import { ToolSelectState } from '../../types/toolListBanner/ToolListBannerTypes';

export const clearSelectedTool = (
  setToolState: React.Dispatch<React.SetStateAction<ToolSelectState>>,
  onToolSelect: (tool: number | null, noTopic: boolean) => void,
) => {
  setToolState((prev) => ({
    ...prev,
    selectedTool: null,
    isFree: false,
    selectedCategory: null,
  }));
  onToolSelect(null, false);
};
