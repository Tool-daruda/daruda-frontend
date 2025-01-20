import axios, { isAxiosError } from 'axios';

import { PostBoardData, PostBoardResponse } from '../types/PostType';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const postBoard = async (data: PostBoardData): Promise<PostBoardResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/boards`, data, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw new Error(`Unexpected status code: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('API 요청 실패:', error.message);
      if (error.response) {
        console.error('응답 데이터:', error.response.data);

        throw new Error(error.response.data.message || 'API 요청 중 오류가 발생했습니다.');
      }
    }

    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};

export default postBoard;
