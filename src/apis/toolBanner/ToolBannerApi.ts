import { CategoryResponse, ToolResponse } from 'src/types/toolListBanner/ToolListBannerTypes';

import { get } from '../index';

export const fetchCategories = async (): Promise<CategoryResponse> => {
  try {
    return await get('/tools/category');
  } catch (error) {
    console.error('API 요청 오류:', error);
    throw new Error('카테고리 데이터를 가져오는 데 실패했습니다.');
  }
};

export const fetchToolsByCategory = async (category: string, isFree: boolean = false): Promise<ToolResponse> => {
  try {
    const query = `/tools?category=${category}&isFree=${isFree}`;
    return await get(query);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('툴 목록 요청 오류:', error.message);
      console.error('Error stack:', error.stack);
    } else {
      console.error('알 수 없는 오류 발생');
    }

    throw new Error(`카테고리 "${category}" 및 isFree="${isFree}"에 대한 툴 목록을 가져오는 데 실패했습니다.`);
  }
};
