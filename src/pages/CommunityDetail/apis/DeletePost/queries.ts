import { useMutation } from '@tanstack/react-query';

import delComment from './api';

const useCommentDelete = (commentId: number) => {
  return useMutation({
    mutationFn: () => delComment(commentId),
    onError: (error) => {
      if (error) {
        throw new Error('Unauthorized');
      }
    },
  });
};

export default useCommentDelete;
