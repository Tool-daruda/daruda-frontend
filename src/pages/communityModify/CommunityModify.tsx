import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './CommunityModify.styled';
import WritingBody from './components/writingBody/WritingBody';
import WritingImg from './components/writingImg/WritingImg';
import WritingTitle from './components/writingTitle/WritingTitle';
import useCommunityModify from './hooks/UseCommunityModify';
import { PostType } from './types/PostType';
import { useBoardUpdateMutation, useDetailBoardQuery } from '@apis/board';
import ToolListBanner from '@components/banner/ToolListBanner';
import CircleButton from '@components/button/circleButton/CircleButton';
import Meta from '@components/meta/Meta';
import Toast from '@components/toast/Toast';
import { createPostFormData } from '@pages/communityWrite/utils/FormDataUtils';

const CommunityModify = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const boardId = location.state?.post?.boardId;
  const { data: postData } = useDetailBoardQuery(boardId);
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>([]);
  const [newImageFiles, setNewImageFiles] = useState<File[]>([]);

  // state 없으면 접근 불가 (수정하기 버튼을 눌러야 접근 가능)
  useEffect(() => {
    if (!location.state?.post) {
      navigate('/');
    }
  }, []);

  // 초기값 세팅
  useEffect(() => {
    if (postData) {
      setPost(postData);
      setTitle(postData.title);
      setBody(postData.content);
      handleToolSelect(postData.toolId, postData.toolId === null);
      setExistingImageUrls(postData.images ?? []);
    }
  }, [postData]);

  const originTool = useMemo(() => {
    return post
      ? { toolId: post.toolId, toolName: post.toolName, toolLogo: post.toolLogo }
      : { toolId: 0, toolName: '알 수 없음', toolLogo: '' };
  }, [post]);

  const { title, setTitle, body, setBody, selectedTool, isFree, handleToolSelect } = useCommunityModify(
    post?.toolId as number,
  );

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isImgSame, setIsImgSame] = useState(true);
  const { mutate: patchMutate, error } = useBoardUpdateMutation();

  const handlePostSubmit = async () => {
    if (isButtonDisabled || !post) return;
    const allImages: (string | File)[] = [...existingImageUrls, ...newImageFiles];
    const formData = await createPostFormData(title, body, isFree, selectedTool, allImages);

    const req = { id: post.boardId, data: formData };
    await patchMutate(req);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  };

  useEffect(() => {
    if (!post) return;
    const isNull = title.trim() === '' || body.trim() === '' || (!isFree && selectedTool === null);
    const isSame = title === post?.title && body === post?.content && isImgSame && selectedTool === post?.toolId;

    setIsButtonDisabled(isNull || isSame);
  }, [title, body, selectedTool, isImgSame, isFree]);

  const handleImageUpload = (newImages: File[]) => {
    setNewImageFiles((prev) => [...prev, ...newImages]);
    setIsImgSame(false);
  };

  const handleDeleteExistingImage = (url: string) => {
    setExistingImageUrls((prev) => prev.filter((item) => item !== url));
    setIsImgSame(false);
  };

  const handleDeleteNewImage = (index: number) => {
    setNewImageFiles((prev) => prev.filter((_, i) => i !== index));
    setIsImgSame(false);
  };

  if (!post) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <Meta title={`(수정중) ${post.title}`} />
      <S.WriteWrapper>
        <S.WriteTitle>글 수정하기</S.WriteTitle>
        <S.WriteContainer>
          <S.WriteBox>
            <WritingTitle originTitle={post.title} setTitle={setTitle} />
            <WritingBody
              originBody={post.content}
              setBody={setBody}
              onImageUpload={handleImageUpload}
              existingImages={existingImageUrls}
              newImages={newImageFiles}
            />
            <WritingImg
              existingImages={existingImageUrls}
              newImages={newImageFiles}
              onImageUpload={handleImageUpload}
              onDeleteExisting={handleDeleteExistingImage}
              onDeleteNew={handleDeleteNewImage}
            />
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
              {error ? '글 수정을 실패했습니다. 다시 시도해주세요.' : '글 수정이 완료 되었습니다.'}
            </Toast>
          </S.ToastBox>
        )}
      </S.WriteWrapper>
    </>
  );
};

export default CommunityModify;
