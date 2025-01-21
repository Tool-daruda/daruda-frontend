import { IcChevron, Img, Union } from '@assets/svgs';
import React, { useEffect, useState } from 'react';

import * as S from './ToolListBanner.styled';

import Chip from '../chip/Chip';

import { fetchCategories, fetchToolsByCategory } from '../../../apis/toolBanner/ToolBannerApi';

type ToolSelectState = {
  selectedCategory: string | null;
  selectedTool: number | null;
  isFreeChecked: boolean;
  isFree: boolean;
  tools: { toolId: number; toolLogo: string; toolName: string }[];
};

interface ToolProp {
  forCommunity?: boolean;
  onToolSelect?: (tool: number | null) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Category {
  name: string;
  koreanName: string;
  tools: string[];
}

const ToolListBanner = ({ forCommunity = false, onToolSelect = () => {} }: ToolProp) => {
  const [toolState, setToolState] = useState<ToolSelectState>({
    selectedCategory: null,
    selectedTool: null,
    isFreeChecked: false,
    tools: [],
    isFree: false,
  });

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        console.log('카테고리 데이터:', data);
        const modifiedData = data.data;

        if (modifiedData.length > 0) {
          modifiedData[0].koreanName = '자유';
        }

        setCategories(modifiedData);
      } catch (error) {
        console.error('카테고리 데이터를 불러오는 데 실패했습니다:', error);
      }
    };

    getCategories();
  }, []);

  const { selectedCategory, selectedTool, isFreeChecked, tools } = toolState;

  const handleCategoryClick = async (category: string) => {
    if (toolState.selectedCategory === category) {
      return;
    }

    setToolState((prev) => ({
      ...prev,
      selectedCategory: category,
      tools: category === '자유' ? [] : prev.tools,
    }));

    if (category !== '자유') {
      try {
        const response = await fetchToolsByCategory(category);
        console.log('툴 목록 데이터:', response.data);
        const tools = response.data.tools || [];
        setToolState((prev) => ({
          ...prev,
          tools,
        }));
      } catch (error) {
        console.error('툴 목록을 불러오는 데 실패했습니다:', error);
      }
    }
  };

  const handleToolClick = (toolName: string, toolId: number) => {
    if (toolState.isFree) {
      setToolState((prev) => ({
        ...prev,
        isFree: false,
        selectedCategory: null,
      }));
    }

    if (toolState.selectedTool === toolId) return;

    setToolState((prev) => ({
      ...prev,
      selectedTool: toolId,
      isFreeChecked: false,
    }));

    console.log('선택한 툴 이름:', toolName, '선택한 툴 ID:', toolId);
    onToolSelect(toolId);
  };

  const clearSelectedTool = () => {
    setToolState((prev) => ({
      ...prev,
      selectedTool: null,
      isFreeChecked: false,
      isFree: false,
      selectedCategory: null,
    }));
    onToolSelect(null);
  };

  const handleFreeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    setToolState((prev) => ({
      ...prev,
      isFreeChecked: isChecked,
      selectedTool: null,
      isFree: isChecked,
      selectedCategory: isChecked ? '자유' : prev.selectedCategory,
    }));

    onToolSelect(null);
  };

  return (
    <S.Container $forCommunity={forCommunity}>
      <S.TitleBox>
        <S.Title isSelected={!!selectedTool}>툴 선택</S.Title>
        <S.Subtitle>
          {selectedTool || toolState.isFree ? (
            <Chip size="medium" stroke>
              <Chip.RectContainer>
                {toolState.isFree ? (
                  <>
                    <Img />
                    <Chip.Label>자유</Chip.Label>
                  </>
                ) : (
                  (() => {
                    const selectedToolData = tools.find((tool) => tool.toolId === selectedTool);
                    return selectedToolData ? (
                      <>
                        <Chip.Icon src={selectedToolData.toolLogo} alt="logo" width={2} height={2} />
                        <Chip.Label>{selectedToolData.toolName}</Chip.Label>
                      </>
                    ) : null;
                  })()
                )}
                <button
                  onClick={clearSelectedTool}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      clearSelectedTool();
                    }
                  }}
                  style={{ display: 'flex', cursor: 'pointer' }}
                >
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
        {categories.length > 0 ? (
          categories.map((category) => (
            <S.CategoryItem key={category.name}>
              {category.koreanName === '자유' ? (
                <S.CategoryHeader isFreeChecked={isFreeChecked}>
                  <S.CheckboxLabel>
                    <span>{category.koreanName}</span>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <S.CheckboxInput
                        className="category-free"
                        type="checkbox"
                        checked={isFreeChecked}
                        onChange={handleFreeCheck}
                      />
                      {isFreeChecked && (
                        <Union
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      )}
                    </div>
                  </S.CheckboxLabel>
                </S.CategoryHeader>
              ) : (
                <S.CategoryHeader isFreeChecked={false} onClick={() => handleCategoryClick(category.name)}>
                  <span>{category.koreanName}</span>
                  <IcChevron
                    style={{
                      transform: selectedCategory === category.name ? 'rotate(0deg)' : 'rotate(180deg)',
                    }}
                  />
                </S.CategoryHeader>
              )}
              {selectedCategory === category.name && category.name !== '자유' && (
                <S.ToolList>
                  {tools.length > 0 ? (
                    tools.map((tool) => (
                      <S.ToolItem
                        key={tool.toolId}
                        onClick={() => handleToolClick(tool.toolName, tool.toolId)}
                        isSelected={selectedTool === tool.toolId}
                      >
                        <img src={tool.toolLogo} alt={tool.toolName} width={20} height={20} />
                        {tool.toolName}
                      </S.ToolItem>
                    ))
                  ) : (
                    <S.Loading>툴 목록을 불러오는 중입니다 !</S.Loading>
                  )}
                </S.ToolList>
              )}
            </S.CategoryItem>
          ))
        ) : (
          <S.Loading>카테고리 데이터를 불러오는 중입니다...</S.Loading>
        )}
      </S.CategoryList>
    </S.Container>
  );
};

export default ToolListBanner;
