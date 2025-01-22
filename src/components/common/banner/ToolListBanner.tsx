import { Img } from '@assets/svgs';
import { INITIAL_TOOL_STATE } from '@constants/toolListBanner/ToolListBannerConstants';
import React, { useEffect, useState } from 'react';

import * as S from './ToolListBanner.styled';

import Chip from '../chip/Chip';

import { fetchCategories, fetchToolsByCategory } from '../../../apis/toolBanner/ToolBannerApi';
import { ToolSelectState, ToolProp, Category } from '../../../types/toolListBanner/ToolListBannerTypes';
import { clearSelectedTool } from '../../../utils/toolListBanner/ToolListBannerUtils';

const ToolListBanner = ({ forCommunity = false, onToolSelect = () => {} }: ToolProp) => {
  const [toolState, setToolState] = useState<ToolSelectState>(INITIAL_TOOL_STATE);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
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

  const handleCategoryClick = async (category: string) => {
    setToolState((prev) => ({
      ...prev,
      selectedCategory: prev.selectedCategory === category ? null : category,
    }));

    if (category !== '자유' && category !== toolState.selectedCategory) {
      try {
        const response = await fetchToolsByCategory(category);
        setToolState((prev) => ({
          ...prev,
          tools: response.data.tools || [],
        }));
      } catch (error) {
        console.error('툴 목록을 불러오는 데 실패했습니다:', error);
      }
    }
  };

  const handleFreeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    setToolState((prev) => ({
      ...prev,
      isFree: isChecked,
      selectedTool: null,
      selectedCategory: isChecked ? '자유' : null,
    }));

    onToolSelect(null);
  };

  return (
    <S.Container $forCommunity={forCommunity}>
      <S.TitleBox>
        <S.Title isSelected={!!toolState.selectedTool}>툴 선택</S.Title>
        <S.Subtitle>
          {toolState.selectedTool || toolState.isFree ? (
            <Chip size="medium" stroke>
              <Chip.RectContainer>
                {toolState.isFree ? (
                  <>
                    <Img />
                    <Chip.Label>자유</Chip.Label>
                  </>
                ) : (
                  (() => {
                    const selectedToolData = toolState.tools.find((tool) => tool.toolId === toolState.selectedTool);
                    return selectedToolData ? (
                      <>
                        <Chip.Icon src={selectedToolData.toolLogo} alt="logo" width={2} height={2} />
                        <Chip.Label>{selectedToolData.toolName}</Chip.Label>
                      </>
                    ) : null;
                  })()
                )}
                <S.CloseBtn as="button" onClick={() => clearSelectedTool(setToolState, onToolSelect)}>
                  <Chip.CloseIcon />
                </S.CloseBtn>
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
                <S.CategoryHeader isFreeChecked={toolState.isFree}>
                  <S.CheckboxLabel>
                    <span>{category.koreanName}</span>
                    <S.CheckBox>
                      <S.CheckboxInput
                        className="category-free"
                        type="checkbox"
                        checked={toolState.isFree}
                        onChange={handleFreeCheck}
                      />
                      {toolState.isFree && <S.Unions />}
                    </S.CheckBox>
                  </S.CheckboxLabel>
                </S.CategoryHeader>
              ) : (
                <S.CategoryHeader
                  isFreeChecked={false}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).classList.contains('ic-chevron')) return;
                    handleCategoryClick(category.name);
                  }}
                >
                  <span>{category.koreanName}</span>
                  <S.Chevron isSelected={toolState.selectedCategory === category.name} />
                </S.CategoryHeader>
              )}
              {toolState.selectedCategory === category.name && category.name !== '자유' && (
                <S.ToolList>
                  {toolState.tools.length > 0 ? (
                    toolState.tools.map((tool) => (
                      <S.ToolItem
                        key={tool.toolId}
                        onClick={() => {
                          setToolState((prev) => ({
                            ...prev,
                            selectedTool: tool.toolId,
                            isFree: false,
                          }));
                          onToolSelect(tool.toolId);
                        }}
                        isSelected={toolState.selectedTool === tool.toolId}
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
