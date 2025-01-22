import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Toast from '@components/toast/Toast';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import postBoard from './apis/PostApi';
import * as S from './CommunityModify.styled';
import WritingBody from './components/writingBody/WritingBody';
import WritingImg from './components/writingImg/WritingImg';
import WritingTitle from './components/writingTitle/WritingTitle';
import useCommunityModify from './hooks/UseCommunityModify';
import { createPostFormData } from './utils/FormDataUtils';

const CommunityModify = () => {
  const { title, setTitle, body, setBody, images, setImages, selectedTool, isFree, handleToolSelect } =
    useCommunityModify();

  const navigate = useNavigate();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isImgSame, setIsImgSame] = useState(true);

  const handlePostSubmit = async () => {
    if (isButtonDisabled) return;

    const formData = createPostFormData(title, body, isFree, selectedTool, images);

    try {
      await postBoard(formData);
      navigate('/community');
    } catch (error: unknown) {
      console.error('에러 발생:', error);
      setToastMessage('이미지의 용량을 줄이거나 개수를 줄여주세요.');
      setIsToastVisible(true);
      setTimeout(() => setIsToastVisible(false), 3000);
    }
  };

  // TODO: state 맞춰주기
  const post = {
    boardId: 136,
    toolName: 'Suno',
    toolLogo: 'https://daruda.s3.ap-northeast-2.amazonaws.com/SunoAi+1.svg',
    author: '또이또이또이',
    title: 'ㄴㅇ',
    content: 'ㄴㅇㄴㅇ',
    images: [
      'https://daruda.s3.ap-northeast-2.amazonaws.com/0e2d2a48-76dc-4116-89cf-8f5e17c3a030.png',
      'https://daruda.s3.ap-northeast-2.amazonaws.com/9d185f65-5c8e-459e-b3c8-947447ae9696.png',
    ],
    isScraped: false,
    updatedAt: '2025.01.22',
    commentCount: 0,
  };

  useEffect(() => {
    setTitle(post.title);
    setBody(post.content);
    // setTitle(post.title);
  }, []);

  // 이미지 URL → File 변환
  const fetchFiles = async (imageUrls: string[]): Promise<File[]> => {
    const filePromises = imageUrls.map(async (imageUrl, index) => {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      return new File([blob], `image-${index}.jpg`, { type: blob.type });
    });

    return await Promise.all(filePromises);
  };

  // post.images를 File[]로 변환하여 상태 저장
  useEffect(() => {
    fetchFiles(post.images).then(setImageFiles);
  }, []);

  useEffect(() => {
    // 하나라도 비어있으면 비활성화
    const isNull = title.trim() === '' || body.trim() === '';

    // 모든 내용이 이전과 같으면 비활성화
    const isSame = title === post.title && body === post.content && isImgSame;

    setIsButtonDisabled(isNull || isSame);
  }, [title, body, isFree, selectedTool, isImgSame]);

  const handleImageUpload = (newImages: File[]) => {
    setImages(newImages);
    setIsImgSame(false); // 이미지 변경 플래그
  };

  return (
    <S.WriteWrapper>
      <S.WriteTitle>글 수정하기</S.WriteTitle>
      <S.WriteContainer>
        <S.WriteBox>
          <WritingTitle originTitle={post.title} setTitle={setTitle} />
          <WritingBody originBody={post.content} setBody={setBody} />
          <WritingImg originImages={imageFiles} onImageUpload={handleImageUpload} />
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
  );
};

export default CommunityModify;
