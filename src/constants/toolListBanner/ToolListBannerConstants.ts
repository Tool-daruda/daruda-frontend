import { ToolSelectState } from '../../types/toolListBanner/ToolListBannerTypes';

export const INITIAL_TOOL_STATE: ToolSelectState = {
  selectedCategory: null,
  selectedTool: null,
  tools: [],
  isFree: false,
};
