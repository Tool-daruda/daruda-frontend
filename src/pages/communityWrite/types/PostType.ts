//PostType.ts
export interface PostBoardData {
  title: string;
  content: string;
  toolId?: number;
  images?: string[];
  isFree: boolean;
}

export interface BoardResponseData {
  boardId: number;
  toolName: string;
  toolLogo: string;
  author: string;
  title: string;
  content: string;
  images?: string[];
  updatedAt: string;
  commentCount: number;
}

export interface PostBoardResponse {
  status: number;
  message: string;
  data: string;
}
