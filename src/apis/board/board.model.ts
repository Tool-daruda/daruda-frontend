export type Pagenation = {
  totalElements: number;
  nextCursor: number | null;
};
export interface PostResponse {
  boardId: number;
  toolName: string;
  toolLogo: string;
  author: string;
  title: string;
  content: string;
  images: string[];
  toolId: number | null;
  isScraped: boolean;
  updatedAt: string;
  commentCount: number;
}

export interface GetPostListResponse {
  contents: PostResponse[];
  scrollPaginationDto: Pagenation;
}

export interface InfiniteQueryResponse {
  pages: GetPostListResponse[];
  pageParams: number[];
}

export interface BoardListResponse {
  boardList: PostResponse[];
}

export interface FormContent {
  content: string;
  photoUrl: string | null;
}

export interface FavoriteBoardListResponse {
  boardList: (Omit<PostResponse, 'isScraped'> & { isScrapped: boolean })[];
}
