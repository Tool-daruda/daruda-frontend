import React from 'react';

export type ToolSelectState = {
  selectedCategory: string | null;
  selectedTool: number | null;
  isFree: boolean;
  tools: { toolId: number; toolLogo: string; toolName: string }[];
};

export interface ToolProp {
  forCommunity?: boolean;
  onToolSelect?: (tool: number | null) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Category {
  name: string;
  koreanName: string;
  tools?: { toolId: number; toolLogo: string; toolName: string }[];
}
export interface CategoryResponse {
  data: { name: string; koreanName: string }[];
}

export interface ToolResponse {
  data: { tools: { toolId: number; toolLogo: string; toolName: string }[] };
}
