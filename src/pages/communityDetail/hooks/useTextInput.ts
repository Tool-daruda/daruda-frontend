import React, { useState, useRef, useEffect } from 'react';

const useTextInput = (maxChars: number = 1000) => {
  const [text, setText] = useState('');
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const localKey = localStorage.getItem('user');
    if (localKey) {
      setIsLogin(true);
    }
  }, []);
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
    isLogin,
    handleTextChange,
    handleInput,
    handleInputFocus,
    handleInputOutfocus,
    setText,
  };
};

export default useTextInput;
