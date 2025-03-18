import { get } from '@apis/index';
import type { AxiosResponse } from 'axios';
import { CategoryResponse } from 'src/types/toolListBanner/ToolListBannerTypes';

import { GetToolListResponse, ToolListRequest } from '../types/ToolListType';

export const fetchCategories = async (): Promise<CategoryResponse> => {
  try {
    return await get('/tools/category');
  } catch (error) {
    console.error('API 요청 오류:', error);
    throw new Error('카테고리 데이터를 가져오는 데 실패했습니다.');
  }
};

export const fetchToolsByCategory = async (data: ToolListRequest): Promise<GetToolListResponse> => {
  try {
    const params = new URLSearchParams({
      lastToolId: data.lastToolId ? String(data.lastToolId) : '',
      category: data.category || '',
      isFree: String(data.isFree),
      criteria: data.criteria || '',
    }).toString();

    const res: AxiosResponse<GetToolListResponse> = await get(`/tools?${params}`);
    return res.data;
  } catch (error: unknown) {
    console.error('API 요청 오류:', error);
    throw new Error(`툴 데이터를 가져오는 데 실패했습니다. "${data.category}".`);
  }
};
