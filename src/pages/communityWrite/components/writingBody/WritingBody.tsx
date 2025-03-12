import React, { useState } from 'react';

import * as S from './WritingBody.styled';

interface WritingBodyProps {
  setBody: (text: string) => void;
  onImageUpload: (files: File[]) => void;
}

const MAX_CHAR_LIMIT = 10000;

const WritingBody = ({ setBody, onImageUpload }: WritingBodyProps) => {
  const [text, setText] = useState('');
  const [triggerShake, setTriggerShake] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isExceedingLimit = text.length >= MAX_CHAR_LIMIT;

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
          onImageUpload([blob]);
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
    </S.Container>
  );
};

export default WritingBody;
