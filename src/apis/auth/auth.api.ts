import axios, { AxiosResponse, isAxiosError } from 'axios';

import { SignupReq, ErrorResponse, SuccessUserResponse, RequestLoginURLResponse, SignupData } from './auth.model';
import { del, post, reIssueinstance } from '@apis/index';

// 회원가입 post
export const postSignup = async (requestBody: SignupReq): Promise<SignupData | undefined> => {
  try {
    const response: AxiosResponse = await post('/auth/sign-up', requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 성공 응답 처리
    const data = response.data;

    localStorage.setItem(
      'user',
      JSON.stringify({
        nickname: data.nickname,
        email: data.email,
        userId: data.userId,
        positions: data.positions,
      }),
    );

    alert('회원가입 성공! 메인 페이지로 이동합니다.');
    window.location.href = '/';
    return data;
  } catch (error) {
    // 실패 응답 처리
    if (isAxiosError(error) && error.response) {
      const errorResponse: ErrorResponse = error.response.data;
      console.error('회원가입 실패:', errorResponse.message);
      alert(`회원가입 실패: ${errorResponse.message}`);
    } else {
      console.error('예상치 못한 오류 발생:', error);
      alert('예상치 못한 오류가 발생했습니다. 다시 시도해주세요.');
    }
    return;
  }
};

// 토큰 갱신(Access Token 재발급) post
export const postReissue = async () => {
  try {
    await reIssueinstance.post(`/auth/reissue`);

    return;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    // window.location.href = '/login';
    throw error;
  }
};

// 로그아웃 post
export const postLogout = async () => {
  try {
    await post('auth/logout');
  } catch (error) {
    console.error('Error:', error);
  }
};

// 소셜로그인 post
export const postAuthorization = async (code: string) => {
  try {
    const response = await axios.post<SuccessUserResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/auth/login?code=${code}`,
      { socialType: 'KAKAO' },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data.data;
  } catch (error) {
    console.error('인가 코드 처리 실패:', error);
    throw error;
  }
};

// 소셜 로그인 URL반환 get
export const getKakaoLogin = async () => {
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

// 회원 탈퇴 del
export const deleteAccount = async () => {
  try {
    await del('auth/withdraw');
  } catch (error) {
    console.error('Error:', error);
  }
};
