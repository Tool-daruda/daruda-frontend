import { AxiosResponse, AxiosError } from 'axios';

import { GetPostListResponse, PostResponse } from '@apis/board/board.model';
import { del, post, get, patch } from '@apis/index';

// 커뮤니티 게시글 목록 페이지 get
export const getBoardList = async ({
  pageParam = -1,
  queryKey,
}: {
  pageParam: number | null | unknown;
  queryKey: [string, { noTopic?: boolean; size?: number; toolId?: number | null }];
}): Promise<GetPostListResponse> => {
  try {
    const [, { noTopic, size, toolId }] = queryKey;

    const url =
      `/board?` +
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

// 커뮤니티 게시글 post
export const postBoard = async (formData: FormData): Promise<PostResponse> => {
  try {
    const response = await post<PostResponse>('/board', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('게시 실패:', error);
    throw new Error('게시 실패');
  }
};

// 커뮤니티 북마크 post
export const postBoardScrap = async (boardId: number) => {
  try {
    const response = await post<{
      statusCode: number;
      message: string;
      data: {
        boardId: number;
        scrap: boolean;
      };
    }>(`/board/${boardId}/scrap`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('err:', error.message);
    }
    throw error;
  }
};

// 커뮤니티 게시글 상세 조회 get
export const getDeatilBoard = async (postId: string | undefined): Promise<PostResponse | null> => {
  try {
    const res: AxiosResponse<PostResponse> = await get(`/board/${postId}`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error('게시글 상세 정보 조회 실패');
  }
};

// 커뮤니티 게시글 delete
export const delBoard = async (boardId: number) => {
  try {
    const response = await del(`board/${boardId}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('err:', error.message);
    }
    throw error;
  }
};

// 커뮤니티 게시글 patch
export const patchBoard = async (req: { id: number | null; data: FormData }): Promise<PostResponse> => {
  try {
    const response = await patch<PostResponse>(`/board/${req.id}`, req.data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('수정 실패:', error);
    throw new Error('수정 실패');
  }
};
