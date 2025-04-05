import axios from 'axios';

interface RequestLoginURLResponse {
  statusCode: number;
  message: string;
  data: string;
}

// 카카오 로그인 URL 요청 함수
export const fetchKakaoLogin = async () => {
  try {
    const response = await axios.get<RequestLoginURLResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/auth/login-url?socialType=KAKAO`,
    );

    const redirectUri = response.data.data;
    if (redirectUri) {
      window.location.href = redirectUri;
    } else {
      throw new Error('리다이렉션 URL이 없습니다.');
    }
  } catch (error) {
    console.error('카카오 로그인 요청 실패:', error);
    alert('로그인에 실패했습니다. 다시 시도해주세요.');
  }
};
