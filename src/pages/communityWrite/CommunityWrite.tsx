import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Title from '@components/title/Title';
import Toast from '@components/toast/Toast';
import { MYPAGE_QUERY_KEY } from '@pages/myPage/apis/queries';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
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
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const queryClient = useQueryClient();

  const handlePostSubmit = async () => {
    if (isButtonDisabled) return;

    const formData = createPostFormData(title, body, isFree, selectedTool, images);

    try {
      await postBoard(formData);

      const userItem = localStorage.getItem('user');
      const userData = userItem ? JSON.parse(userItem) : null;
      const userId = userData?.accessToken || null;

      queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST(userId, 1) });
      navigate('/community');
    } catch (error: unknown) {
      console.error('에러 발생:', error);
      setToastMessage('이미지의 용량을 줄이거나 개수를 줄여주세요.');
      setIsToastVisible(true);
      setTimeout(() => setIsToastVisible(false), 3000);
    }
  };

  return (
    <>
      <Title title="글쓰기" />
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
        {isToastVisible && (
          <S.ToastBox>
            <Toast isVisible={true} isWarning={true}>
              {toastMessage}
            </Toast>
          </S.ToastBox>
        )}
      </S.WriteWrapper>
    </>
  );
};

export default CommunityWrite;
