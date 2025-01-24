import { useQuery } from '@tanstack/react-query';
import { Post as PostResponse } from 'src/types/post';

import fetchDeatilPost from './api';

const useGetDetailPost = (id: string | undefined) =>
  useQuery<PostResponse | null>({
    queryKey: ['detailPost', id],
    queryFn: () => fetchDeatilPost(id!),
    enabled: !!id, // `id`가 존재할 때만 ~
    retry: false,
  });

export default useGetDetailPost;
