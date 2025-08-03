import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useBlocker, useLocation, useNavigate } from 'react-router-dom';

import * as S from './CommunityWrite.styled';
import WritingBody from './components/writingBody/WritingBody';
import WritingImg from './components/writingImg/WritingImg';
import WritingTitle from './components/writingTitle/WritingTitle';
import useCommunityWrite from './hooks/UseCommunityWrite';
import { createPostFormData } from './utils/FormDataUtils';
import { postBoard } from '@apis/board';
import { ImgPopupExit } from '@assets/svgs';
import ImgPopupl84 from '@assets/svgs/ImgPopupLogout84';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Meta from '@components/meta/Meta';
import { AlterModal } from '@components/modal';
import Toast from '@components/toast/Toast';
import { MYPAGE_QUERY_KEY } from '@constants/queryKey';
import { id_to_name } from '@constants/slugMap';
import { useModal } from '@pages/community/hooks';
import { useAnalytics } from 'src/hoc/useAnalytics';

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
  const { isOpen, handleModal } = useModal();
  const [showExitModal, setShowExitModal] = useState(false);
  const lastLocation = useRef<ReturnType<typeof useLocation> | null>(null);
  const hasSubmittedRef = useRef(false);
  const queryClient = useQueryClient();

  const user = localStorage.getItem('user');
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    if (!user) {
      handleModal('guest');
    }
  }, [user]);

  const blocker = useBlocker(() => {
    if (hasSubmittedRef.current) return false;
    else {
      return title.length > 0 || body.length > 0 || images.length > 0;
    }
  });

  useEffect(() => {
    if (blocker.state === 'blocked') {
      setShowExitModal(true);
      lastLocation.current = blocker.location;
    } else {
      setShowExitModal(false);
    }
  }, [blocker.state, blocker.location]);

  const handleExitConfirm = () => {
    setShowExitModal(false);
    blocker.proceed?.();
  };

  const handleExitCancel = () => {
    setShowExitModal(false);
    blocker.reset?.();
  };

  const handlePostSubmit = async () => {
    if (isButtonDisabled) return;

    const formData = await createPostFormData(title, body, isFree, selectedTool, images);

    try {
      await postBoard(formData);

      queryClient.invalidateQueries({ queryKey: MYPAGE_QUERY_KEY.MY_POST_LIST(1) });
      hasSubmittedRef.current = true; // 즉시 반영
      setShowExitModal(false);

      blocker.proceed?.();
      navigate('/community');
      trackEvent('Post_Click', { tool: isFree ? '자유' : id_to_name[formData.toolId] });
      sessionStorage.removeItem('originTool');
    } catch (error: unknown) {
      console.error('에러 발생:', error);
      setToastMessage('다시 시도해주세요.');
      setIsToastVisible(true);
      setTimeout(() => setIsToastVisible(false), 3000);
    }
  };

  return (
    <>
      <Meta title="글쓰기" />
      <S.WriteWrapper>
        <S.WriteTitle>글쓰기</S.WriteTitle>
        <S.WriteContainer>
          <S.WriteBox>
            <WritingTitle setTitle={setTitle} />
            <WritingBody
              setBody={setBody}
              onImageUpload={(files) => setImages((prev) => [...prev, ...files])}
              images={images}
            />
            <WritingImg onImageUpload={(files) => setImages(files)} images={images} />
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
        <AlterModal
          modalTitle="로그인 후 이용해주세요"
          isOpen={isOpen}
          handleClose={() => navigate(-1)}
          isSingleModal={false}
          ImgPopupModal={ImgPopupl84}
          modalContent="글쓰기 페이지는 다루다의 회원만 접속할 수 있어요"
          DoublebtnProps={{
            isPrimaryRight: false,
            primaryBtnContent: '로그인할게요',
            secondaryBtnContent: '나중에할게요',
            handleSecondClose: () => navigate('/login'),
          }}
        />
        <AlterModal
          modalTitle="화면을 벗어나시겠어요?"
          isOpen={showExitModal}
          handleClose={handleExitConfirm}
          isSingleModal={false}
          ImgPopupModal={ImgPopupExit}
          modalContent="작성중인 화면을 벗어나면 지금까지 입력했던 정보가 사라집니다."
          DoublebtnProps={{
            isPrimaryRight: true,
            primaryBtnContent: '마저 작성하기',
            secondaryBtnContent: '화면 벗어나기',
            handleSecondClose: handleExitCancel,
          }}
        />
      </S.WriteWrapper>
    </>
  );
};

export default CommunityWrite;
