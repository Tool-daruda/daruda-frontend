import axios from 'axios';

// 인터셉터 영향을 받지 않는 별도의 Axios 인스턴스 생성
const axiosInstanceWithoutInterceptor = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// 토큰 갱신 API
export const reissueToken = async (refreshToken: string) => {
  try {
    const response = await axiosInstanceWithoutInterceptor.post('users/reissue', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    console.log('토큰 갱신 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);

    // 토큰 갱신 실패 시 기존 로그인 정보 삭제 후 로그인 페이지로 이동
    localStorage.removeItem('user');
    window.location.href = '/login';
    throw error;
  }
};
