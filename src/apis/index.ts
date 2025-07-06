import axios, { AxiosError, type AxiosRequestConfig } from 'axios';

import { postReissue } from './auth';
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

// API 클라이언트 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// 응답 인터셉터: 401 오류 발생 시 토큰 갱신 로직 처리
instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ErrorResponse>) => {
    const httpStatus = error.response?.status;
    const customStatus = error.response?.data?.status;

    if (httpStatus === 401 || customStatus === 'E401001') {
      localStorage.removeItem('users');
      console.warn('액세스 토큰 만료. 토큰 갱신 중...');

      // 리프레시 토큰으로 새로운 액세스 토큰 요청
      try {
        await postReissue();
        const originalRequest = error.config as AxiosRequestConfig;
        return instance(originalRequest);
      } catch (refreshError) {
        console.error('리프레시 토큰 갱신 실패:', refreshError);
        localStorage.removeItem('users');
        window.location.href = '/login';
      }
    }

    // 일반적인 에러 처리
    return Promise.reject(
      new ApiError(httpStatus || 500, error.response?.data?.message || '알 수 없는 오류가 발생했습니다.'),
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
