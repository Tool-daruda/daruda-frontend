import { ImgUploadWhite48, IcCmtimgGray24, IcImgdeleteGray40 } from '@assets/svgs';
import CircleButton from '@components/button/circleButton/CircleButton';
import React, { useState, useRef } from 'react';

import * as S from './CommentInput.styled';

import InputButton from '../inputButton/InputButton';

const CommnetInput = () => {
  const [text, setText] = useState('');
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [imageName, setImageName] = useState<string>('');
  const maxChars = 1000;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    setIsOverflowed(value.length > maxChars);
  };

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 112)}px`;
    }
  };

  const handleImageChange = (isSelected: boolean, fileName: string) => {
    setImageSelected(isSelected);
    setImageName(fileName);
  };

  const handleImageRemove = () => {
    setImageSelected(false);
    setImageName('');
    console.log(imageSelected);
  };

  return (
    <S.CardWrapper>
      <S.CardSendContainer>
        <S.CardInputWrapper $isOverflowed={isOverflowed}>
          <S.CardInput
            value={text}
            onChange={handleTextChange}
            ref={textareaRef}
            onInput={handleInput}
            placeholder="댓글을 입력하세요..."
          />
          <S.CountingWords $isOverflowed={isOverflowed}>
            <span>{text.length}</span>/<span>{maxChars}자</span>
          </S.CountingWords>
        </S.CardInputWrapper>
        <CircleButton icon={<ImgUploadWhite48 />} size="medium" disabled={isOverflowed || text.length === 0}>
          완료
        </CircleButton>
      </S.CardSendContainer>
      <S.CardBottom>
        <InputButton
          icon={<IcCmtimgGray24 />}
          stroke={true}
          type="file"
          accept="image/*"
          onImageSelect={handleImageChange}
          disabled={imageSelected}
        >
          이미지 첨부
        </InputButton>
        <div>
          <p>{imageSelected ? imageName : '첨부된 이미지가 없어요'}</p>
          {imageSelected && (
            <button onClick={handleImageRemove}>
              <IcImgdeleteGray40 />
            </button>
          )}
        </div>
      </S.CardBottom>
    </S.CardWrapper>
  );
};

export default CommnetInput;
