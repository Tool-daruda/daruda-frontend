import Chip from '@components/common/chips/Chip';

import * as S from './MyToolCard.styled';

interface keyWord {
  keyWordId: number;
  keyWordName: string;
}

interface MyToolCardPropType {
  toolLogo: string;
  toolNameMain: string;
  keyWordList: keyWord[];
}

const MyToolCard = ({ toolLogo, toolNameMain, keyWordList }: MyToolCardPropType) => {
  // 첫 번째 띄어쓰기를 기준으로 줄나눔
  const formattedToolName = toolNameMain.replace(' ', '\n');
  const lineCount = formattedToolName.includes('\n') ? 2 : 1;

  // TODO: API 연결하기
  const handleBookmark = () => {
    alert('북마크 해제');
  };

  return (
    <S.CardWrapper>
      <S.CardLogo src={toolLogo} />
      <S.CardTitle $lineCount={lineCount}>{formattedToolName}</S.CardTitle>
      <S.CardKeyword>
        {keyWordList.map((keyword) => (
          <Chip key={keyword.keyWordId} size="xsmall" active={true}>
            <Chip.RectContainer>
              <Chip.Label>{keyword.keyWordName}</Chip.Label>
            </Chip.RectContainer>
          </Chip>
        ))}
      </S.CardKeyword>
      <S.BookmarkBtn onClick={handleBookmark} />
    </S.CardWrapper>
  );
};

export default MyToolCard;
