import { CardPopList1, CardPopList2, CardPopList3, CardPopList4, CardPopList5 } from '@assets/svgs';
import { useState, useEffect, useCallback } from 'react';

import * as S from './PopList.styled';

const PopList = () => {
  const INITIAL_LIST = [CardPopList1, CardPopList2, CardPopList3, CardPopList4, CardPopList5];
  const [cardList, setCardList] = useState(INITIAL_LIST);
  const [position, setPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const popFn = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setPosition((prev) => prev - 440);

    setTimeout(() => {
      setCardList((prevList) => {
        const updatedList = [...prevList];
        const firstItem = prevList[0];
        if (firstItem) {
          updatedList.push(firstItem);
          updatedList.shift();
        }
        return updatedList;
      });
      setPosition(0);
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      popFn();
    }, 1000);

    return () => clearInterval(interval);
  }, [popFn]);

  return (
    <S.PageWrapper>
      <S.PageContainer>
        <S.MainContent>
          <p>한눈에 다루다</p>
          <h1>
            내가 찾는 툴은 여기에,
            <br /> 툴 리스트
          </h1>
          <S.DetailText>
            여러 정보를 찾으러 다닐 필요 없이
            <br />
            다루다에서 클릭 한 번에 다양한 정보를 확인하고
            <br />
            내게 꼭 맞는 툴을 찾아 보세요.
          </S.DetailText>
        </S.MainContent>
      </S.PageContainer>
      <S.ImageContainer $position={position}>
        {cardList?.map((Image, index) => (
          <S.Image
            as={Image}
            key={`popList-${index}`}
            alt={`popList - img ${index + 1}`}
            $isHidden={index === 0 && isAnimating}
          />
        ))}
      </S.ImageContainer>
    </S.PageWrapper>
  );
};

export default PopList;
