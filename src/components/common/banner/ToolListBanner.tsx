import { IcChevronDownBlack16 } from '@assets/svgs';
import React, { useState } from 'react';

import * as S from './ToolListBanner.styled';

import Chip from '../chip/Chip';

const categories: string[] = [
  '자유',
  'AI',
  '문서 작성&편집',
  '프레젠테이션',
  '협업&커뮤니케이션',
  '데이터',
  '그래픽&디자인',
  '영상&음악',
  '코딩&개발',
  '설계&모델링',
  '생활',
  '커리어&자기개발',
];

type Tool = {
  toolId: number;
  toolName: string;
  toolLogo: string;
  description: string;
  license: 'FREE' | 'PAID';
  keywords: string[];
  fetchPostList?: () => void;
};

type ToolSelectState = {
  selectedCategory: string | null;
  selectedTool: string | null;
  isFreeChecked: boolean;
};

type HandleCategoryClick = (category: string) => void;
type HandleToolClick = (toolName: string) => void;
type HandleFreeCheck = (event: React.ChangeEvent<HTMLInputElement>) => void;

const tools: Tool[] = [
  {
    toolId: 1,
    toolName: 'ElevenLabs',
    toolLogo: 'https://storage.googleapis.com/gweb-cloudblog-publish/images/ElevenLabs.max-2500x2500.jpg',
    description: 'AI 오디오 플랫폼으로 가장 현실적인 음성을 만들어보세요',
    license: 'PAID',
    keywords: ['AI', '음성', '생산성'],
  },
  {
    toolId: 2,
    toolName: 'ChatGPT',
    toolLogo: 'https://openai.com/chatgpt-logo.png',
    description: '즉각적인 답변, 더 높은 생산성, 무한한 영감',
    license: 'FREE',
    keywords: ['그래픽 제작', '디자인', '3D'],
  },
  {
    toolId: 3,
    toolName: 'Figma',
    toolLogo: 'https://figma.com/logo.png',
    description: '디자인 협업의 새로운 표준',
    license: 'PAID',
    keywords: ['AI', '음성', '생산성'],
  },
];

const ToolSelect = () => {
  const [state, setState] = useState<ToolSelectState>({
    selectedCategory: null,
    selectedTool: null,
    isFreeChecked: false,
  });

  const clearSelectedTool = () => {
    setState((prev) => ({ ...prev, selectedTool: null }));
  };

  const handleCategoryClick: HandleCategoryClick = (category) => {
    setState((prev) => ({
      ...prev,
      selectedCategory: prev.selectedCategory === category ? null : category,
    }));
  };

  const handleToolClick: HandleToolClick = (toolName) => {
    setState((prev) => ({ ...prev, selectedTool: toolName }));
    // fetchPostList();
  };

  const handleFreeCheck: HandleFreeCheck = (event) => {
    setState((prev) => ({ ...prev, isFreeChecked: event.target.checked }));
  };

  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>툴 선택</S.Title>
        <S.Subtitle>
          {state.selectedTool ? (
            <Chip size="medium" stroke={true}>
              <Chip.RectContainer>
                <Chip.Icon
                  src={tools.find((tool) => tool.toolName === state.selectedTool)?.toolLogo || '/svgs/default_logo.svg'}
                  alt="Custom Icon"
                  width={2}
                  height={2}
                />
                <Chip.Label>{state.selectedTool}</Chip.Label>
                <button onClick={clearSelectedTool} style={{ display: 'flex', cursor: 'pointer' }}>
                  <Chip.CloseIcon width={20} height={20} />
                </button>
              </Chip.RectContainer>
            </Chip>
          ) : (
            '글과 관련된 툴을 선택해주세요.'
          )}
        </S.Subtitle>
      </S.TitleBox>
      <S.CategoryList>
        {categories.map((category) => (
          <S.CategoryItem key={category}>
            {category === '자유' ? (
              <S.CategoryHeader>
                <S.CheckboxLabel>
                  <span>{category}</span>
                  <S.CheckboxInput type="checkbox" checked={state.isFreeChecked} onChange={handleFreeCheck} />
                </S.CheckboxLabel>
              </S.CategoryHeader>
            ) : (
              <S.CategoryHeader onClick={() => handleCategoryClick(category)}>
                <span>{category}</span>
                <IcChevronDownBlack16
                  style={{
                    transform: state.selectedCategory === category ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </S.CategoryHeader>
            )}
            {state.selectedCategory === category && (
              <S.ToolList>
                {tools.map((tool) => (
                  <S.ToolItem
                    key={tool.toolId}
                    isSelected={state.selectedTool === tool.toolName}
                    onClick={() => handleToolClick(tool.toolName)}
                  >
                    <img src={tool.toolLogo} alt={tool.toolName} style={{ width: '2rem', height: '2rem' }} />
                    {tool.toolName}
                  </S.ToolItem>
                ))}
              </S.ToolList>
            )}
          </S.CategoryItem>
        ))}
      </S.CategoryList>
    </S.Container>
  );
};

export default ToolSelect;
