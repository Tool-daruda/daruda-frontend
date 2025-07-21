export interface PostFormData {
  title: string;
  content: string;
  toolId?: number;
  isFree: boolean;
  imageList: string[];
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

export interface FormDataType {
  title: string;
  content: string;
  isFree: boolean;
  selectedTool: number | null;
  imageList: string[];
}
