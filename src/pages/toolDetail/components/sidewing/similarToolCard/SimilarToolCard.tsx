import { Free, Half, Paid } from '@assets/svgs';
import { useNavigate } from 'react-router-dom';

import * as S from './SimilarToolCard.styled';

interface SimilarToolCardPropTypes {
  toolId: number;
  toolLogo: string;
  toolNameMain: string;
  license: '무료' | '부분 무료' | '유료';
  keyWordList: string[];
}

const SimilarToolCard = ({ toolId, toolLogo, toolNameMain, license, keyWordList }: SimilarToolCardPropTypes) => {
  const navigate = useNavigate();

  const handleToolCardClick = () => {
    // 해당 toolId로 이동
    navigate(`/toollist/${toolId}`);
  };

  const renderLicenseIcon = () => {
    switch (license) {
      case '무료':
        return <Free />;
      case '부분 무료':
        return <Half />;
      case '유료':
        return <Paid />;
      default:
        return null;
    }
  };

  return (
    <S.CardWrapper onClick={handleToolCardClick}>
      <S.TopContainer>
        <S.CardLogo src={toolLogo} alt={`${toolNameMain} 로고`} />
        <S.InfoBox>
          <S.CardTitle>{toolNameMain}</S.CardTitle>
          <S.PlanBox>
            {renderLicenseIcon()}
            <span>{license}</span>
          </S.PlanBox>
        </S.InfoBox>
      </S.TopContainer>
      <S.KeyWordCardBox>
        {keyWordList.map((keyword, index) => (
          <S.KeyWordCard key={`keyword-${index}`}>{keyword}</S.KeyWordCard>
        ))}
      </S.KeyWordCardBox>
    </S.CardWrapper>
  );
};

export default SimilarToolCard;
