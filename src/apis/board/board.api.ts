import axios, { AxiosResponse, AxiosError } from 'axios';

import { GetPostListResponse, PostResponse } from '@apis/board/board.model';
import { del, post, get, patch } from '@apis/index';

import { PostFormData } from './../../pages/communityWrite/types/PostType';

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

// 커뮤니티 게시글 이미지 presignedURL get
export const getPresignedUrls = async (fileName: string) => {
  try {
    const res: AxiosResponse = await get(`/image/presigned-url?imageName=${fileName}`);
    return res.data;
  } catch (err) {
    console.error('Presigned URL 발급 실패:', err);
    throw err;
  }
};

export const putPresignedUrl = async ({ file, signedUrl }: { file: File; signedUrl: string }) => {
  await axios.put(decodeURIComponent(signedUrl), file, {
    headers: { 'Content-Type': file.type },
    withCredentials: false,
  });
};

// 커뮤니티 게시글 post
export const postBoard = async (formData: PostFormData): Promise<PostResponse> => {
  try {
    const response = await post<PostResponse>('/board', formData);
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
export const patchBoard = async (req: { id: number | null; data: PostFormData }): Promise<PostResponse> => {
  try {
    const response = await patch<PostResponse>(`/board/${req.id}`, req.data);
    return response;
  } catch (error) {
    console.error('수정 실패:', error);
    throw new Error('수정 실패');
  }
};
