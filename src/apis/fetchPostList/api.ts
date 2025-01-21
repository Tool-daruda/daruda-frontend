import { get } from '@apis/index';
import type { AxiosResponse } from 'axios';
import { GetPostListResponse } from 'src/types/post';

const fetchPostList = async ({
  pageParam = -1,
  queryKey,
}: {
  pageParam: number | null | unknown;
  queryKey: [string, { isFree?: boolean; lastBoardId?: number | null; size?: number; toolId?: number }];
}): Promise<GetPostListResponse> => {
  try {
    const [, { isFree, size, toolId }] = queryKey;

    const url =
      `/boards/board/list?` +
      `isFree=${isFree ? 0 : 1}` +
      `${size ? `&size=${size}` : ''}` +
      `${toolId ? `&toolId=${toolId}` : ''}` +
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
