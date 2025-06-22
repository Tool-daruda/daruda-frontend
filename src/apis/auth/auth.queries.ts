import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { getKakaoLogin, postAuthorization, deleteAccount, postLogout } from './auth.api';
import { MYPAGE_QUERY_KEY, LOGIN_QUERY_KEY } from '@constants/queryKey';

// 카카오 로그인 URL 요청
export const useKakaoLoginUrl = () => {
  return useQuery({
    queryKey: LOGIN_QUERY_KEY.KAKAO_LOGIN(),
    queryFn: getKakaoLogin,
    staleTime: 0,
    gcTime: 0,
    refetchOnWindowFocus: false,
  });
};

// 인가 코드 전송
export const useSendAuthorization = () => {
  return useMutation({
    mutationFn: (code: string) => postAuthorization(code),
    onSuccess: (data) => {
      console.log('로그인 성공 데이터:', data);
      // 성공 시 토큰 저장 및 페이지 이동 로직 추가 가능
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
};

// 회원 탈퇴
export const useAccountDeleteMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => deleteAccount(),
    onSuccess: () => {
      {
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_INFO() });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST() });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST() });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST() });
      }

      // localStorage에서 'user' 삭제
      localStorage.removeItem('user');
      navigate('/');
    },
  });
};

// 로그아웃
export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      {
        // userId와 관련된 모든 쿼리 무효화
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_INFO() });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST() });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST() });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST() });
      }
      queryClient.clear();
      localStorage.removeItem('user');
    },
  });
};
