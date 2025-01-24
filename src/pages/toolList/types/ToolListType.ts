export interface Category {
  id: string;
  name: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  isFree: boolean;
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
