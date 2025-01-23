import { get } from '@apis/index';
import type { AxiosResponse } from 'axios';
import { GetPostListResponse } from 'src/types/post';

// 커뮤니티 게시글 목록 페이지 (무한스크롤)
const fetchPostList = async ({
  pageParam = -1,
  queryKey,
}: {
  pageParam: number | null | unknown;
  queryKey: [string, { noTopic?: boolean; lastBoardId?: number | null; size?: number; toolId?: number | null }];
}): Promise<GetPostListResponse> => {
  try {
    const [, { noTopic, size, toolId }] = queryKey;

    const url =
      `/boards/board/list?` +
      `${noTopic === false && toolId === null ? '' : `noTopic=${noTopic}`}` +
      `${size ? `&size=${size}` : ''}` +
      `${toolId && !noTopic ? `&toolId=${toolId}` : ''}` +
      `${pageParam ? `&lastBoardId=${pageParam}` : ''}`;

    const res: AxiosResponse<GetPostListResponse> = await get(url);

    return res.data;
  } catch (err) {
    console.error(err);
    return {
      contents: [],
      scrollPaginationDto: {
        totalElements: 0,
        nextCursor: null,
      },
    };
  }
};

export { fetchPostList };
