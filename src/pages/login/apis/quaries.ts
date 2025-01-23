import { useMutation, useQuery } from '@tanstack/react-query';

import { fetchKakaoLogin, sendAuthorization, reissueToken } from './api';

// Query Key 정의
export const LOGIN_QUERY_KEYS = {
  KAKAO_LOGIN_URI: ['kakaoLoginUrl'],
  AUTHORIZATION: (code: string) => ['authorization', code],
  REISSUE_TOKEN: ['reissueToken'],
};

// 카카오 로그인 URL 요청
export const useKakaoLoginUrl = () => {
  return useQuery({
    queryKey: LOGIN_QUERY_KEYS.KAKAO_LOGIN_URI,
    queryFn: fetchKakaoLogin,
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 신선도 유지
    gcTime: 1000 * 60 * 30, // 30분 동안 데이터 캐싱
  });
};

// 인가 코드 전송
export const useSendAuthorization = () => {
  return useMutation({
    mutationFn: (code: string) => sendAuthorization(code),
    onSuccess: (data) => {
      console.log('로그인 성공 데이터:', data);
      // 성공 시 토큰 저장 및 페이지 이동 로직 추가 가능
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
};

// 토큰 갱신
export const useReissueToken = () => {
  return useMutation({
    mutationFn: (refreshToken: string) => reissueToken(refreshToken),
    onSuccess: (data) => {
      console.log('토큰 갱신 성공:', data);
      // 새 토큰 저장 로직 추가 가능
    },
    onError: (error) => {
      console.error('토큰 갱신 실패:', error);
    },
  });
};
