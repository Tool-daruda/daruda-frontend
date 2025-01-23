import { get } from '@apis/index';
import type { AxiosResponse } from 'axios';
import { Post as PostResponse } from 'src/types/post';

// 커뮤니티 게시글 상세 정보 GET
const fetchDeatilPost = async (postId: string | undefined): Promise<PostResponse | null> => {
  try {
    const res: AxiosResponse<PostResponse> = await get(`/boards/board/${postId}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default fetchDeatilPost;
