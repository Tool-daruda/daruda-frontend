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
instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ErrorResponse>) => {
    const httpStatus = error.response?.status; // HTTP 상태 코드
    const customStatus = error.response?.data?.status; // 응답의 상태 코드

    if (httpStatus === 401 && customStatus === 'E401001') {
      // 액세스 토큰 만료 처리
      const user = localStorage.getItem('user');

      if (user) {
        try {
          const userObj = JSON.parse(user);
          const refreshToken = userObj.refreshToken;

          if (refreshToken) {
            // 리프레시 토큰으로 새로운 액세스 토큰 요청
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/reissue`, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                Authorization: refreshToken,
              },
            });

            const newAccessToken = response.data?.accessToken;

            if (newAccessToken) {
              // 새 액세스 토큰 저장
              setAccessToken(newAccessToken);

              // 원래 요청 재시도
              if (error.config) {
                error.config.headers.Authorization = `Bearer ${newAccessToken}`;
                return instance.request(error.config);
              }
            }
          }
        } catch (refreshError) {
          console.error('리프레시 토큰 갱신 중 에러 발생:', refreshError);
          localStorage.removeItem('user');
          window.location.href = '/login';
        }
      }

      // 리프레시 실패 시 재로그인
      localStorage.removeItem('user');
      window.location.href = '/login';
    }

    // 일반적인 에러 처리
    return Promise.reject(
      new ApiError(
        httpStatus || 500, // 상태 코드 없으면 500
        error.response?.data?.message || '알 수 없는 오류가 발생했습니다.', // 에러 메시지 없으면 기본 메시지
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
