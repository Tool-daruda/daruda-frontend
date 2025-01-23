import { patch } from '@apis/index';

import { PostBoardResponse } from '../types/PostType';

const postBoard = async (req: { id: number | null; data: FormData }): Promise<PostBoardResponse> => {
  console.log(req.data);
  try {
    const response = await patch<PostBoardResponse>(`/boards/${req.id}`, req.data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('수정 실패:', error);
    throw new Error('수정 실패');
  }
};

export default postBoard;
