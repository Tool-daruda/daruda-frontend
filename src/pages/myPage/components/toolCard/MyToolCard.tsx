import Chip from '@components/chip/Chip';
import { splitAndCountLines } from '@pages/myPage/utils/splitAndCountLines';

import * as S from './MyToolCard.styled';

interface MyToolCardPropType {
  toolLogo: string;
  toolNameMain: string;
  keyWordList: string[];
}

const MyToolCard = ({ toolLogo, toolNameMain, keyWordList }: MyToolCardPropType) => {
  // TODO: API 연결하기
  const handleBookmark = () => {
    alert('북마크 해제');
  };

  return (
    <S.CardWrapper>
      <S.CardLogo src={toolLogo} />
      <S.CardTitle $lineCount={splitAndCountLines(toolNameMain).lineCount}>
        {splitAndCountLines(toolNameMain).formattedToolName}
      </S.CardTitle>
      <S.CardKeyword>
        {keyWordList.map((keyword, index) => (
          <Chip key={index} size="xsmall" active={true}>
            <Chip.RectContainer>
              <Chip.Label>{keyword}</Chip.Label>
            </Chip.RectContainer>
          </Chip>
        ))}
      </S.CardKeyword>
      <S.BookmarkBtn onClick={handleBookmark} />
    </S.CardWrapper>
  );
};

export default MyToolCard;
