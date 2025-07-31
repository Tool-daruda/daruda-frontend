export interface SearchTool {
  toolId: number;
  toolName: string;
  toolLogo: string;
  description: string;
  license: string;
  keywords: string[];
  isScraped: boolean;
  bgColor: string;
  fontColor: boolean;
}

export interface SearchBoard {
  boardId: number;
  toolName: string;
  toolLogo: string;
  author: string;
  title: string;
  content: string;
  imageUrl: string[];
  isScraped: boolean;
  createdAt: string;
  toolId: number;
  updatedAt: string;
  commentCount: number;
}

export type SearchToolResponse = SearchTool[];

export interface SearchBoardResponse {
  status: number;
  message: string;
  contents: SearchBoard[];
  scrollPaginationDto: {
    totalElements: number;
    nextCursor: number | null;
  };
}
