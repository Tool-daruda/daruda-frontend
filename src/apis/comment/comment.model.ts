export interface Comment {
  content: string;
  commentId: number;
  nickname: string;
  image: string | null;
  updatedAt: string;
}

export type Pagenation = {
  totalElements: number;
  nextCursor: number | null;
};

export interface CommentResponse {
  commentList: Comment[];
  pageInfo: Pagenation;
}

export interface InfiniteQueryResponse {
  pages: CommentResponse[];
  pageParams: number[];
}

export type ToastType = 'sizeErr' | 'ResubmitErr' | 'postComment' | 'postErr' | null;
