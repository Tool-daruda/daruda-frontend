import React, { useState, useRef } from 'react';

const useCommnetPost = () => {
  const [text, setText] = useState('');
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [imageName, setImageName] = useState<string>('');
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
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
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 135)}px`;
    }
  };

  const handleImageChange = (isSelected: boolean, fileName: string) => {
    setImageSelected(isSelected);
    setImageName(fileName);
  };

  const handleImgReSubmit = () => {
    if (!imageSelected) return;
    setIsToastOpen(true);
    setTimeout(() => setIsToastOpen(false), 3000);
  };

  const handleImageRemove = () => {
    setImageSelected(false);
    setImageName('');
  };

  return {
    maxChars,
    text,
    setText,
    isOverflowed,
    setIsOverflowed,
    imageSelected,
    setImageSelected,
    textareaRef,
    imageName,
    setImageName,
    isToastOpen,
    setIsToastOpen,
    handleTextChange,
    handleInput,
    handleImageChange,
    handleImgReSubmit,
    handleImageRemove,
  };
};

export default useCommnetPost;
