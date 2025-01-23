import { Half, Free, Paid } from '@assets/svgs';

export const getLicenseBadgeContent = (license: string) => {
  switch (license) {
    case '유료':
      return { icon: <Paid />, text: '유료' };
    case '무료':
      return { icon: <Free />, text: '무료' };
    case '부분 무료':
      return { icon: <Half />, text: '부분 유료' };
    default:
      return { icon: null, text: '' };
  }
};

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

export interface ScrollPaginationDto {
  nextCursor: number;
  totalElements: number;
}

export interface ToolResponse {
  tools: Tool[];
  scrollPaginationDto: ScrollPaginationDto;
}
export interface FetchToolsResponse {
  tools: Tool[];
  scrollPaginationDto: {
    nextCursor: number;
  };
}
