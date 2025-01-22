import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import postBoard from './api';

export const useBoardUpdate = () => {
  //   const userItem = localStorage.getItem('user');
  //   const userData = userItem ? JSON.parse(userItem) : null;
  //   const userId = userData?.accessToken || null;

  //   const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (req: { id: number | null; data: FormData }) => postBoard(req),
    onSuccess: () => {
      navigate('/community');
    },
  });
};
