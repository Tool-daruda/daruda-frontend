import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { deleteAccount, getBoardList, getFavoriteBoardList, getToolList, getUserInfo, logout, patchInfo } from './api';

export const MYPAGE_QUERY_KEY = {
  MY_INFO: (userId: number) => ['myInfo', userId], // 개인정보
  MY_POST_LIST: (userId: number, pageNo?: number) => ['myPostList', userId, pageNo], // 작성 글
  MY_FAVORITE_POST_LIST: (userId: number, pageNo?: number) => ['myFavoritePostList', userId, pageNo], // 관심 글
  MY_FAVORITE_TOOL_LIST: (userId: number) => ['myFavoriteToolList', userId], // 관심 툴
};

// 회원 정보 가져오기
export const useGetInfo = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_INFO(userId),
    queryFn: () => getUserInfo(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userId,
  });
};

// 회원 정보 수정하기
export const usePatchInfo = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ nickname, position }: { nickname?: string; position?: string }) => {
      const response = await patchInfo({ nickname, position });
      return response;
    },
    onSuccess: (_data, variables) => {
      const { nickname } = variables;

      if (nickname) {
        const updatedUser = { ...userData, nickname };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }

      queryClient.refetchQueries({ queryKey: MYPAGE_QUERY_KEY.MY_INFO(userId) });
    },
  });
};

// 작성글 가져오기
export const useGetMyPost = (pageNo: number) => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST(userId, pageNo),
    queryFn: () => getBoardList(pageNo),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userId,
  });
};

// 스크랩한 글 가져오기
export const useGetFavoritePost = (pageNo: number) => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(userId, pageNo),
    queryFn: () => getFavoriteBoardList(pageNo),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userId,
  });
};

// 스크랩한 툴 가져오기
export const useGetFavoriteTool = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(userId),
    queryFn: () => getToolList(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userId,
  });
};

// 회원 탈퇴
export const useAccountDelete = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => deleteAccount(),
    onSuccess: () => {
      if (userId) {
        // userId와 관련된 모든 쿼리 무효화
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_INFO(userId) });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST(userId) });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(userId) });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(userId) });
      }

      // localStorage에서 'user' 삭제
      localStorage.removeItem('user');
      navigate('/');
    },
  });
};

// 로그아웃
export const useLogout = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      if (userId) {
        // userId와 관련된 모든 쿼리 무효화
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_INFO(userId) });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST(userId) });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(userId) });
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(userId) });
      }

      // localStorage에서 'user' 삭제
      localStorage.removeItem('user');
    },
  });
};
