export interface Category {
  id: string;
  name: string;
}

export interface Tool {
  toolId: number;
  toolName: string;
  toolLogo: string;
  description?: string;
  license: string;
  keywords: string[];
  bgColor: string;
  fontColor: boolean;
  isScraped: boolean;
}

export interface ToolResponse {
  tools: Tool[];
}

export interface CategoryItem {
  name: string;
  koreanName: string;
}

export interface CategoryResponse {
  statusCode: number;
  message: string;
  data: CategoryItem[];
}

export interface ToolListRequest {
  category: string;
  isFree: boolean;
  criteria: 'popular' | 'createdAt';
  lastToolId: number | null | unknown;
  size: number;
}

export interface Pagenation {
  totalElements: number;
  nextCursor: number | null;
}

export interface GetToolListResponse {
  tools: Tool[];
  scrollPaginationDto: Pagenation;
}
