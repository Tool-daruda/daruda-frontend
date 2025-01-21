export interface Post {
  boardId: number;
  toolName: string;
  toolId: number;
  toolLogo: string;
  author: string;
  title: string;
  content: string;
  images: string[];
  isScraped: boolean;
  updatedAt: string;
  commentCount: number;
}

export interface Pagenation {
  totalElements: number;
  nextCursor: number | null;
}

export interface GetPostListResponse {
  contents: Post[];
  scrollPaginationDto: Pagenation;
}
