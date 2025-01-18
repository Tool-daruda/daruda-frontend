import { Tooltip } from '@assets/svgs';
import { useState, useEffect } from 'react';

import SearchBar from './components/searchBar/SearchBar';
import Toggle from './components/toggle/Toggle';
import ToolCard from './components/toolCard/ToolCard';
import ToolTip from './components/toolTip/ToolTip';
import TopBanner from './components/topBanner/TopBanner';
import * as S from './ToolList.styled';

const ToolList = () => {
  const [activeButton, setActiveButton] = useState<'popular' | 'new'>('popular');
  const [isHovered, setIsHovered] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const handleButtonClick = (button: 'popular' | 'new') => {
    setActiveButton(button);
  };

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 424);
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
      <TopBanner />
      <SearchBar isSticky={isSticky} />
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
            <S.SortButton isActive={activeButton === 'new'} onClick={() => handleButtonClick('new')}>
              최신순
            </S.SortButton>
          </S.ToolCardTitleRight>
        </S.ToolCardTitle>
        <ToolCard />
      </S.ToolCardWrapper>
    </S.ToolListWrapper>
  );
};

export default ToolList;
