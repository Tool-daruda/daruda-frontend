import { IcSearchGray32 } from '@assets/svgs';
import { useState } from 'react';

import * as S from './SearchBar.styled';

import Chip from '../../../../components/common/chip/Chip';
import { categories as initialCategories } from '../../constants/searchBar/SearchBarCate';

const SearchBar = () => {
  const [categoriesState, setCategoriesState] = useState(initialCategories);

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
          <S.SearchBar>
            <IcSearchGray32 />
            <S.Search placeholder="지금은 준비 중이에요" disabled />
          </S.SearchBar>
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
