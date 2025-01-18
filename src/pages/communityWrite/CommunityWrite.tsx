import { BtnWritingArrowleft } from '@assets/svgs';
import ToolListBanner from '@components/banner/ToolListBanner';

import * as S from './CommunityWrite.styled';
import WritingBody from './components/writingBody/WritingBody';
import WritingImg from './components/writingImg/WritingImg';
import WritingTitle from './components/writingTitle/WritingTitle';

const CommunityWrite = () => {
  return (
    <S.WriteWrapper>
      <S.WriteTitle>
        <BtnWritingArrowleft />
        글쓰기
        <div />
      </S.WriteTitle>
      <S.WriteContainer>
        <S.WriteBox>
          <WritingTitle />
          <WritingBody />
          <WritingImg />
        </S.WriteBox>
        <ToolListBanner />
      </S.WriteContainer>
    </S.WriteWrapper>
  );
};

export default CommunityWrite;
