import card_list1 from '@assets/images/card_list1.png';
import card_list2 from '@assets/images/card_list2.png';
import card_list3 from '@assets/images/card_list3.png';
import { ImgTextlogo177 } from '@assets/svgs';
import { useEffect, useState, useRef } from 'react';

import * as S from './AcorssSlide.styled';

const AcorossSlide = () => {
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
      { threshold: 0.5 },
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
    <S.PageWrapper>
      <S.PageContainer ref={containerRef}>
        <S.MainContent>
          <p>툴을 다루다</p>
          <h1>대학생활에 필요한 툴,</h1>
          <ImgTextlogo177 />
          <S.DetailText>
            공부, 과제, 팀플, 동아리, 대외활동 <br />
            대학생활에 빠질 수 없는 컴퓨터 작업을 <br />
            다루다가 알려드릴게요.
          </S.DetailText>
        </S.MainContent>
      </S.PageContainer>
      <S.ImageContainer>
        <S.Image src={card_list1} alt="Card 1" direction="left" className={visible ? 'animation' : ''} />
        <S.Image src={card_list2} alt="Card 2" direction="right" className={visible ? 'animation' : ''} />
        <S.Image src={card_list3} alt="Card 3" direction="left" className={visible ? 'animation' : ''} />
      </S.ImageContainer>
    </S.PageWrapper>
  );
};

export default AcorossSlide;
