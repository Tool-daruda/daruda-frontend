import { AxiosResponse } from 'axios';

import { SearchBoardResponse, SearchTool, SearchToolResponse } from './search.model';
import { get } from '@apis/index';

export const getSearchTool = async (keyword: string): Promise<SearchTool[]> => {
  const res: AxiosResponse<SearchToolResponse> = await get(`/search/tool?keyword=${encodeURIComponent(keyword)}`);
  return res.data;
};

export const getSearchBoard = async (
  keyword: string,
  nextCursor?: number,
  size: number = 3,
): Promise<SearchBoardResponse> => {
  const params = new URLSearchParams();
  params.append('keyword', keyword);
  if (nextCursor) params.append('nextCursor', nextCursor.toString());
  params.append('size', size.toString());

  const res: AxiosResponse<SearchBoardResponse> = await get(`/search/board?${params.toString()}`);
  return res.data;
};
