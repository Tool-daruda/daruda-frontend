import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Toast from '@components/toast/Toast';
import { useEffect, useState } from 'react';

import { useBoardUpdate } from './apis/queries';
import * as S from './CommunityModify.styled';
import WritingBody from './components/writingBody/WritingBody';
import WritingImg from './components/writingImg/WritingImg';
import WritingTitle from './components/writingTitle/WritingTitle';
import useCommunityModify from './hooks/UseCommunityModify';
import { createPostFormData } from './utils/FormDataUtils';

const CommunityModify = () => {
  // TODO: state 맞춰주기
  const post = {
    boardId: 136,
    toolName: 'Suno',
    toolLogo: 'https://daruda.s3.ap-northeast-2.amazonaws.com/SunoAi+1.svg',
    author: '또이또이또이',
    title: 'ㄴㅇ',
    content: 'ㄴㅇㄴㅇ',
    images: ['https://t4.ftcdn.net/jpg/01/43/42/83/360_F_143428338_gcxw3Jcd0tJpkvvb53pfEztwtU9sxsgT.jpg'],
    isScraped: false,
    updatedAt: '2025.01.22',
    commentCount: 0,
    toolId: null,
  };

  const { title, setTitle, body, setBody, images, setImages, selectedTool, isFree, handleToolSelect } =
    useCommunityModify(post.toolId);

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isImgSame, setIsImgSame] = useState(true);
  const { mutate: patchMutate } = useBoardUpdate();

  const handlePostSubmit = async () => {
    if (isButtonDisabled) return;

    const formData = createPostFormData(title, body, isFree, selectedTool, images);

    const req = { id: post.boardId, data: formData };
    await patchMutate(req);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  };

  useEffect(() => {
    setTitle(post.title);
    setBody(post.content);
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
    const isSame = title === post.title && body === post.content && isImgSame && selectedTool === post.toolId;

    setIsButtonDisabled(isNull || isSame);
  }, [title, body, isFree, selectedTool, isImgSame]);

  const handleImageUpload = (newImages: File[]) => {
    setImages(newImages);
    setIsImgSame(false); // 이미지 변경 플래그
  };

  const originTool = { toolId: post.toolId, toolName: post.toolName, toolLogo: post.toolLogo };

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
          <ToolListBanner originTool={originTool} onToolSelect={handleToolSelect} />
          <CircleButton onClick={handlePostSubmit} size="large" disabled={isButtonDisabled}>
            글 게시하기
          </CircleButton>
        </S.SideBanner>
      </S.WriteContainer>
      {isToastVisible && (
        <S.ToastBox>
          <Toast isVisible={true} isWarning={true}>
            글 수정이 완료 되었습니다.
          </Toast>
        </S.ToastBox>
      )}
    </S.WriteWrapper>
  );
};

export default CommunityModify;
