import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { postNicknameCheck, getBoardList, getFavoriteBoardList, getToolList, getUserInfo, patchInfo } from './user.api';
import { MYPAGE_QUERY_KEY } from '@constants/queryKey';
import extractNickname from 'src/utils/extractNickname';

// 회원 정보 가져오기
export const useInfoQuery = () => {
  const userNickname = extractNickname();

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_INFO(userNickname ?? ''),
    queryFn: () => getUserInfo(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userNickname,
  });
};

// 회원 정보 수정하기
export const useInfoMutation = () => {
  const userItem = localStorage.getItem('user');
  const userData = userItem ? JSON.parse(userItem) : null;
  const userNickname = userData?.nickname || null;

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

      queryClient.refetchQueries({ queryKey: MYPAGE_QUERY_KEY.MY_INFO(userNickname) });
    },
  });
};

// 작성글 가져오기
export const useMyPostQuery = (pageNo: number) => {
  const userNickname = extractNickname();

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST(userNickname ?? '', pageNo),
    queryFn: () => getBoardList(pageNo),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userNickname,
  });
};

// 스크랩한 글 가져오기
export const useFavoritePostQuery = (pageNo: number) => {
  const userNickname = extractNickname();

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_POST_LIST(userNickname ?? '', pageNo),
    queryFn: () => getFavoriteBoardList(pageNo),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userNickname,
  });
};

// 스크랩한 툴 가져오기
export const useFavoriteToolQuery = () => {
  const userNickname = extractNickname();

  return useQuery({
    queryKey: MYPAGE_QUERY_KEY.MY_FAVORITE_TOOL_LIST(userNickname ?? ''),
    queryFn: () => getToolList(),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!userNickname,
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
