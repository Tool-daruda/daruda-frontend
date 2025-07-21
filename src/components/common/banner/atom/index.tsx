import React from 'react';

import { Img } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { ToolSelectState, Category } from 'src/types/ToolListBannerTypes';

import * as S from '../ToolListBanner.styled';

export const SelectedToolChip = ({ toolState }: { toolState: ToolSelectState }) => {
  if (toolState.noTopic) {
    return (
      <>
        <Img />
        <Chip.Label>자유</Chip.Label>
      </>
    );
  }

  const selectedToolData = toolState.selectedTool;

  if (!selectedToolData) return null;

  return (
    <>
      <Chip.Icon src={selectedToolData.toolLogo} alt="logo" width={2} height={2} />
      <Chip.Label>{selectedToolData.toolName}</Chip.Label>
    </>
  );
};

export const CategoryHeader = ({
  category,
  toolState,
  handleFreeCheck,
  handleCategoryClick,
}: {
  category: Category;
  toolState: ToolSelectState;
  handleFreeCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryClick: (categoryName: string) => void;
}) => {
  const isNoTopic = category.koreanName === '전체';

  if (isNoTopic) {
    return (
      <S.CategoryHeader isFreeChecked={toolState.noTopic}>
        <S.CheckboxLabel>
          <span>자유</span>
          <S.CheckBox>
            <S.CheckboxInput
              className="category-free"
              type="checkbox"
              checked={toolState.noTopic}
              onChange={handleFreeCheck}
            />
            {toolState.noTopic && <S.Unions />}
          </S.CheckBox>
        </S.CheckboxLabel>
      </S.CategoryHeader>
    );
  }

  return (
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
  );
};
