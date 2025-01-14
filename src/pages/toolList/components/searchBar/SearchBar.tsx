import { IcSearchGray32 } from '@assets/svgs';
import { useState } from 'react';

import * as S from './SearchBar.styled';

import Chip from '../../../../components/common/chip/Chip';

interface Category {
  name: string;
  active: boolean;
}

const categories: Category[] = [
  { name: '전체', active: true },
  { name: 'AI', active: false },
  { name: '문서 작성&편집', active: false },
  { name: '프레젠테이션', active: false },
  { name: '협업&커뮤니케이션', active: false },
  { name: '데이터', active: false },
  { name: '코딩&개발', active: false },
  { name: '영상&음악', active: false },
  { name: '생활', active: false },
  { name: '설계&모델링', active: false },
  { name: '커리어&자기개발', active: false },
  { name: '그래픽&디자인', active: false },
];

const SearchBar = () => {
  const [categoriesState, setCategoriesState] = useState(categories);

  const handleCategoryClick = (categoryName: string) => {
    const updatedCategories = categoriesState.map((category) =>
      category.name === categoryName ? { ...category, active: true } : { ...category, active: false },
    );
    setCategoriesState(updatedCategories);
  };

  return (
    <S.SearchBarWrapper>
      <S.SearchBarContainer>
        <S.SearchBarBox>
          <S.SearchBarTitle>필요한 툴을 쉽고 빠르게 찾아보세요.</S.SearchBarTitle>
          <S.Search>
            <IcSearchGray32 />
            지금은 준비 중이에요
          </S.Search>
          <S.SearchChip>
            {categoriesState.map((category) => (
              <Chip
                key={category.name}
                size="large"
                active={category.active}
                onClick={() => handleCategoryClick(category.name)}
              >
                <Chip.RoundContainer>
                  <Chip.Label>{category.name}</Chip.Label>
                </Chip.RoundContainer>
              </Chip>
            ))}
          </S.SearchChip>
        </S.SearchBarBox>
      </S.SearchBarContainer>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
