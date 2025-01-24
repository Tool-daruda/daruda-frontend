import { useRelatedTool } from '@pages/toolDetail/apis/api';
import React, { useEffect, useState } from 'react';

import * as S from './Sidewing.styled';
import SimilarToolCardList from './SimilarToolCardList';

interface SidewingProps {
  sectionRefs: {
    [key: number]: React.RefObject<HTMLDivElement>;
  };
  toolId: number;
}

const Sidewing = ({ sectionRefs, toolId }: SidewingProps) => {
  const [activeBtnId, setActiveBtnId] = useState<number>(1); // 기본값 '툴 소개'
  const { data } = useRelatedTool(toolId);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      let activeId = 1; // 기본값 설정

      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const topOffset = 45 + 19.5; // 헤더 오프셋
          if (rect.top - topOffset <= 0 && rect.bottom - topOffset > 0) {
            activeId = Number(id);
          }
        }
      });

      setActiveBtnId(activeId);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 초기 스크롤 감지 실행 (혹시 스크롤이 내려가 있는 경우)
    handleScroll();

    return () => {
      // 스크롤 이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);

  const handleClickBtn = (id: number) => {
    setActiveBtnId(id);
    const targetRef = sectionRefs[id];

    if (targetRef?.current) {
      const headerOffset = 45 + 19.5; // 헤더 높이 + 추가 간격
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
        <S.ToolContainer>{data ? <SimilarToolCardList data={data} /> : null}</S.ToolContainer>
      </S.SimilarToolContainer>
    </S.SidewingWrapper>
  );
};

export default Sidewing;
