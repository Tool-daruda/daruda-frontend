import { get } from '@apis/index';
import type { AxiosResponse } from 'axios';

import { CategorList } from '../types';

export const getCategory = async (): Promise<CategorList[] | null> => {
  try {
    const response: AxiosResponse<CategorList[] | null> = await get(`/tools/category`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
