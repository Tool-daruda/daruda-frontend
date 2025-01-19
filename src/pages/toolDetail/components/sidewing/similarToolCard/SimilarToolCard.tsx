import { IcToolcardPartiallypaid20 } from '@assets/svgs';

import * as S from './SimilarToolCard.styled';

interface SimilarToolCardPropTypes {
  toolLogo: string;
  toolNameMain: string;
  license: string;
  keyWordList: string[];
}

const SimilarToolCard = ({ toolLogo, toolNameMain, license, keyWordList }: SimilarToolCardPropTypes) => {
  return (
    <S.CardWrapper>
      <S.TopContainer>
        <S.CardLogo src={toolLogo} alt={`${toolNameMain} 로고`} />
        <S.InfoBox>
          <S.CardTitle>{toolNameMain}</S.CardTitle>
          <S.PlanBox>
            {/* TODO: license 경우에 맞는 아이콘 배치하기 */}
            <IcToolcardPartiallypaid20 />
            <span>{license}</span>
          </S.PlanBox>
        </S.InfoBox>
      </S.TopContainer>
      <S.KeyWordCardBox>
        {keyWordList.map((keyword, index) => (
          <S.KeyWordCard key={index}>{keyword}</S.KeyWordCard>
        ))}
      </S.KeyWordCardBox>
    </S.CardWrapper>
  );
};

export default SimilarToolCard;
