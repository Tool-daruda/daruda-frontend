import axios from 'axios';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_TOKEN = import.meta.env.VITE_TOKEN;

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${VITE_API_BASE_URL}/tools/category`);
    return response.data;
  } catch (error) {
    console.error('API 요청 오류:', error);
    throw new Error('카테고리 데이터를 가져오는 데 실패했습니다.');
  }
};

export const fetchToolsByCategory = async (category: string) => {
  try {
    const response = await axios.get(`${VITE_API_BASE_URL}/tools?category=${category}`, {
      headers: {
        Authorization: `Bearer ${VITE_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('툴 목록 요청 오류:', error.message);
      console.error('Error stack:', error.stack);
    } else {
      console.error('알 수 없는 오류 발생');
    }

    throw new Error(`카테고리 "${category}"에 대한 툴 목록을 가져오는 데 실패했습니다.`);
  }
};
