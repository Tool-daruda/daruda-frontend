import axios, { AxiosError } from 'axios';

import { ErrorResponse } from './errorResponse';

// API 응답 기본 타입 정의
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// accessToken 가져오기
let cachedToken: string | null = null;

const getAccessToken = (): string | null => {
  if (!cachedToken) {
    const user = localStorage.getItem('user');

    if (user) {
      try {
        const userObj = JSON.parse(user);
        cachedToken = userObj.accessToken || null;
      } catch (error) {
        console.error('유저의 토큰 정보를 가져올 수 없습니다', error);
        return null;
      }
    }
  }
  return cachedToken;
};

// api 클라이언트 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// 요청 인터셉터
instance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터
// TODO: 리프레시 로직 추가하기 -> 찬영언니 로그인 작업할 때 구현해줘!!
instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    // 에러 핸들링
    const httpStatus = error.response?.status; // HTTP 상태 코드
    const customStatus = error.response?.data?.status; // 응답의 상태 코드

    if (httpStatus === 401 && customStatus === 'E401001') {
      // 인증 오류 처리 (재로그인)
      localStorage.removeItem('user');
      window.location.href = '/login';
    }

    // 일반적인 에러 처리
    return Promise.reject(
      new ApiError(
        httpStatus || 500, // 상태 코드 없으면 500
        error.response?.data?.message || '알 수 없는 오류가 발생했습니다.', // 에러 메세지 없으면 메세지 출력
      ),
    );
  },
);

// REST API 요청 유틸리티 함수들
export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T>(...args).then((res) => res.data);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args).then((res) => res.data);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T>(...args).then((res) => res.data);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T>(...args).then((res) => res.data);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T>(...args).then((res) => res.data);
}
