import { useMutation, useQuery } from '@tanstack/react-query';

import { fetchKakaoLogin } from './getKakaoData';
import { sendAuthorization } from './postKakaoToken';

// Query Key 정의
export const LOGIN_QUERY_KEYS = {
  KAKAO_LOGIN: ['kakaoLogin'],
};

// 카카오 로그인 URL 요청
export const useKakaoLoginUrl = () => {
  return useQuery({
    queryKey: LOGIN_QUERY_KEYS.KAKAO_LOGIN,
    queryFn: fetchKakaoLogin,
    staleTime: 0,
    gcTime: 0,
    refetchOnWindowFocus: false,
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
