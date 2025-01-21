interface Platform {
  Web: boolean;
  Windows: boolean;
  Mac: boolean;
}

export interface ToolType {
  toolId: number;
  toolMainName: string;
  toolSubName: string;
  description: string;
  license: '무료' | '부분 무료' | '유료';
  keywords: string[];
  category: string;
  toolLink: string;
  supportKorea: boolean;
  platform: Platform[];
  detailDescription: string;
  videos: string[];
  images: string[];
  bgColor: string;
  fontColor: string | boolean;
  updatedAt: string;
  isScrapped: boolean;
  toolLogo: string;
}

export interface CoreFeatureType {
  toolCoreResList: {
    coreId: number;
    coreTitle: string;
    coreContent: string;
  }[];
}

export interface ToolPlan {
  toolPlans: {
    price: string | number;
    planId: number;
    planName: string;
    monthlyPrice: number | null;
    annualPrice: number | null;
    description: string;
    isDollar: boolean;
  }[];
}

export interface RelatedTool {
  relatedToolResList: {
    toolId: number;
    toolName: string;
    toolLogo: string;
    license: '무료' | '부분 무료' | '유료';
    keywords: string[];
  }[];
}
