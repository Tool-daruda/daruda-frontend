import React, { useCallback, useEffect, useState } from 'react';

import * as S from './Sidewing.styled';
import SimilarToolCardList from './SimilarToolCardList';
import { useAlternativeToolQuery } from '@apis/tool';
import { useAnalytics } from 'src/hoc/useAnalytics';

interface SidewingProps {
  sectionRefs: {
    [key: number]: React.RefObject<HTMLDivElement>;
  };
  toolId: number;
}

const Sidewing = ({ sectionRefs, toolId }: SidewingProps) => {
  const [activeBtnId, setActiveBtnId] = useState<number>(0); // 기본값 '툴 소개'
  const { data } = useAlternativeToolQuery(toolId);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const { trackEvent } = useAnalytics();

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      if (isAutoScrolling) return;

      let activeId = 0; // 기본값 설정

      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const topOffset = 80; // 헤더 오프셋
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
  }, [sectionRefs, isAutoScrolling]);

  const stopAutoScroll = useCallback(() => {
    setIsAutoScrolling(false);
    window.removeEventListener('wheel', stopAutoScroll);
    window.removeEventListener('touchmove', stopAutoScroll);
    window.removeEventListener('keydown', stopAutoScroll);
  }, []);

  useEffect(() => {
    if (isAutoScrolling) {
      window.addEventListener('wheel', stopAutoScroll, { passive: true });
      window.addEventListener('touchmove', stopAutoScroll, { passive: true });
      window.addEventListener('keydown', stopAutoScroll);
    }

    return () => {
      window.removeEventListener('wheel', stopAutoScroll);
      window.removeEventListener('touchmove', stopAutoScroll);
      window.removeEventListener('keydown', stopAutoScroll);
    };
  }, [isAutoScrolling, stopAutoScroll]);

  const handleClickBtn = (id: number, label: string) => {
    trackEvent('Tool_Detail_Index_Click', { Tool_Detail_Index: label });
    setActiveBtnId(id);
    const targetRef = sectionRefs[id];

    if (targetRef?.current) {
      const headerOffset = 80; // 헤더 높이 + 추가 간격
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      setIsAutoScrolling(true);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const orderButtons = [
    { id: 1, label: '툴 소개' },
    { id: 2, label: '핵심 기능' },
    { id: 3, label: '참고하면 좋은 영상' },
    { id: 4, label: '플랜' },
    { id: 5, label: '커뮤니티' },
  ];

  return (
    <S.SidewingWrapper aria-labelledby="sidebar-heading">
      <S.OrderContainer aria-label="페이지 목차" id="sidebar-heading">
        <h3>목차</h3>
        {orderButtons.map((btn) => (
          <S.OrderBtn key={btn.id} $isActive={activeBtnId === btn.id} onClick={() => handleClickBtn(btn.id, btn.label)}>
            <div className="click-left-bar" />
            {btn.label}
          </S.OrderBtn>
        ))}
      </S.OrderContainer>
      <S.SimilarToolContainer aria-labelledby="similar-tools-heading">
        <h3 className="title" id="similar-tools-heading">
          유사한 기능을 가지고 있는 툴
        </h3>
        <S.ToolContainer>{data ? <SimilarToolCardList data={data} origin={toolId} /> : null}</S.ToolContainer>
      </S.SimilarToolContainer>
    </S.SidewingWrapper>
  );
};

export default Sidewing;
