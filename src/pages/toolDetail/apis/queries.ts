import type { AxiosResponse } from 'axios';

import { get } from '@apis/index';

import { CoreFeatureType, RelatedTool, ToolPlan } from '../types';

export const getCoreFeature = async (toolId: number): Promise<CoreFeatureType | null> => {
  try {
    const response: AxiosResponse<CoreFeatureType> = await get(`tool/${toolId}/core-features`);
    return response.data;
  } catch (error) {
    console.error('핵심 기능 조회 오류:', error);
    return null;
  }
};

export const getPlan = async (toolId: number): Promise<ToolPlan | null> => {
  try {
    const response: AxiosResponse<ToolPlan> = await get(`tool/${toolId}/plans`);
    return response.data;
  } catch (error) {
    console.error('툴 플랜 조회 오류:', error);
    return null;
  }
};

export const getRelatedTool = async (toolId: number): Promise<RelatedTool | null> => {
  try {
    const response: AxiosResponse<RelatedTool> = await get(`tool/${toolId}/alternatives`);
    return response.data;
  } catch (error) {
    console.error('대안 툴 조회 오류:', error);
    return null;
  }
};
