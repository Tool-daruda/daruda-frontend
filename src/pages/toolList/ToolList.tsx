import { useState, useEffect } from 'react';
import { useNavigationType, useSearchParams } from 'react-router-dom';

import SearchBar from './components/searchBar/SearchBar';
import Toggle from './components/toggle/Toggle';
import ToolTip from './components/toolTip/ToolTip';
import TopBanner from './components/topBanner/TopBanner';
import * as S from './ToolList.styled';
import { Tooltip, IcChevron } from '@assets/svgs';
import Meta from '@components/meta/Meta';
import { handleScrollUp } from '@utils';
import { Tracking } from 'src/hoc/Tracking';

import ToolCard from '../../components/common/toolCard/ToolCardList';

const ToolList = () => {
  const navigationType = useNavigationType();
  const [isHovered, setIsHovered] = useState(false); // 요금제 툴팁 감지용
  const [isSticky, setIsSticky] = useState(false); // 검색 + 카테고리바 감지용
  const [hasRestoredScroll] = useState(false); // 스크롤 복원 여부

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'ALL'; // 툴 카테고리
  const isFree = searchParams.get('isFree') === 'true'; // 유료 / 무료 여부
  const sort = (searchParams.get('sort') as 'popular' | 'createdAt') || 'popular'; // 정렬순

  // searchParams 업데이트 함수
  const updateSearchParams = (key: 'category' | 'sort' | 'isFree', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams, { replace: true });
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

  useEffect(() => {
    if (navigationType === 'PUSH') {
      // 새로 들어올 때에만 맨 위로 가기
      window.scrollTo({ top: 0 });
    }
  }, [navigationType]);

  return (
    <S.ToolListWrapper>
      <Meta title="다루다(daruda)" />
      <Tracking event="Banner_Click" property={{ referrer: 'tool' }}>
        <TopBanner />
      </Tracking>
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
            <Tracking event="Sorting_Click" property={{ type: '인기순' }}>
              <S.SortButton isActive={sort === 'popular'} onClick={() => handleSortChage('popular')}>
                인기순
              </S.SortButton>
            </Tracking>
            |
            <Tracking event="Sorting_Click" property={{ type: '등록순' }}>
              <S.SortButton isActive={sort === 'createdAt'} onClick={() => handleSortChage('createdAt')}>
                등록순
              </S.SortButton>
            </Tracking>
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
