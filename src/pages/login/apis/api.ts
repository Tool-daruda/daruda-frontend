import { get, post } from '@apis/index';
import { isAxiosError, type AxiosResponse } from 'axios';

// 카카오 로그인 URL 요청
export const fetchKakaoLogin = async function fetchKakaoLoginUrl() {
  try {
    const response: AxiosResponse = await get('users/kakao/login-url', {
      params: { 'social-type': 'kakao' },
    });

    if (response.status === 200) {
      const redirectUri = response.data.data;
      if (redirectUri) {
        window.location.href = redirectUri;
      } else {
        throw new Error('리다이렉션 URL이 없습니다.');
      }
    }
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('Axios 에러:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error('일반 에러:', error.message);
    } else {
      console.error('알 수 없는 에러:', error);
    }
    alert('로그인에 실패했습니다. 다시 시도해주세요.');
  }
};

// 인가 코드 전송
export const sendAuthorization = async function sendAuthorizationCode(code: string) {
  try {
    const response: AxiosResponse = await post(
      `users/token?code=${encodeURIComponent(code)}`, // code를 쿼리 파라미터로 전달
      null, // 본문은 비어있음
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          Authorization: code,
        },
      },
    );

    // isUser: true인 경우와 false인 경우 분기 처리
    if (response.data.isUser) {
      const { access_token, refresh_token } = response.data;

      // 토큰 저장
      localStorage.setItem('user', JSON.stringify({ access_token, refresh_token }));

      alert('로그인 성공! 메인 페이지로 이동합니다.');
      // 메인 페이지로 리다이렉트
      window.location.href = '/';
    } else {
      // 회원가입 페이지로 이동
      const { email } = response.data.data;
      localStorage.setItem('user', JSON.stringify({ email }));
      window.location.href = '/signup';
    }
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response?.status === 400) {
        // 인가 코드 만료 또는 이미 사용된 코드 처리
        if (error.response?.data?.message === 'Authorization code가 만료되었습니다.') {
          throw new Error('Authorization code가 만료되었습니다.');
        }
        alert('잘못된 요청입니다. 다시 시도해주세요.');
      } else {
        console.error('Axios 에러:', error.response?.data || error.message);
        alert('로그인 처리 중 문제가 발생했습니다. 관리자에게 문의해주세요.');
      }
    } else if (error instanceof Error) {
      console.error('일반 에러:', error.message);
      alert('예상치 못한 에러가 발생했습니다. 관리자에게 문의해주세요.');
    } else {
      console.error('알 수 없는 에러:', error);
      alert('알 수 없는 문제가 발생했습니다. 다시 시도해주세요.');
    }
  }
};

// 토큰 갱신
export const reissueToken = async function reissueToken(refreshToken: string) {
  try {
    const response: AxiosResponse = await post('/reissue', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: refreshToken,
      },
    });

    const { accessToken, refreshToken: newRefreshToken } = response.data;
    console.log('토큰 갱신 성공:', { accessToken, newRefreshToken });

    // 갱신된 토큰 저장
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('토큰 갱신 실패:', error.response?.data?.message || '알 수 없는 서버 에러');
    } else if (error instanceof Error) {
      console.error('일반 에러:', error.message);
    } else {
      console.error('알 수 없는 에러:', error);
    }
  }
};
