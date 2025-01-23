import { get } from '@apis/index';
import { CategoryResponse, ToolResponse } from 'src/types/toolListBanner/ToolListBannerTypes';

export const fetchCategories = async (): Promise<CategoryResponse> => {
  try {
    return await get('/tools/category');
  } catch (error) {
    console.error('API 요청 오류:', error);
    throw new Error('카테고리 데이터를 가져오는 데 실패했습니다.');
  }
};

export const fetchToolsByCategory = async (
  category: string = 'ALL',
  isFree: boolean = false,
  criteria: 'popular' | 'createdAt' = 'popular',
  lastToolId: number | null = null,
  size: number = 18,
): Promise<ToolResponse> => {
  try {
    const params = new URLSearchParams({
      category,
      isFree: String(isFree),
      criteria,
      size: String(size),
    });

    if (lastToolId !== null) {
      params.append('lastToolId', String(lastToolId));
    }

    const query = `/tools?${params.toString()}`;
    return await get(query);
  } catch (error: unknown) {
    console.error('Error fetching tools:', error);
    throw new Error(`Failed to fetch tools for category "${category}".`);
  }
};
