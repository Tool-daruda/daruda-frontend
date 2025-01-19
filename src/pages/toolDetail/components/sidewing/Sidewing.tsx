import React, { useState } from 'react';

import * as S from './Sidewing.styled';
import SimilarToolCardList from './SimilarToolCardList';

interface SidewingProps {
  sectionRefs: {
    [key: number]: React.RefObject<HTMLDivElement>;
  };
}

const Sidewing = ({ sectionRefs }: SidewingProps) => {
  const [activeBtnId, setActiveBtnId] = useState<number | null>(null);

  const handleClickBtn = (id: number) => {
    setActiveBtnId(id);
    const targetRef = sectionRefs[id];

    if (targetRef?.current) {
      const headerOffset = 45;
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const orderButtons = [
    { id: 1, label: '툴 소개' },
    { id: 2, label: '핵심 기능' },
    { id: 3, label: '참고하면 좋을 영상' },
    { id: 4, label: '플랜' },
    { id: 5, label: '커뮤니티' },
  ];

  return (
    <S.SidewingWrapper>
      <S.OrderContainer>
        <h1>목차</h1>
        {orderButtons.map((btn) => (
          <S.OrderBtn key={btn.id} $isActive={activeBtnId === btn.id} onClick={() => handleClickBtn(btn.id)}>
            <div className="click-left-bar" />
            {btn.label}
          </S.OrderBtn>
        ))}
      </S.OrderContainer>
      <S.SimilarToolContainer>
        <h1>유사한 기능을 가지고 있는 툴</h1>
        <S.ToolContainer>
          <SimilarToolCardList />
        </S.ToolContainer>
      </S.SimilarToolContainer>
    </S.SidewingWrapper>
  );
};

export default Sidewing;
