import { useMutation } from '@tanstack/react-query';

import { postNicknameCheck } from './api';

export const usePostNicknameCheck = () => {
  return useMutation({
    mutationFn: async (nickname: string) => {
      const response = await postNicknameCheck(nickname);
      return response;
    },
  });
};
