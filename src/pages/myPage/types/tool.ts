export interface ToolList {
  toolList: Tool[];
}

export interface Tool {
  toolId: number;
  toolName: string;
  toolLogo: string;
  description: string;
  license: 'FREE' | 'PAID' | 'PARTIALLY_FREE';
  keywords: string[];
  isScraped: boolean;
}

export interface ToolResponse {
  statusCode: number;
  message: string;
  data: ToolList;
}
