import { useState } from 'react';

import * as S from './Sidewing.styled';
import SimilarToolCard from './similarToolCard/SimilarToolCard';

interface SidewingPropTypes {
  defaultCard: {
    toolLogo: string;
    toolNameMain: string;
    keyWordList: { keyWordId: number; keyWordName: string }[];
  };
  multiLineCard: {
    toolLogo: string;
    toolNameMain: string;
    keyWordList: { keyWordId: number; keyWordName: string }[];
  };
}

const Sidewing = ({ defaultCard, multiLineCard }: SidewingPropTypes) => {
  const [activeBtnId, setActiveBtnId] = useState<number | null>(null);

  const handleClickBtn = (id: number) => {
    setActiveBtnId(id);
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
      {/* TODO: 목차 버튼 클릭 시, 해당 항목 위치로 스크롤 한번에 하나씩만 선택 가능 */}
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
          <SimilarToolCard
            toolLogo={defaultCard.toolLogo}
            toolNameMain={defaultCard.toolNameMain}
            keyWordList={defaultCard.keyWordList}
          />
          <SimilarToolCard
            toolLogo={multiLineCard.toolLogo}
            toolNameMain={multiLineCard.toolNameMain}
            keyWordList={multiLineCard.keyWordList}
          />
        </S.ToolContainer>
      </S.SimilarToolContainer>
    </S.SidewingWrapper>
  );
};

export default Sidewing;
