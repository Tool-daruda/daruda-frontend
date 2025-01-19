import card_community from '@assets/images/card_community.png';
import { useEffect, useState, useRef } from 'react';

import * as S from './ScrollPage.styled';

const ScrollPage = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <S.PageWrapper ref={containerRef}>
      <S.Image src={card_community} alt="community-card" className={visible ? 'animation' : ''} />
      <S.PageContainer>
        <div>
          <p>함께 다루다</p>
          <h1>
            함께 성장하는 공간,
            <br /> 다루다 커뮤니티
          </h1>
          <S.DetailText>
            툴 추천, 사용법, 궁금증에 대하여
            <br />
            주변에 물어볼 곳이 없다면
            <br />
            다루다에서 소통하세요.
          </S.DetailText>
        </div>
      </S.PageContainer>
    </S.PageWrapper>
  );
};

export default ScrollPage;
