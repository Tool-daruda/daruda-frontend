import { post } from '@apis/index';

interface SuccessUserResponse {
  statusCode: number;
  message: string;
  jwtTokenResponse?: { accessToken: string; refreshToken: string };
  isUser: boolean;
  data?: { email: string; isUser: boolean };
}

// 카카오 로그인 (인가 코드 전송)
export const sendAuthorization = async (code: string) => {
  try {
    const response: SuccessUserResponse = await post(
      'users/token',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: code,
        },
      },
    );

    return response;
  } catch (error) {
    console.error('인가 코드 처리 실패:', error);
    throw error;
  }
};
