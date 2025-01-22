export interface BoardList {
  boardList: Board[];
}

export interface Board {
  boardId: number;
  toolName: string;
  toolLogo: string;
  author: string;
  title: string;
  content: string;
  images: string[];
  updatedAt: string;
  commentCount: number;
  isScrapped: boolean;
}

export interface PageInfo {
  pageNo: number;
  size: number;
  totalPages: number;
}

export interface BoardResponseData {
  boardList: Board[];
  userId: number;
  pageInfo: PageInfo;
}

export interface BoardResponse {
  statusCode: number;
  message: string;
  data: BoardResponseData;
}
