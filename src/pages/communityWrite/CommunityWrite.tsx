import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import { useNavigate } from 'react-router-dom';

import postBoard from './apis/PostApi';
import * as S from './CommunityWrite.styled';
import WritingBody from './components/writingBody/WritingBody';
import WritingImg from './components/writingImg/WritingImg';
import WritingTitle from './components/writingTitle/WritingTitle';
import useCommunityWrite from './hooks/UseCommunityWrite';
import { createPostFormData } from './utils/FormDataUtils';

const CommunityWrite = () => {
  const {
    title,
    setTitle,
    body,
    setBody,
    images,
    setImages,
    selectedTool,
    isFree,
    handleToolSelect,
    isButtonDisabled,
  } = useCommunityWrite();

  const navigate = useNavigate();

  const handlePostSubmit = async () => {
    if (isButtonDisabled) return;

    const formData = createPostFormData(title, body, isFree, selectedTool, images);

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
