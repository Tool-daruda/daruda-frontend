import axios from 'axios';

const token = import.meta.env.VITE_TOKEN || '';
const baseURL = import.meta.env.VITE_API_BASE_URL || '';

const postBoard = async (formData: FormData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const response = await axios.post(`${baseURL}/boards`, formData, config);
    return response.data;
  } catch (error) {
    console.error('게시 실패:', error);
    throw new Error('게시 실패');
  }
};

export default postBoard;
