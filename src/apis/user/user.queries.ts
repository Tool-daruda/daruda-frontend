import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { postNicknameCheck, getBoardList, getFavoriteBoardList, getToolList, getUserInfo, patchInfo } from './user.api';
import { MYPAGE_QUERY_KEY } from '@constants/queryKey';
import { extractUserId } from '@utils';

// 회원 정보 가져오기
export const useInfoQuery = (enabled: boolean) => {
  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_INFO(),
    queryFn: () => getUserInfo(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled,
  });
};

// 회원 정보 수정하기
export const useInfoMutation = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;

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

      queryClient.refetchQueries({ queryKey: MYPAGE_QUERY_KEY.MY_INFO() });
    },
  });
};

// 작성글 가져오기
export const useMyPostQuery = (pageNo: number) => {
  const userId = extractUserId();

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST(pageNo),
    queryFn: () => getBoardList(pageNo),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userId,
  });
};

// 스크랩한 글 가져오기
export const useFavoritePostQuery = (pageNo: number) => {
  const userId = extractUserId();

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(pageNo),
    queryFn: () => getFavoriteBoardList(pageNo),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userId,
  });
};

// 스크랩한 툴 가져오기
export const useFavoriteToolQuery = () => {
  const userId = extractUserId();

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(),
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
