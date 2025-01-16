import { ImgUploadWhite48, IcCmtimgGray24, IcImgdeleteGray40 } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import SquareButton from '@components/button/squareButton/SquareButton';
import Toast from '@components/toast/Toast';
import { useImageUpload, useTextInput } from '@pages/CommunityDetail/hooks';

import * as S from './CommentInput.styled';

import InputButton from '../inputButton/InputButton';

const CommnetInput = () => {
  const { text, isOverflowed, textareaRef, handleTextChange, handleInput } = useTextInput(1000);
  const { imageSelected, imageName, imageFile, isToastOpen, handleImageChange, handleImgReSubmit, handleImageRemove } =
    useImageUpload();

  const handleCommentPost = () => {
    const formData = new FormData();
    formData.append('text', text);
    if (imageFile) {
      formData.append('image', imageFile);
    }
    // TODO: POST 요청 연결
    alert('댓글 뿅');
  };

  const imageButton = !imageSelected ? (
    <InputButton
      icon={<IcCmtimgGray24 />}
      stroke={true}
      type="file"
      accept="image/*"
      onImageSelect={handleImageChange}
      status={imageSelected}
    >
      이미지 첨부
    </InputButton>
  ) : (
    <SquareButton type="button" icon={<IcCmtimgGray24 />} size="large" stroke={true} handleClick={handleImgReSubmit}>
      이미지 첨부
    </SquareButton>
  );

  return (
    <S.CardWrapper>
      <S.CardSendContainer>
        <S.CardInputWrapper $isOverflowed={isOverflowed}>
          <S.CardInput
            value={text}
            onChange={handleTextChange}
            ref={textareaRef}
            onInput={handleInput}
            placeholder="글을 작성해주세요."
          />
          <S.CountingWords $isOverflowed={isOverflowed}>
            <span>{text.length}</span>/<span>1,000자</span>
          </S.CountingWords>
        </S.CardInputWrapper>
        <CircleButton
          icon={<ImgUploadWhite48 />}
          size="medium"
          onClick={handleCommentPost}
          disabled={isOverflowed || text.length === 0}
        >
          완료
        </CircleButton>
      </S.CardSendContainer>
      <S.CardBottom>
        {imageButton}
        <S.ImgNameItem $imageSelected={imageSelected}>
          <p>{imageSelected ? imageName : '첨부된 이미지가 없어요'}</p>
          {imageSelected && (
            <button onClick={handleImageRemove}>
              <IcImgdeleteGray40 />
            </button>
          )}
        </S.ImgNameItem>
      </S.CardBottom>
      <S.ToastWrapper>
        <Toast isVisible={isToastOpen} isWarning={false}>
          댓글에는 1개의 이미지만 첨부할 수 있어요.
        </Toast>
      </S.ToastWrapper>
    </S.CardWrapper>
  );
};

export default CommnetInput;
