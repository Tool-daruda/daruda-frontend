import { Img } from '@assets/svgs';
import { INITIAL_TOOL_STATE } from '@constants/toolListBanner/ToolListBannerConstants';
import React, { useEffect, useState } from 'react';
import Spinner from 'src/components/skeleton/ToolBannerSkeleton';

import * as S from './ToolListBanner.styled';

import Chip from '../chip/Chip';

import { fetchCategories, fetchToolsByCategory } from '../../../apis/toolBanner/ToolBannerApi';
import { ToolSelectState, ToolProp, Category, OriginToolType } from '../../../types/toolListBanner/ToolListBannerTypes';
import { clearSelectedTool } from '../../../utils/toolListBanner/ToolListBannerUtils';

const ToolListBanner = ({ originTool, forCommunity = false, onToolSelect = () => {} }: ToolProp) => {
  const [toolState, setToolState] = useState<ToolSelectState>(INITIAL_TOOL_STATE);
  const [categories, setCategories] = useState<Category[]>([]);
  const [initialTool, setInitialTool] = useState<OriginToolType>();

  useEffect(() => {
    if (originTool?.toolId === null) {
      setToolState((prev) => ({
        ...prev,
        isFree: true,
        selectedTool: null,
      }));
    } else if (originTool) {
      setToolState((prev) => ({
        ...prev,
        isFree: false,
        selectedTool: originTool?.toolId,
        selectedCategory: originTool.toolName,
        tools: originTool
          ? [{ toolId: originTool.toolId as number, toolName: originTool.toolName, toolLogo: originTool.toolLogo }]
          : [],
      }));
    }
  }, [originTool]);

  // 툴 카테고리(아코디언) 조회
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

  // 툴 카테고리(아코디언)을 클릭했을 때 해당 카테고리의 툴 조회
  const handleCategoryClick = async (category: string) => {
    setToolState((prev) => ({
      ...prev,
      selectedCategory: prev.selectedCategory === category ? null : category,
    }));

    // 선택한 카테고리가 자유가 아니고 새로운 카테고리일 때
    if (category !== '자유' && category !== toolState.selectedCategory) {
      try {
        const response = await fetchToolsByCategory(category); // 새로운 툴 목록 조회 요청
        setToolState((prev) => ({
          ...prev,
          tools: response.data.tools || [], // 보여지는 툴 목록들 바꾸기
        }));
      } catch (error) {
        console.error('툴 목록을 불러오는 데 실패했습니다:', error);
      }
    }
  };

  // 자유 카테고리 클릭 이벤트 처리
  const handleFreeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked; // 자유의 체크 여부

    setToolState((prev) => ({
      ...prev,
      isFree: isChecked,
      selectedTool: null,
      selectedCategory: isChecked ? '자유' : null, // 자유를 클릭했다면 자유 보여주고, 자유 체크를 해제했다면 모두 리셋
    }));

    onToolSelect(null, isChecked);
  };

  return (
    <S.Container $forCommunity={forCommunity}>
      <S.TitleBox>
        <S.Title isSelected={!!toolState.selectedTool}>툴 선택</S.Title>
        <S.Subtitle>
          {/* tool이 선택되어있을 때 */}
          {toolState.selectedTool || toolState.isFree ? (
            <Chip size="medium" stroke>
              <Chip.RectContainer>
                {toolState.isFree ? (
                  // tool이 자유일 때
                  <>
                    <Img />
                    <Chip.Label>자유</Chip.Label>
                  </>
                ) : (
                  // tool이 자유가 아닐 때
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
                <S.CloseBtn
                  as="button"
                  onClick={() => {
                    clearSelectedTool(setToolState, onToolSelect);
                    setInitialTool({
                      toolId: null,
                      toolName: null,
                      toolLogo: null,
                    });
                  }}
                >
                  <Chip.CloseIcon />
                </S.CloseBtn>
              </Chip.RectContainer>
            </Chip>
          ) : initialTool?.toolLogo && initialTool?.toolName ? (
            // 선택한 tool이 없지만 originTool이 있을 때 (게시글 수정 페이지 초기 상태)
            <Chip size="medium" stroke>
              <Chip.RectContainer>
                <Chip.Icon src={initialTool.toolLogo as string} alt="logo" width={2} height={2} />
                <Chip.Label>{initialTool.toolName}</Chip.Label>
                <S.CloseBtn
                  as="button"
                  onClick={() =>
                    setInitialTool({
                      toolId: null,
                      toolName: null,
                      toolLogo: null,
                    })
                  }
                >
                  <Chip.CloseIcon />
                </S.CloseBtn>
              </Chip.RectContainer>
            </Chip>
          ) : (
            // tool 선택 안했을 때
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
          ))
        ) : (
          <Spinner />
        )}
      </S.CategoryList>
    </S.Container>
  );
};

export default ToolListBanner;
