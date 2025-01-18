import { BlurLeft, RightBlur } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as S from './SearchBar.styled';

import { categories as initialCategories } from '../../constants/searchBar/SearchBarCate';

interface SearchBarProps {
  isSticky: boolean;
}

const SearchBar = ({ isSticky }: SearchBarProps) => {
  const [categoriesState, setCategoriesState] = useState(initialCategories);
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('right');
  const chipContainerRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();

  const categoryFromParams = searchParams.get('category');

  useEffect(() => {
    const updatedCategories = initialCategories.map((category) => ({
      ...category,
      active: category.name === categoryFromParams,
    }));
    setCategoriesState(updatedCategories);
  }, [categoryFromParams]);

  const handleCategoryClick = (categoryName: string) => {
    const encodedCategoryName = encodeURIComponent(categoryName);
    const updatedCategories = categoriesState.map((category) => ({
      ...category,
      active: category.name === categoryName,
    }));
    setCategoriesState(updatedCategories);

    const url = categoryName === '카테고리' ? '/toollist' : `/toollist?category=${encodedCategoryName}`;
    window.location.href = url;
  };

  const handleScroll = (direction: 'start' | 'end') => {
    if (chipContainerRef.current) {
      const scrollPosition = direction === 'start' ? 0 : chipContainerRef.current.scrollWidth;
      chipContainerRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setActiveButton(direction === 'start' ? 'right' : 'left');
    }
  };

  useEffect(() => {
    const handleScrollState = () => {
      if (chipContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = chipContainerRef.current;
        setActiveButton(scrollLeft === 0 ? 'right' : scrollLeft + clientWidth >= scrollWidth ? 'left' : activeButton);
      }
    };

    chipContainerRef.current?.addEventListener('scroll', handleScrollState);
    return () => chipContainerRef.current?.removeEventListener('scroll', handleScrollState);
  }, []);

  return (
    <S.SearchBarContainer isSticky={isSticky}>
      <S.SearchBarBox isSticky={isSticky}>
        {isSticky || <S.SearchBarTitle>필요한 툴을 쉽고 빠르게 찾아보세요.</S.SearchBarTitle>}
        <S.SearchBar isSticky={isSticky}>
          <S.IcSearchGray />
          <S.Search placeholder="지금은 준비 중이에요" disabled isSticky={isSticky} />
        </S.SearchBar>
        <S.SearchChipWrapper>
          {isSticky && activeButton === 'left' && (
            <S.ScrollButtonLeft onClick={() => handleScroll('start')}>
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
            <S.ScrollButtonRight onClick={() => handleScroll('end')}>
              <RightBlur />
            </S.ScrollButtonRight>
          )}
        </S.SearchChipWrapper>
      </S.SearchBarBox>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
