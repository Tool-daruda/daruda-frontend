import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deleteAccount, getBoardList, getFavoriteBoardList, getToolList, getUserInfo, logout, patchInfo } from './api';

export const MYPAGE_QUERY_KEY = {
  MY_INFO: (userId: number) => ['myInfo', userId],
  MY_POST_LIST: (userId: number) => ['myPostList', userId],
  MY_FAVORITE_POST_LIST: (userId: number) => ['myFavortiePostList', userId],
  MY_FAVORITE_TOO_LIST: (userId: number) => ['myFavortiePostList', userId],
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
    mutationFn: ({ nickname, position }: { nickname?: string; position?: string }) => patchInfo({ nickname, position }),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: MYPAGE_QUERY_KEY.MY_INFO(userId) });
    },
  });
};

export const useGetMyPost = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST(userId),
    queryFn: () => getBoardList(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
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
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userId,
  });
};

export const useGetFavoriteTool = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userId = userData?.accessToken || null;

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOO_LIST(userId),
    queryFn: () => getToolList(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userId,
  });
};

export const useAccountDelete = () => {
  return useMutation({
    mutationFn: () => deleteAccount(),
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
        queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOO_LIST(userId) });
      }

      // localStorage에서 'user' 삭제
      localStorage.removeItem('user');
    },
  });
};
