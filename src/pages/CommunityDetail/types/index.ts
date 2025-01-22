export interface Comment {
  content: string;
  commentId: number;
  nickname: string;
  image: string;
  updatedAt: string;
}

export interface Pagenation {
  totalElements: number;
  nextCursor: number | null;
}

export interface CommentResponse {
  commentList: Comment[];
  pageInfo: Pagenation;
}
