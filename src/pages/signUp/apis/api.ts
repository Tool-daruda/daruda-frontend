import { post } from '@apis/index';
import { type AxiosResponse, isAxiosError } from 'axios';

import { ErrorResponse, SignupRequest } from '../types';

const signup = async (requestBody: SignupRequest): Promise<void> => {
  try {
    const response: AxiosResponse = await post('/users/signup', requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 성공 응답 처리
    const data = response.data;

    // 토큰 가져오기
    localStorage.getItem(data.jwtTokenResponse.accessToken);
    localStorage.getItem(data.jwtTokenResponse.refreshToken);
    localStorage.getItem(data.email);
    localStorage.getItem(data.nickname);

    alert('회원가입 성공! 메인 페이지로 이동합니다.');
    window.location.href = '/';
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
  }
};

export default signup;
