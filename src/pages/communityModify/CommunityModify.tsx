import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './CommunityModify.styled';
import WritingBody from './components/writingBody/WritingBody';
import WritingImg from './components/writingImg/WritingImg';
import WritingTitle from './components/writingTitle/WritingTitle';
import useCommunityModify from './hooks/UseCommunityModify';
import { PostType } from './types/PostType';
import { createPostFormData } from './utils/FormDataUtils';
import { useBoardUpdateMutation } from '@apis/board';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Title from '@components/title/Title';
import Toast from '@components/toast/Toast';

const CommunityModify = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.post) {
      setPost(location.state.post);
    } else {
      navigate('/');
    }
  }, []);

  const originTool = useMemo(() => {
    return post
      ? { toolId: post.toolId, toolName: post.toolName, toolLogo: post.toolLogo }
      : { toolId: 0, toolName: '알 수 없음', toolLogo: '' }; // 기본값 설정
  }, [post]);

  const { title, setTitle, body, setBody, selectedTool, isFree, handleToolSelect } = useCommunityModify(
    post?.toolId as number,
  );

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isImgSame, setIsImgSame] = useState(true);
  const { mutate: patchMutate } = useBoardUpdateMutation();

  const handlePostSubmit = async () => {
    if (isButtonDisabled || !post) return;

    const formData = createPostFormData(title, body, isFree, selectedTool, imageFiles);

    const req = { id: post.boardId, data: formData };
    await patchMutate(req);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.content);
      handleToolSelect(post.toolId);
    }
  }, [post]);

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
    if (post?.images) {
      fetchFiles(post.images).then(setImageFiles);
    }
  }, [post]);

  useEffect(() => {
    if (!post) return;
    const isNull = title.trim() === '' || body.trim() === '';
    const isSame = title === post?.title && body === post.content && isImgSame && selectedTool === post.toolId;

    setIsButtonDisabled(isNull || isSame);
  }, [title, body, selectedTool, isImgSame]);

  const handleImageUpload = (newImages: File[]) => {
    setImageFiles(newImages);
    setIsImgSame(false); // 이미지 변경 플래그
  };

  if (!post) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <Title title={`(수정중) ${post.title}`} />
      <S.WriteWrapper>
        <S.WriteTitle>글 수정하기</S.WriteTitle>
        <S.WriteContainer>
          <S.WriteBox>
            <WritingTitle originTitle={post.title} setTitle={setTitle} />
            <WritingBody
              originBody={post.content}
              setBody={setBody}
              onImageUpload={handleImageUpload}
              images={imageFiles}
            />
            <WritingImg images={imageFiles} onImageUpload={handleImageUpload} />
          </S.WriteBox>
          <S.SideBanner>
            <ToolListBanner originTool={originTool} onToolSelect={handleToolSelect} />
            <CircleButton onClick={handlePostSubmit} size="large" disabled={isButtonDisabled}>
              글 수정하기
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
    </>
  );
};

export default CommunityModify;
