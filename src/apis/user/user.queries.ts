import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { postNicknameCheck, getBoardList, getFavoriteBoardList, getToolList, getUserInfo, patchInfo } from './user.api';
import { MYPAGE_QUERY_KEY } from '@constants/queryKey';

// 회원 정보 가져오기
export const useInfoQuery = () => {
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
export const useInfoMutation = () => {
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
export const useMyPostQuery = (pageNo: number) => {
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
export const useFavoritePostQuery = (pageNo: number) => {
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
export const useFavoriteToolQuery = () => {
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

export const useNicknameCheckMutation = () => {
  return useMutation({
    mutationFn: async (nickname: string) => {
      const response = await postNicknameCheck(nickname);
      return response;
    },
  });
};
