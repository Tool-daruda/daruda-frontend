import type { AxiosResponse } from 'axios';

import { get } from '@apis/index';

import { CategorList } from '../types';

export const getCategory = async (): Promise<CategorList[] | null> => {
  try {
    const response: AxiosResponse<CategorList[] | null> = await get(`/tool/category`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
