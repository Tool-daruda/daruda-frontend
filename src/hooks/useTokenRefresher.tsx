import { instance } from '@apis/index';
import { reissueToken } from '@pages/login/apis/postTokenRefresh';
import { isAxiosError, type AxiosRequestConfig } from 'axios';

export const useTokenRefresher = () => {
  const refreshAccessToken = async (refreshToken: string) => {
    try {
      const { accessToken, refreshToken: newRefreshToken } = await reissueToken(refreshToken);

      if (accessToken && newRefreshToken) {
        const user = localStorage.getItem('user');
        if (user) {
          const userObj = JSON.parse(user);
          userObj.accessToken = accessToken;
          userObj.refreshToken = newRefreshToken;
          localStorage.setItem('user', JSON.stringify(userObj));

          // 갱신된 토큰을 axios 인스턴스에 적용
          instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
        }
        return accessToken;
      } else {
        throw new Error('토큰 갱신 실패');
      }
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
      localStorage.removeItem('user');
      window.location.href = '/login';
      throw error;
    }
  };

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (!isAxiosError(error) || !error.config || error.response?.status !== 401) {
        return Promise.reject(error);
      }

      console.warn('401 Unauthorized - 액세스 토큰 만료');

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
        const newAccessToken = await refreshAccessToken(refreshToken);

        const originalRequest = error.config as AxiosRequestConfig;
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }

        return instance.request(originalRequest);
      } catch (refreshError) {
        console.error('토큰 갱신 및 재요청 실패:', refreshError);
        return Promise.reject(refreshError);
      }
    },
  );
};
