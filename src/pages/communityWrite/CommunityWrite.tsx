import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import postBoard from './apis/PostApi';
import * as S from './CommunityWrite.styled';
import WritingBody from './components/writingBody/WritingBody';
import WritingImg from './components/writingImg/WritingImg';
import WritingTitle from './components/writingTitle/WritingTitle';

const CommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [isFree, setIsFree] = useState(false);
  const navigate = useNavigate();

  const handleToolSelect = (toolId: number | null) => {
    setSelectedTool(toolId);
    setIsFree(toolId === null);
  };

  const isButtonDisabled = title.trim() === '' || body.trim() === '' || (!isFree && selectedTool === null);

  const handlePostSubmit = async () => {
    if (isButtonDisabled) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', body);
    formData.append('isFree', isFree ? 'true' : 'false');

    if (isFree) {
      formData.append('toolId', '1');
    } else if (selectedTool !== null) {
      formData.append('toolId', String(selectedTool));
    }

    if (images.length > 0) {
      images.forEach((image) => {
        if (image instanceof File) {
          formData.append(`images`, image);
        } else if (typeof image === 'string') {
          formData.append(`images`, image);
        }
      });
    }

    try {
      await postBoard(formData);
      navigate('/community');
    } catch (error) {
      console.error('실패:', error);
    }
  };

  return (
    <S.WriteWrapper>
      <S.WriteTitle>글쓰기</S.WriteTitle>
      <S.WriteContainer>
        <S.WriteBox>
          <WritingTitle setTitle={setTitle} />
          <WritingBody setBody={setBody} />
          <WritingImg onImageUpload={setImages} />
        </S.WriteBox>
        <S.SideBanner>
          <ToolListBanner onToolSelect={handleToolSelect} />
          <CircleButton onClick={handlePostSubmit} size="large" disabled={isButtonDisabled}>
            글 게시하기
          </CircleButton>
        </S.SideBanner>
      </S.WriteContainer>
    </S.WriteWrapper>
  );
};

export default CommunityWrite;
