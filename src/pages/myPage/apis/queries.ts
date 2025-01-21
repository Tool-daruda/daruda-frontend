import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deleteAccount, getBoardList, getFavoriteBoardList, getToolList, getUserInfo, logout, patchInfo } from './api';

export const MYPAGE_QUERY_KEY = {
  MY_INFO: (userId: number) => ['myInfo', userId], // 개인정보
  MY_POST_LIST: (userId: number) => ['myPostList', userId], // 작성 글
  MY_FAVORITE_POST_LIST: (userId: number) => ['myFavortiePostList', userId], // 관심 글
  MY_FAVORITE_TOOL_LIST: (userId: number) => ['myFavortieToolList', userId], // 관심 툴
};

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
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: MYPAGE_QUERY_KEY.MY_INFO(userId) });
    },
  });
};

export const useGetMyPost = (pageNo: number) => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST(userId),
    queryFn: () => getBoardList(pageNo),
    staleTime: 0,
    gcTime: 0,
    enabled: !!userId,
  });
};

export const useGetFavoritePost = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(userId),
    queryFn: () => getFavoriteBoardList(),
    staleTime: 0,
    gcTime: 0,
    enabled: !!userId,
  });
};

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

export const useAccountDelete = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  const queryClient = useQueryClient();

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
    },
  });
};

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
