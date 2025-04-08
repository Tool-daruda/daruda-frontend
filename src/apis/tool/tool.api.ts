import type { AxiosResponse } from 'axios';

import {
  ToolListRequest,
  ToolListResponse,
  DetailToolResponse,
  CoreFeatureResponse,
  ToolPlanResponse,
  AlternativeToolResponse,
} from './tool.model';
import { post, get } from '@apis/index';
import { CategoryResponse } from 'src/types/ToolListBannerTypes';

// 툴 찜하기 post
export const postToolScrap = async (toolId: number) => {
  try {
    const response = await post<{
      statusCode: number;
      message: string;
      data: {
        toolId: number;
        scrap: boolean;
      };
    }>(`tool/${toolId}/scrap`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error();
  }
};

// 툴 목록 조회 get
export const getToolsByCategory = async (data: ToolListRequest): Promise<ToolListResponse> => {
  try {
    const params = new URLSearchParams({
      lastToolId: data.lastToolId ? String(data.lastToolId) : '',
      category: data.category || '',
      isFree: String(data.isFree),
      criteria: data.criteria || '',
    }).toString();

    const res: AxiosResponse<ToolListResponse> = await get(`/tool?${params}`);
    return res.data;
  } catch (error: unknown) {
    console.error('API 요청 오류:', error);
    throw new Error(`툴 데이터를 가져오는 데 실패했습니다. "${data.category}".`);
  }
};

// 툴 세부정보 조회 get
export const getDetail = async (toolId: number): Promise<DetailToolResponse | null> => {
  try {
    const response: AxiosResponse<DetailToolResponse> = await get(`tool/${toolId}`);
    return response.data;
  } catch (error) {
    console.error('툴 상세 정보 조회 오류:', error);
    throw new Error('툴 상세정보 조회 실패');
  }
};

//  툴 핵심 기능 조회 get
export const getCoreFeature = async (toolId: number): Promise<CoreFeatureResponse | null> => {
  try {
    const response: AxiosResponse<CoreFeatureResponse> = await get(`tool/${toolId}/core-features`);
    return response.data;
  } catch (error) {
    console.error('핵심 기능 조회 오류:', error);
    return null;
  }
};

//  툴 플랜 조회 get
export const getPlan = async (toolId: number): Promise<ToolPlanResponse | null> => {
  try {
    const response: AxiosResponse<ToolPlanResponse> = await get(`tool/${toolId}/plans`);
    return response.data;
  } catch (error) {
    console.error('툴 플랜 조회 오류:', error);
    return null;
  }
};

// 대안 툴 조회 get
export const getAlternativeTool = async (toolId: number): Promise<AlternativeToolResponse | null> => {
  try {
    const response: AxiosResponse<AlternativeToolResponse> = await get(`tool/${toolId}/alternatives`);
    return response.data;
  } catch (error) {
    console.error('대안 툴 조회 오류:', error);
    return null;
  }
};

// 툴 카테고리 조회 get
export const getCategories = async (): Promise<CategoryResponse> => {
  try {
    return await get('/tool/category');
  } catch (error) {
    console.error('API 요청 오류:', error);
    throw new Error('카테고리 데이터를 가져오는 데 실패했습니다.');
  }
};
