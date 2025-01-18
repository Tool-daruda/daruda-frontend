import { Rectangle161126186, Half, Free, Paid } from '@assets/svgs';

import * as S from './ToolTip.styled';

const ToolTip = () => {
  return (
    <S.ToolTipWrapper>
      <S.ToolTipFrame>
        <Rectangle161126186 />
      </S.ToolTipFrame>
      <S.ToolContentFrame>
        <S.Box>
          <S.Title>
            <S.TitleImg>
              <Free />
              무료
            </S.TitleImg>
            <S.Content>모든 기능을 완전히 무료로 이용할 수 있어요</S.Content>
          </S.Title>
        </S.Box>
        <S.Box>
          <S.Title>
            <S.TitleImg>
              <Half />
              부분 유료
            </S.TitleImg>
            <S.Content>
              주요 기능은 무료로 이용 가능하며, <br />
              일부 기능이나 추가 옵션은 유료일 수 있어요
            </S.Content>
          </S.Title>
        </S.Box>
        <S.Box>
          <S.Title>
            <S.TitleImg>
              <Paid />
              유료
            </S.TitleImg>
            <S.Content>서비스를 이용하려면 비용을 지불해야 해요</S.Content>
          </S.Title>
        </S.Box>
      </S.ToolContentFrame>
    </S.ToolTipWrapper>
  );
};

export default ToolTip;
