import card_popList1 from '@assets/images/card_popList1.png';
import card_popList2 from '@assets/images/card_popList2.png';
import card_popList3 from '@assets/images/card_popList3.png';
import card_popList4 from '@assets/images/card_popList4.png';
import card_popList5 from '@assets/images/card_popList5.png';
import { useState, useEffect } from 'react';

import * as S from './PopList.styled';

const PopList = () => {
  const INITIAL_LIST = [card_popList1, card_popList2, card_popList3, card_popList4, card_popList5];
  const [cardList, setCardList] = useState(INITIAL_LIST);
  const [isSliding, setIsSliding] = useState(false);

  // TODO: 애니메이션과 관련해서 슬라이딩 로직 수정 예정
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
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

        setIsSliding(false);
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
      <S.ImageContainer className={isSliding ? 'sliding' : ''}>
        {cardList.map((src, index) => (
          <S.Image key={`popList-img-${index}`} src={src} alt="popList - img" />
        ))}
      </S.ImageContainer>
    </S.PageWrapper>
  );
};

export default PopList;
