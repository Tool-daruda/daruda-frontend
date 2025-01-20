import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ACCESS_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MzczNzQxODUsImV4cCI6MTczODU4Mzc4NSwidXNlcklkIjoyNH0.2YYHsXNvTJyHo0JVWjiPze7foZYsIKA1LJ7ippxGEY1B8y2gI9VRwnepZzIiN0kQApdWuCggdJg0qoXWePQOSg';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tools/category`);
    return response.data;
  } catch (error) {
    console.error('API 요청 오류:', error);
    throw new Error('카테고리 데이터를 가져오는 데 실패했습니다.');
  }
};

export const fetchToolsByCategory = async (category: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tools?category=${category}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
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
