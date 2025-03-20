import Toast from '@components/toast/Toast';
import useToastOpen from '@hooks/useToastOpen';
import React, { useState } from 'react';

import * as S from './WritingBody.styled';

interface WritingBodyProps {
  originBody: string;
  setBody: (text: string) => void;
  onImageUpload: (files: File[]) => void;
  images: File[];
}

const MAX_CHAR_LIMIT = 10000;
const MAX_IMG_SIZE_LIMIT = 7;
const MAX_IMG_COUNT_LIMIT = 5;

const WritingBody = ({ originBody, setBody, onImageUpload, images }: WritingBodyProps) => {
  const [text, setText] = useState(originBody);
  const [triggerShake, setTriggerShake] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isExceedingLimit = text.length >= MAX_CHAR_LIMIT;
  const { isToastOpen, handleModalOpen } = useToastOpen();
  const [toastMessage, setToastMessage] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;

    if (inputText.length <= MAX_CHAR_LIMIT) {
      setText(inputText);
      setBody(inputText);
    }

    if (inputText.length === MAX_CHAR_LIMIT) {
      setTriggerShake(true);
    }
  };

  const handleAnimationEnd = () => {
    setTriggerShake(false);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleImagePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith('image/')) {
        const blob = items[i].getAsFile();
        if (blob) {
          if (blob.size > MAX_IMG_SIZE_LIMIT * 1024 * 1024) {
            setToastMessage('이미지 업로드 용량은 한장 당 최대 7MB 입니다.');
            handleModalOpen();
            return;
          }
          if (images.length === MAX_IMG_COUNT_LIMIT) {
            setToastMessage('이미지는 최대 5장까지 첨부할 수 있습니다.');
            handleModalOpen();
            return;
          }
          // 기존 이미지에 추가
          onImageUpload([...images, blob]);
          setToastMessage('이미지를 성공적으로 첨부했습니다.');
          handleModalOpen();
        }
        break;
      }
    }
  };

  return (
    <S.Container
      isActive={isFocused}
      isExceedingLimit={isExceedingLimit}
      onAnimationEnd={handleAnimationEnd}
      triggerShake={triggerShake}
    >
      <S.Divider />
      <S.TextArea
        placeholder="본문을 입력하세요."
        value={text}
        onChange={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPaste={handleImagePaste}
      />
      <S.CharCount isExceedingLimit={isExceedingLimit}>
        {text.length} / {MAX_CHAR_LIMIT}
      </S.CharCount>
      {isToastOpen && (
        <Toast isVisible={isToastOpen} isWarning={!toastMessage.includes('성공')}>
          {toastMessage}
        </Toast>
      )}
    </S.Container>
  );
};

export default WritingBody;
