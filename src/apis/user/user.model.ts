import { PostResponse as Board } from '@apis/board';
import { Tool } from '@apis/tool';

type PageInfo = {
  pageNo: number;
  size: number;
  totalPages: number;
};

export type Info = {
  userId: number;
  nickname: string;
  positions: string;
};

export interface InfoResponse {
  statusCode: number;
  message: string;
  data: Info;
}

export interface BoardResponse {
  boardList: Board[];
  userId: number;
  pageInfo: PageInfo;
}

export interface ToolList {
  toolList: Tool[];
}
