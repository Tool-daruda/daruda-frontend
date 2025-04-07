// 기본 유틸리티 타입들
export type Pagenation = {
  totalElements: number;
  nextCursor: number | null;
};

export type Platform = {
  Web: boolean;
  Windows: boolean;
  Mac: boolean;
};

export type Category = {
  id: string;
  name: string;
};

export interface CategoryItem {
  name: string;
  koreanName: string;
}

// 공통 Base Tool 타입
type BaseTool = {
  toolId: number;
  toolLogo: string;
  description?: string;
  license: '무료' | '부분 무료' | '유료' | string;
  keywords: string[];
  bgColor: string;
};

// 상세 페이지용 Tool 타입
export interface DetailToolResponse extends BaseTool {
  toolMainName: string;
  toolSubName: string;
  category: string;
  toolLink: string;
  supportKorea: boolean;
  platform: Platform[];
  detailDescription: string;
  videos: string[];
  images: string[];
  fontColor: string | boolean;
  updatedAt: string;
  isScrapped: boolean;
}

// 툴 핵심 기능 타입
export interface CoreFeatureResponse {
  toolCoreResList: ToolCoreFeature[];
}

interface ToolCoreFeature {
  coreId: number;
  coreTitle: string;
  coreContent: string;
}

// 툴 요금제 타입
export interface ToolPlanResponse {
  toolPlans: ToolPlan[];
}

type ToolPlan = {
  price: string | number;
  planId: number;
  planName: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  description: string;
  isDollar: boolean;
};

// 대안 툴 타입
export interface AlternativeToolResponse {
  relatedToolResList: AlternativeTool[];
}

export interface AlternativeTool {
  toolId: number;
  toolName: string;
  toolLogo: string;
  license: '무료' | '부분 무료' | '유료';
  keywords: string[];
}

// 전체 리스트용 Tool 타입
export interface Tool extends BaseTool {
  toolName: string;
  fontColor: boolean;
  isScraped: boolean;
}

export interface ToolListRequest {
  category: string;
  isFree: boolean;
  criteria: 'popular' | 'createdAt';
  lastToolId: number | null | unknown;
  size: number;
}

export interface ToolListResponse {
  tools: Tool[];
  scrollPaginationDto: Pagenation;
}

export interface InfiniteQueryResponse {
  pages: ToolListResponse[];
  pageParams: number[];
}

export interface ToolResponse {
  tools: Tool[];
}

export interface CategoryResponse {
  statusCode: number;
  message: string;
  data: CategoryItem[];
}
