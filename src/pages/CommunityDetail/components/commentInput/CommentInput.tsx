import { ImgUploadWhite48, IcCmtimgGray24, IcImgdeleteGray40 } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import SquareButton from '@components/button/squareButton/SquareButton';
import Toast from '@components/toast/Toast';
import { useImageUpload, useTextInput } from '@pages/CommunityDetail/hooks';

import * as S from './CommentInput.styled';

import InputButton from '../inputButton/InputButton';

import { MODAL_ERR } from '../../constants';

const CommnetInput = () => {
  const DEFAULT_MAX_CHARS = 1000;
  const { text, isOverflowed, textareaRef, handleTextChange, handleInput } = useTextInput(DEFAULT_MAX_CHARS);
  const {
    toastType,
    imageSelected,
    imageName,
    imageFile,
    isToastOpen,
    handleImageChange,
    handleImgReSubmit,
    handleImageRemove,
    handleSizeError,
    handleModalOpen,
  } = useImageUpload();

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
      accept=".png, .jpeg, .jpg, .webp, .heic, .heif"
      onImageSelect={handleImageChange}
      handleSizeError={handleSizeError}
      handleModalOpen={handleModalOpen}
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
      <S.CautionWrpper>
        <p>* 이미지 업로드 용량은 한장 당 최대 7MB 입니다.</p>
      </S.CautionWrpper>
      <S.ToastWrapper>
        <Toast isVisible={isToastOpen} isWarning={false}>
          {toastType ? MODAL_ERR[toastType] : ''}
        </Toast>
      </S.ToastWrapper>
    </S.CardWrapper>
  );
};

export default CommnetInput;
