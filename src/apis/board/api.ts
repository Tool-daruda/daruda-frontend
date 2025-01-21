import { del, post } from '@apis/index';

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
  }
};

export const delBoard = async (boardId: number) => {
  try {
    const response = await del(`boards/${boardId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
