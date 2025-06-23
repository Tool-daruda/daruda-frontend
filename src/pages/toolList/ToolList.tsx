import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBar from './components/searchBar/SearchBar';
import Toggle from './components/toggle/Toggle';
import ToolTip from './components/toolTip/ToolTip';
import TopBanner from './components/topBanner/TopBanner';
import * as S from './ToolList.styled';
import { Tooltip, IcChevron } from '@assets/svgs';
import Title from '@components/title/Title';
import { handleScrollUp } from '@utils';

import ToolCard from '../../components/common/toolCard/ToolCardList';

const ToolList = () => {
  const [isHovered, setIsHovered] = useState(false); // 요금제 툴팁 감지용
  const [isSticky, setIsSticky] = useState(false); // 검색 + 카테고리바 감지용
  const [hasRestoredScroll, setHasRestoredScroll] = useState(false); // 스크롤 복원 여부

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'ALL'; // 툴 카테고리
  const isFree = searchParams.get('isFree') === 'true'; // 유료 / 무료 여부
  const sort = (searchParams.get('sort') as 'popular' | 'createdAt') || 'popular'; // 정렬순

  // searchParams 업데이트 함수
  const updateSearchParams = (key: 'category' | 'sort' | 'isFree', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
  };

  const handleSortChage = (button: 'popular' | 'createdAt') => {
    updateSearchParams('sort', button);
  };

  const handleFreeFilter = () => {
    updateSearchParams('isFree', isFree ? 'false' : 'true');
  };

  const handleCategoryChange = (category: string) => {
    updateSearchParams('category', category);
    if (hasRestoredScroll) {
      window.scrollTo({ top: 230, behavior: 'smooth' });
    }
  };

  // 검색창 고정
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 270);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 스크롤 복원
  useEffect(() => {
    const savedY = sessionStorage.getItem('toolListScrollY');
    if (savedY) {
      window.scrollTo(0, Number(savedY));
      sessionStorage.removeItem('toolListScrollY');
      setHasRestoredScroll(true);
    } else {
      setHasRestoredScroll(true); // 복원할 게 없더라도 true 처리
    }
  }, []);

  return (
    <S.ToolListWrapper>
      <Title title="다루다(daruda)" />
      <TopBanner />
      <SearchBar isSticky={isSticky} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <S.ToolCardWrapper>
        <S.ToolCardTitle>
          <S.ToolCardTitleLeft>
            툴 리스트
            <S.IconWrapper onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <Tooltip />
              {isHovered && (
                <S.HoverComponent>
                  <ToolTip />
                </S.HoverComponent>
              )}
            </S.IconWrapper>
          </S.ToolCardTitleLeft>
          <S.ToolCardTitleRight>
            <Toggle isOn={isFree} onToggle={handleFreeFilter} />
            <S.SortButton isActive={sort === 'popular'} onClick={() => handleSortChage('popular')}>
              인기순
            </S.SortButton>
            |
            <S.SortButton isActive={sort === 'createdAt'} onClick={() => handleSortChage('createdAt')}>
              등록순
            </S.SortButton>
          </S.ToolCardTitleRight>
        </S.ToolCardTitle>
        <ToolCard
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          isFree={isFree}
          criteria={sort}
        />
      </S.ToolCardWrapper>
      <S.FollowingBtns>
        <S.TopBtn type="button" onClick={handleScrollUp}>
          <IcChevron />
        </S.TopBtn>
      </S.FollowingBtns>
    </S.ToolListWrapper>
  );
};

export default ToolList;
