import { reissueToken } from '@pages/login/apis/postTokenRefresh';
import axios, { AxiosError, type AxiosRequestConfig } from 'axios';

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

// 토큰 가져오기
const getAccessToken = (): string | null => {
  const user = localStorage.getItem('user');
  if (!user) return null;
  try {
    return JSON.parse(user)?.accessToken || null;
  } catch (error) {
    console.error('유저 토큰 파싱 실패:', error);
    return null;
  }
};

// API 클라이언트 생성
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
instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ErrorResponse>) => {
    if (error.response?.status === 401) {
      console.warn('액세스 토큰 만료. 토큰 갱신 중...');

      const user = localStorage.getItem('user');
      if (!user) {
        console.warn('유저 정보 없음');
        window.location.href = '/login';
        return Promise.reject(error);
      }

      const { refreshToken } = JSON.parse(user);
      if (!refreshToken) {
        console.warn('리프레시 토큰 없음');
        window.location.href = '/login';
        return Promise.reject(error);
      }

      try {
        const newTokens = await reissueToken(refreshToken);

        // 새로운 토큰을 localStorage에 저장
        const updatedUser = { ...JSON.parse(user), ...newTokens };
        localStorage.setItem('user', JSON.stringify(updatedUser));

        // 기존 요청에 새로운 accessToken을 적용
        const originalRequest = error.config as AxiosRequestConfig;

        // originalRequest와 headers가 존재하는지 체크
        if (originalRequest && originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newTokens.accessToken}`;
          return instance(originalRequest);
        } else {
          return Promise.reject(error);
        }
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
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
