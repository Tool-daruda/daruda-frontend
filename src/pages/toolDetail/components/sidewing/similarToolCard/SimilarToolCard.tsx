import { useNavigate } from 'react-router-dom';

import * as S from './SimilarToolCard.styled';
import { AlternativeTool } from '@apis/tool';
import { Free, Half, Paid } from '@assets/svgs';
import { toSlug } from '@utils';
import { Tracking } from 'src/hoc/Tracking';

const SimilarToolCard = ({
  toolLogo,
  toolName,
  license,
  keywords,
  originTool,
}: Pick<AlternativeTool, 'toolLogo' | 'toolName' | 'license' | 'keywords'> & { originTool: string }) => {
  const navigate = useNavigate();

  const handleToolCardClick = () => {
    // 해당 toolId로 이동
    navigate(`/toollist/${toSlug(toolName)}`);
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
    <Tracking event="Tool_Click" property={{ type: 'Recommendation', tool: toolName, origin: originTool }}>
      <S.CardWrapper onClick={handleToolCardClick} aria-label={`${toolName}으로 이동`}>
        <S.TopContainer>
          <S.CardLogo src={toolLogo} alt={`${toolName} 로고`} />
          <S.InfoBox>
            <S.CardTitle>{toolName}</S.CardTitle>
            <S.PlanBox>
              {renderLicenseIcon()}
              <span>{license}</span>
            </S.PlanBox>
          </S.InfoBox>
        </S.TopContainer>
        <S.KeyWordCardBox>
          {keywords.map((keyword, index) => (
            <S.KeyWordCard key={`keyword-${index}`}>{keyword}</S.KeyWordCard>
          ))}
        </S.KeyWordCardBox>
      </S.CardWrapper>
    </Tracking>
  );
};

export default SimilarToolCard;
