import { BtnWritingArrowleft } from '@assets/svgs';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './CommunityWrite.styled';
import WritingBody from './components/writingBody/WritingBody';
import WritingImg from './components/writingImg/WritingImg';
import WritingTitle from './components/writingTitle/WritingTitle';

const CommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const navigate = useNavigate();

  const isButtonDisabled = title.trim() === '' || body.trim() === '' || selectedTool === null;

  const handleToolSelect = (tool: string | null) => {
    setSelectedTool(tool);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.WriteWrapper>
      <S.WriteTitle>
        <BtnWritingArrowleft onClick={handleBackClick} />
        글쓰기
        <div />
      </S.WriteTitle>
      <S.WriteContainer>
        <S.WriteBox>
          <WritingTitle setTitle={setTitle} />
          <WritingBody setBody={setBody} />
          <WritingImg />
        </S.WriteBox>
        <S.SideBanner>
          <ToolListBanner onToolSelect={handleToolSelect} />
          <CircleButton onClick={() => {}} size="large" disabled={isButtonDisabled}>
            글 게시하기
          </CircleButton>
        </S.SideBanner>
      </S.WriteContainer>
    </S.WriteWrapper>
  );
};

export default CommunityWrite;
