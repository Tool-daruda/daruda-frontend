import React from 'react';

export type OriginToolType = {
  toolId: number | null;
  toolName: string | null;
  toolLogo: string | null;
};

export type ToolSelectState = {
  selectedCategory: string | null;
  selectedTool: { toolId: number; toolLogo: string; toolName: string } | null;
  noTopic: boolean;
  tools: { toolId: number; toolLogo: string; toolName: string }[];
};

export interface ToolProp {
  originTool?: { toolId: number | null; toolLogo: string; toolName: string };
  forCommunity?: boolean;
  onToolSelect?: (tool: number | null, noTopic: boolean) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTopicSelect?: (isChecked: boolean) => void;
}
export type Category = {
  name: string;
  koreanName: string;
};

export interface CategoryResponse {
  data: Category[];
}

export interface ToolResponse {
  data: { tools: { toolId: number; toolLogo: string; toolName: string }[] };
}
