import { BlurLeft, RightBlur } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { useRef, useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import * as S from './SearchBar.styled';

import { fetchCategories, fetchToolsByCategory } from '../../apis/api';

export interface Category {
  name: string;
  koreanName: string;
  active: boolean;
}

export interface SearchBarProps {
  isSticky: boolean;
  onCategoryChange: (category: string) => void;
}

const SearchBar = ({ isSticky, onCategoryChange }: SearchBarProps) => {
  const [categoriesState, setCategoriesState] = useState<Category[]>([]);
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('right');
  const chipContainerRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const categoryFromParams = searchParams.get('category') || 'ALL';

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetchCategories();
        const categories = response.data.map((category: { name: string; koreanName: string }) => ({
          ...category,
          active: category.name === categoryFromParams,
        }));
        setCategoriesState(categories);
      } catch (error) {
        console.error('카테고리를 불러오는 중 오류 발생:', error);
      }
    };

    loadCategories();
    onCategoryChange(categoryFromParams);
  }, [categoryFromParams]);

  const isFetching = useRef(false);

  const handleCategoryClick = async (categoryName: string) => {
    if (isFetching.current) return;
    isFetching.current = true;

    const encodedCategoryName = encodeURIComponent(categoryName);

    const updatedCategories = categoriesState.map((category) => ({
      ...category,
      active: category.name === categoryName,
    }));
    setCategoriesState(updatedCategories);

    onCategoryChange(categoryName);
    navigate(`/toollist?category=${encodedCategoryName}`);

    try {
      const tools = await fetchToolsByCategory(categoryName);
      console.log('선택된 카테고리 데이터:', tools);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    } finally {
      isFetching.current = false;
    }
  };

  const handleScroll = (direction: 'start' | 'end') => {
    if (chipContainerRef.current) {
      if (direction === 'end') {
        chipContainerRef.current.scrollTo({
          left: chipContainerRef.current.scrollWidth,
          behavior: 'smooth',
        });
        setActiveButton('left');
      } else {
        chipContainerRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        setActiveButton('right');
      }
    }
  };

  useEffect(() => {
    const handleScrollState = () => {
      if (chipContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = chipContainerRef.current;
        if (scrollLeft === 0) {
          setActiveButton('right');
        } else if (scrollLeft + clientWidth >= scrollWidth) {
          setActiveButton('left');
        }
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
            {categoriesState?.map((category) => (
              <Chip
                key={category.name}
                size="large"
                active={category.active}
                onClick={() => {
                  handleCategoryClick(category.name);
                }}
              >
                <Chip.RoundContainer>
                  <Chip.Label>{category.koreanName}</Chip.Label>
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
