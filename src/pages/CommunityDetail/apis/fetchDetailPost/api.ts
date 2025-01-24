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
    throw new Error('게시글 상세 정보 조회 실패');
  }
};

export default fetchDeatilPost;
