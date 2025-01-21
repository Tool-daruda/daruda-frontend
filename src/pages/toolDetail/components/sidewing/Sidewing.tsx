import { useRelatedTool } from '@pages/toolDetail/apis/api';
import React, { useState } from 'react';

import * as S from './Sidewing.styled';
import SimilarToolCardList from './SimilarToolCardList';

interface SidewingProps {
  sectionRefs: {
    [key: number]: React.RefObject<HTMLDivElement>;
  };
  toolId: number;
}

const Sidewing = ({ sectionRefs, toolId }: SidewingProps) => {
  const [activeBtnId, setActiveBtnId] = useState<number | null>(null);
  const { data } = useRelatedTool(toolId);

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
        <h1 className="title">유사한 기능을 가지고 있는 툴</h1>
        <S.ToolContainer>
          {/* 데이터가 있을 경우에만 SimilarToolCardList 렌더링 */}
          {data ? <SimilarToolCardList data={data} /> : null}
        </S.ToolContainer>
      </S.SimilarToolContainer>
    </S.SidewingWrapper>
  );
};

export default Sidewing;
