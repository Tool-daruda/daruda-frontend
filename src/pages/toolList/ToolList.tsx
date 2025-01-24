import { Tooltip, IcChevron } from '@assets/svgs';
import Title from '@components/title/Title';
import { handleScrollUp } from '@utils';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBar from './components/searchBar/SearchBar';
import Toggle from './components/toggle/Toggle';
import ToolCard from './components/toolCard/ToolCard';
import ToolTip from './components/toolTip/ToolTip';
import TopBanner from './components/topBanner/TopBanner';
import * as S from './ToolList.styled';

const ToolList = () => {
  const [activeButton, setActiveButton] = useState<'popular' | 'createdAt'>('popular');
  const [isHovered, setIsHovered] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const [isFree, setIsFree] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'ALL';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const handleButtonClick = (button: 'popular' | 'createdAt') => {
    setActiveButton(button);
  };

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    setIsFree((prev) => !prev);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 230, behavior: 'smooth' });
  };

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

  return (
    <S.ToolListWrapper>
      <Title title="다루다(daruda)" />
      <TopBanner />
      <SearchBar isSticky={isSticky} onCategoryChange={handleCategoryChange} />
      <S.ToolCardWrapper>
        <S.ToolCardTitle>
          <S.ToolCardTitleLeft>
            툴 리스트{' '}
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
            <Toggle isOn={isOn} onToggle={handleToggle} />
            <S.SortButton isActive={activeButton === 'popular'} onClick={() => handleButtonClick('popular')}>
              인기순
            </S.SortButton>
            |
            <S.SortButton isActive={activeButton === 'createdAt'} onClick={() => handleButtonClick('createdAt')}>
              등록순
            </S.SortButton>
          </S.ToolCardTitleRight>
        </S.ToolCardTitle>
        <ToolCard
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          isFree={isFree}
          criteria={activeButton}
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
