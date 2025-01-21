import { post } from '@apis/index';
// import type { AxiosResponse } from 'axios';

export const postBoardScrap = async (boardId: number) => {
  try {
    const response = await post<{
      statusCode: number;
      message: string;
      data: {
        boardId: number;
        scarp: boolean;
      };
    }>(`users/boards/${boardId}/scrap`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
