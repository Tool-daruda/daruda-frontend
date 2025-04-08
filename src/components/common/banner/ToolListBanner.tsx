import { SelectedToolChip, CategoryHeader } from './atom';
import * as S from './ToolListBanner.styled';
import { useToolBanner } from '@hooks/index';
import Spinner from 'src/components/skeleton/ToolBannerSkeleton';

import Chip from '../chip/Chip';

import { ToolProp } from '../../../types/ToolListBannerTypes';

const ToolListBanner = ({ originTool, forCommunity = false, onToolSelect = () => {} }: ToolProp) => {
  const { toolState, categoryData, handleCategoryClick, handleFreeCheck, setToolState, clearSelectedTool } =
    useToolBanner({
      originTool,
      onToolSelect,
    });

  return (
    <S.Container $forCommunity={forCommunity}>
      <S.TitleBox>
        <S.Title isSelected={!!toolState.selectedTool}>툴 선택</S.Title>
        <S.Subtitle>
          {toolState.selectedTool || toolState.noTopic ? (
            <Chip size="medium" stroke>
              <Chip.RectContainer>
                <SelectedToolChip originTool={originTool} toolState={toolState} />
                <S.CloseBtn
                  as="button"
                  onClick={() => {
                    clearSelectedTool(setToolState, onToolSelect);
                  }}
                >
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
        {categoryData &&
          categoryData?.data.map((category) => (
            <S.CategoryItem key={category.name}>
              <CategoryHeader
                category={category}
                toolState={toolState}
                handleFreeCheck={handleFreeCheck}
                handleCategoryClick={handleCategoryClick}
              />
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
                            noTopic: false,
                          }));
                          onToolSelect(tool.toolId, false);
                        }}
                        isSelected={toolState.selectedTool === tool.toolId}
                      >
                        <img src={tool.toolLogo} alt={tool.toolName} width={20} height={20} />
                        {tool.toolName}
                      </S.ToolItem>
                    ))
                  ) : (
                    <Spinner />
                  )}
                </S.ToolList>
              )}
            </S.CategoryItem>
          ))}
      </S.CategoryList>
    </S.Container>
  );
};

export default ToolListBanner;
