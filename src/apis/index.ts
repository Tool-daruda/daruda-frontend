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

// 토큰 캐싱 (불필요한 localStorage 접근 방지)
let cachedToken: string | null = null;

// accessToken 가져오기
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

// accessToken 저장
const setAccessToken = (token: string) => {
  cachedToken = token;
  const user = localStorage.getItem('user');
  if (user) {
    try {
      const userObj = JSON.parse(user);
      userObj.accessToken = token;
      localStorage.setItem('user', JSON.stringify(userObj));
    } catch (error) {
      console.error('토큰 업데이트 중 문제가 발생했습니다', error);
    }
  }
};

// API 클라이언트 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// 요청 인터셉터: 모든 요청에 토큰 추가
instance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 토큰 갱신 API
const reissueToken = async (refreshToken: string) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/reissue`, null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    console.log('토큰 갱신 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    localStorage.removeItem('user');
    window.location.href = '/login';
    throw error;
  }
};

// 응답 인터셉터: 401 오류 발생 시 토큰 갱신 로직 처리
instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ErrorResponse>) => {
    const httpStatus = error.response?.status;
    const customStatus = error.response?.data?.status;

    if (httpStatus === 401 && customStatus === 'E401001') {
      console.warn('액세스 토큰 만료. 토큰 갱신 중...');

      const user = localStorage.getItem('user');
      if (!user) {
        console.warn('유저 정보 없음');
        window.location.href = '/login';
        return Promise.reject(error);
      }

      try {
        const { refreshToken } = JSON.parse(user);
        if (!refreshToken) {
          console.warn('리프레시 토큰 없음');
          localStorage.removeItem('user');
          window.location.href = '/login';
          return Promise.reject(error);
        }

        // 리프레시 토큰으로 새로운 액세스 토큰 요청
        const newTokens = await reissueToken(refreshToken);
        setAccessToken(newTokens.accessToken);

        // 기존 요청을 새로운 액세스 토큰으로 재시도
        const originalRequest = error.config as AxiosRequestConfig;
        if (originalRequest?.headers) {
          originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
          return instance(originalRequest);
        }
      } catch (refreshError) {
        console.error('리프레시 토큰 갱신 실패:', refreshError);
        localStorage.removeItem('user');
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
