import React, { useState } from 'react';

import * as S from './WritingTitle.styled';

interface WritingTitleProps {
  originTitle: string;
  setTitle: (text: string) => void;
}

const MAX_CHAR_LIMIT = 50;

const WritingTitle = ({ originTitle, setTitle }: WritingTitleProps) => {
  const [text, setText] = useState(originTitle);
  const [triggerShake, setTriggerShake] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isExceedingLimit = text.length >= MAX_CHAR_LIMIT;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;

    if (inputText.length < MAX_CHAR_LIMIT) {
      setText(inputText);
      setTitle(inputText);
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

  return (
    <S.Container
      isActive={isFocused}
      isExceedingLimit={isExceedingLimit}
      onAnimationEnd={handleAnimationEnd}
      triggerShake={triggerShake}
    >
      <S.Input
        placeholder="제목은 공백포함 50자 이내로 입력해주세요."
        value={text}
        onChange={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </S.Container>
  );
};

export default WritingTitle;
