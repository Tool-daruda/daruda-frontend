import { get } from '@apis/index';

interface RequestLoginURLResponse {
  statusCode: number;
  message: string;
  data: string;
}

// 카카오 로그인 URL 요청 함수
export const fetchKakaoLogin = async () => {
  try {
    const response: RequestLoginURLResponse = await get('users/kakao/login-url', {
      params: { 'social-type': 'kakao' },
    });

    const redirectUri = response.data;
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
