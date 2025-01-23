import { get, post } from '@apis/index';
import { isAxiosError } from 'axios';

// 인가 코드 전송 type
interface SuccessUserResponse {
  statusCode: number;
  message: string;
  data: {
    jwtTokenResponse: { accessToken: string; refreshToken: string };
    isUser: true;
    nickname: string;
  };
}

interface NonRegisteredUserResponse {
  statusCode: number;
  message: string;
  data: {
    email: string;
    isUser: false;
    nickname: string;
  };
}

interface RequestLoginURLResonse {
  statusCode: number;
  message: string;
  data: string;
}

// 카카오 로그인 URL 요청
export const fetchKakaoLogin = async function fetchKakaoLoginUrl() {
  try {
    const response: RequestLoginURLResonse = await get('users/kakao/login-url', {
      params: { 'social-type': 'kakao' },
    });

    if (response.statusCode === 308) {
      const redirectUri = response.data;
      if (redirectUri) {
        window.location.href = redirectUri;
      } else {
        throw new Error('리다이렉션 URL이 없습니다.');
      }
    }
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('Axios 에러:', error.response || error.message);
    } else if (error instanceof Error) {
      console.error('일반 에러:', error.message);
    } else {
      console.error('알 수 없는 에러:', error);
    }
    alert('로그인에 실패했습니다. 다시 시도해주세요.');
  }
};

// 인가 코드 전송
export const sendAuthorization = async function sendAuthorizationCode(code: string): Promise<void> {
  try {
    const response: SuccessUserResponse | NonRegisteredUserResponse = await post(
      `users/token?code=${encodeURIComponent(code)}`,
      null,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          Authorization: code,
        },
      },
    );
    if (response.data.isUser) {
      // 이미 등록된 유저인 경우
      const { nickname } = response.data;
      const { accessToken, refreshToken } = response.data.jwtTokenResponse;
      localStorage.setItem(
        'user',
        JSON.stringify({ nickname: nickname, accessToken: accessToken, refreshToken: refreshToken }),
      );
      window.location.href = '/';
    } else {
      // 등록된 유저가 아닌 경우
      const { email } = response.data;
      localStorage.setItem('user', JSON.stringify({ email }));
      alert('회원가입이 필요합니다. 회원가입 페이지로 이동합니다.');
      window.location.href = '/signup';
    }
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response?.status === 400) {
        if (error.response?.data?.message === 'Authorization code가 만료되었습니다.') {
          alert('Authorization code가 만료되었습니다. 다시 시도해주세요.');
        } else {
          alert('잘못된 요청입니다. 다시 시도해주세요.');
        }
      } else {
        console.error('Axios 에러:', error.response || error.message);
        alert('로그인 처리 중 문제가 발생했습니다. 관리자에게 문의해주세요.');
      }
    } else {
      console.log(error, '예상치 못한 에러가 발생했습니다. 관리자에게 문의해주세요.');
    }
  }
};

// 토큰 갱신
export const reissueToken = async function reissueToken(refreshToken: string) {
  try {
    const response: { accessToken: string; refreshToken: string } = await post('/reissue', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: refreshToken,
      },
    });

    const { accessToken, refreshToken: newRefreshToken } = response;
    console.log('토큰 갱신 성공:', { accessToken, newRefreshToken });

    // 갱신된 토큰 저장
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('토큰 갱신 실패:', error.message || '알 수 없는 서버 에러');
    } else if (error instanceof Error) {
      console.error('일반 에러:', error.message);
    } else {
      console.error('알 수 없는 에러:', error);
    }
  }
};
