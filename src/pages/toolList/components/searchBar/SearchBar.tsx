//SearchBar.tsx
import { BlurLeft, RightBlur } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { useRef, useState, useEffect } from 'react';

import * as S from './SearchBar.styled';

import { categories as initialCategories } from '../../constants/searchBar/SearchBarCate';

interface SearchBarProps {
  isSticky: boolean;
}

const SearchBar = ({ isSticky }: SearchBarProps) => {
  const [categoriesState, setCategoriesState] = useState(initialCategories);
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('right');
  const chipContainerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (categoryName: string) => {
    const updatedCategories = categoriesState.map((category) =>
      category.name === categoryName ? { ...category, active: true } : { ...category, active: false },
    );
    setCategoriesState(updatedCategories);
  };

  const scrollToStart = () => {
    if (chipContainerRef.current) {
      chipContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setActiveButton('right');
    }
  };

  const scrollToEnd = () => {
    if (chipContainerRef.current) {
      chipContainerRef.current.scrollTo({
        left: chipContainerRef.current.scrollWidth,
        behavior: 'smooth',
      });
      setActiveButton('left');
    }
  };

  useEffect(() => {
    if (chipContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = chipContainerRef.current;

      if (scrollLeft === 0) {
        setActiveButton('right');
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        setActiveButton('left');
      }
    }
  }, []);

  return (
    <S.SearchBarContainer isSticky={isSticky}>
      <S.SearchBarBox isSticky={isSticky}>
        <S.SearchBarTitle isSticky={isSticky}>{isSticky ? '' : '필요한 툴을 쉽고 빠르게 찾아보세요.'}</S.SearchBarTitle>
        <S.SearchBar isSticky={isSticky}>
          <S.IcSearchGray />
          <S.Search placeholder="지금은 준비 중이에요" disabled isSticky={isSticky} />
        </S.SearchBar>
        <S.SearchChipWrapper>
          {isSticky && activeButton === 'left' && (
            <S.ScrollButtonLeft onClick={scrollToStart}>
              <BlurLeft />
            </S.ScrollButtonLeft>
          )}
          <S.SearchChip ref={chipContainerRef} isSticky={isSticky}>
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
          {isSticky && activeButton === 'right' && (
            <S.ScrollButtonRight onClick={scrollToEnd}>
              <RightBlur />
            </S.ScrollButtonRight>
          )}
        </S.SearchChipWrapper>
      </S.SearchBarBox>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
