import { get } from '@apis/index';
import { ToolType } from '@pages/toolDetail/types';
import type { AxiosResponse } from 'axios';

export const getDetail = async (toolId: number): Promise<ToolType | null> => {
  try {
    const response: AxiosResponse<ToolType> = await get(`tools/${toolId}`);
    return response.data;
  } catch (error) {
    console.error('툴 상세 정보 조회 오류:', error);
    return null;
  }
};
