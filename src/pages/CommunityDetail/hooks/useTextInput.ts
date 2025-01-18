import React, { useState, useRef } from 'react';

const useTextInput = (maxChars: number = 1000) => {
  const [text, setText] = useState('');
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    setIsOverflowed(value.length > maxChars);
  };

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 135)}px`;
    }
  };

  const handleInputFocus = () => {
    setIsFocus(true);
  };

  const handleInputOutfocus = () => {
    setIsFocus(false);
  };

  return {
    isFocus,
    text,
    isOverflowed,
    textareaRef,
    handleTextChange,
    handleInput,
    handleInputFocus,
    handleInputOutfocus,
  };
};

export default useTextInput;
