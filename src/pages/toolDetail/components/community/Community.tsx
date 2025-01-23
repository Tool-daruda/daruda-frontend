import { forwardRef } from 'react';

import * as S from './Community.styled';

type CardProps = {
  cards: {
    title: string;
    content: string;
    images: string[];
    author: string;
    updatedAt: string;
  }[];
};

const ToolCommunity = forwardRef<HTMLDivElement, CardProps>(({ cards }, ref) => {
  return (
    <div ref={ref}>
      <S.CardSectionWrapper>
        <S.CardTitle>
          <h1>사람들은 이런 이야기를 하고 있습니다</h1>
          <h2>커뮤니티 글 보기 &gt;</h2>
        </S.CardTitle>
        <S.CardSection>
          {cards?.map((card, index) => {
            const firstImage = card.images[0];

            return (
              <S.CardWrapper key={index}>
                <S.CardBox>
                  <S.Title>{card.title}</S.Title>
                  <S.NickName>
                    {card.author} | {card.updatedAt}
                  </S.NickName>
                </S.CardBox>
                <S.ContentWrapper imageUrl={firstImage}>
                  {firstImage && <S.ImageWrapper imageUrl={firstImage} />}
                  <S.Description imageUrl={firstImage}>{card.content}</S.Description>
                </S.ContentWrapper>
              </S.CardWrapper>
            );
          })}
        </S.CardSection>
      </S.CardSectionWrapper>
    </div>
  );
});

ToolCommunity.displayName = 'ToolCommunity';

export default ToolCommunity;
