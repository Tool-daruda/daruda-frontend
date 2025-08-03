import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './MyToolCard.styled';
import { IcBookmark32 } from '@assets/svgs';
import Chip from '@components/chip/Chip';
import { toSlug } from '@utils';

interface MyToolCardPropType {
  toolId: number;
  toolLogo: string;
  toolNameMain: string;
  keyWordList: string[];
  onClick?: () => void;
  isScrapped: boolean;
}

const MyToolCard = ({ toolLogo, toolNameMain, keyWordList, onClick, isScrapped }: MyToolCardPropType) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLHeadingElement>(null);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measureLineCount = () => {
      const lineHeight = 24;

      const lines = Math.round(el.clientHeight / lineHeight);
      setLineCount(lines > 1 ? 2 : 1);
    };

    measureLineCount();

    const resizeObserver = new ResizeObserver(measureLineCount);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [toolNameMain]);

  return (
    <S.CardWrapper onClick={() => navigate(`/toollist/${toSlug(toolNameMain)}`)}>
      <S.CardLogo src={toolLogo} />
      <S.HiddenTitle ref={ref}>{toolNameMain}</S.HiddenTitle>
      <S.CardTitle $lineCount={lineCount}>{toolNameMain}</S.CardTitle>
      <S.CardKeyword>
        {keyWordList.map((keyword, index) => (
          <Chip key={index} size="xsmall" active={true}>
            <Chip.RectContainer>
              <Chip.Label>{keyword}</Chip.Label>
            </Chip.RectContainer>
          </Chip>
        ))}
      </S.CardKeyword>
      <S.BookmarkBtn
        onClick={(event) => {
          event.stopPropagation();
          onClick?.();
        }}
        $isBookmark={isScrapped}
      >
        <IcBookmark32 />
      </S.BookmarkBtn>
    </S.CardWrapper>
  );
};

export default MyToolCard;
