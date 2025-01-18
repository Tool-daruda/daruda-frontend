import { IcToolcardPartiallypaid20 } from '@assets/svgs';

import * as S from './SimilarToolCard.styled';

interface keyWord {
  keyWordId: number;
  keyWordName: string;
}

interface SimilarToolCardPropTypes {
  toolLogo: string;
  toolNameMain: string;
  keyWordList: keyWord[];
}

const SimilarToolCard = ({ toolLogo, toolNameMain, keyWordList }: SimilarToolCardPropTypes) => {
  return (
    <S.CardWrapper>
      {/* TODO: 카드 데이터에 맞는 내용 배치하기 */}
      <S.TopContainer>
        <S.CardLogo src={toolLogo} />
        <S.InfoBox>
          <S.CardTitle>{toolNameMain}</S.CardTitle>
          <S.PlanBox>
            <IcToolcardPartiallypaid20 />
            <span>부분 유료</span>
          </S.PlanBox>
        </S.InfoBox>
      </S.TopContainer>
      <S.KeyWordCardBox>
        {keyWordList.map((keyword) => (
          <S.KeyWordCard key={keyword.keyWordId}> {keyword.keyWordName}</S.KeyWordCard>
        ))}
      </S.KeyWordCardBox>
    </S.CardWrapper>
  );
};

export default SimilarToolCard;
