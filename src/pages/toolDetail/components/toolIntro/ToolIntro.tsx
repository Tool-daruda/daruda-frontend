import { TOOL_DESCRIPTIONS } from '@pages/toolDetail/mocks/description';

import * as S from './ToolIntro.styled';

export interface ToolIntroPropTypes {
  toolKey: keyof typeof TOOL_DESCRIPTIONS;
  toolImage: string;
}

const ToolIntro = ({ toolKey, toolImage }: ToolIntroPropTypes) => {
  const { toolname, description } = TOOL_DESCRIPTIONS[toolKey];

  return (
    <>
      <S.ToolIntroWrapper>
        {/* TODO: 호버 시 팝업 창 뜨도록 연결하기 */}
        <S.IntroImgBox>{toolImage ? <img src={toolImage} alt={`${toolname} 이미지`} /> : '툴 이미지'}</S.IntroImgBox>
        <S.ToolInfoBox>
          <span>{toolname}을 소개합니다.</span>
          <pre>{description}</pre>
        </S.ToolInfoBox>
      </S.ToolIntroWrapper>
      <S.DividingLine />
    </>
  );
};

export default ToolIntro;
