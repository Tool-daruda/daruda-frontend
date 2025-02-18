import { reissueToken } from '@pages/login/apis/api';
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

// 토큰 저장 (accessToken & refreshToken 동시 저장)
const setTokens = (accessToken: string, refreshToken: string) => {
  const user = localStorage.getItem('user');
  if (!user) return;
  try {
    const userObj = JSON.parse(user);
    userObj.accessToken = accessToken;
    userObj.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(userObj));
  } catch (error) {
    console.error('토큰 저장 중 오류 발생:', error);
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

// 응답 인터셉터 (401 발생 시 자동 토큰 갱신)
instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ErrorResponse>) => {
    if (error.response?.status === 401) {
      console.warn('액세스 토큰 만료되어 리프레시 토큰으로 갱신');

      const user = localStorage.getItem('user');
      if (!user) {
        console.warn('유저 정보 없음');
        window.location.href = '/login';
        return Promise.reject(error);
      }

      try {
        const { refreshToken } = JSON.parse(user);
        if (!refreshToken) throw new Error('리프레시 토큰 없음');

        // reissueToken API 사용하여 토큰 갱신
        const { accessToken, refreshToken: newRefreshToken } = await reissueToken(refreshToken);

        if (accessToken && newRefreshToken) {
          // 갱신된 토큰 저장
          setTokens(accessToken, newRefreshToken);

          // 원래 요청 재시도
          if (error.config && error.config.headers) {
            error.config.headers.Authorization = `Bearer ${accessToken}`;
            return instance.request(error.config);
          }
        }
      } catch (refreshError) {
        console.error('토큰 갱신 실패', refreshError);
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    }

    return Promise.reject(
      new ApiError(error.response?.status || 500, error.response?.data?.message || '알 수 없는 오류가 발생했습니다.'),
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
