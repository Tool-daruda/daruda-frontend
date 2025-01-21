import { get } from '@apis/index';
import type { AxiosResponse } from 'axios';

import { CoreFeatureType, RelatedTool, ToolPlan, ToolType } from '../types';

export const getDetail = async (toolId: number): Promise<ToolType | null> => {
  try {
    const response: AxiosResponse<ToolType> = await get(`tools/${toolId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const getCoreFeature = async (toolId: number): Promise<CoreFeatureType | null> => {
  try {
    const response: AxiosResponse<CoreFeatureType> = await get(`tools/${toolId}/core-features`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const getPlan = async (toolId: number): Promise<ToolPlan | null> => {
  try {
    const response: AxiosResponse<ToolPlan> = await get(`tools/${toolId}/plans`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const getRelatedTool = async (toolId: number): Promise<RelatedTool | null> => {
  try {
    const response: AxiosResponse<RelatedTool> = await get(`tools/${toolId}/related-tool`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
