import { BtnWritingArrowleft, ImgPopupQuit84 } from '@assets/svgs';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import { AlterModal } from '@components/modal';
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
  const [images, setImages] = useState<string[]>([]);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [isQuitOpen, setIsQuitOpen] = useState(false);

  const navigate = useNavigate();

  const isButtonDisabled = title.trim() === '' || body.trim() === '' || selectedTool === null;

  const handleToolSelect = (tool: string | null) => {
    setSelectedTool(tool);
  };

  const handleImageUpload = (uploadedImages: string[]) => {
    setImages(uploadedImages);
  };

  const handleBackClick = () => {
    setIsQuitOpen((prev) => !prev);
  };

  const handlePostSubmit = async () => {
    if (isButtonDisabled) return;

    const postData = {
      title,
      content: body,
      toolId: selectedTool ? parseInt(selectedTool, 10) : 3,
      images,
      isFree: true,
    };

    try {
      const response = await postBoard(postData);
      console.log('게시 성공:', response);
      navigate('/community');
    } catch (error) {
      console.error('게시 실패:', error);
    }
  };

  const exitModalProps = {
    modalTitle: '화면을 벗어나시겠어요??',
    isOpen: isQuitOpen,
    handleClose: () => {
      navigate(-1);
    },
    ImgPopupModal: ImgPopupQuit84,
    isSingleModal: false,
    modalContent: '작성중인 화면을 벗어나면 지금까지 입력했던 정보가 사라집니다.',
    DoublebtnProps: {
      isPrimaryRight: true,
      primaryBtnContent: '마저 작성할게요',
      secondaryBtnContent: '화면 벗어나기',
      handleSecondClose: handleBackClick,
    },
  };

  return (
    <>
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
            <WritingImg onImageUpload={handleImageUpload} />
          </S.WriteBox>
          <S.SideBanner>
            <ToolListBanner onToolSelect={handleToolSelect} />
            <CircleButton onClick={handlePostSubmit} size="large" disabled={isButtonDisabled}>
              글 게시하기
            </CircleButton>
          </S.SideBanner>
        </S.WriteContainer>
      </S.WriteWrapper>
      <AlterModal {...exitModalProps} />
    </>
  );
};

export default CommunityWrite;
