import { useState } from 'react';

const useImageUpload = () => {
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [imageName, setImageName] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [toastType, setToastType] = useState<'sizeErr' | 'ResubmitErr' | null>(null);

  const handleImageChange = (isSelected: boolean, fileName: string, file: File | null) => {
    setImageSelected(isSelected);
    setImageFile(file);
    setImageName(fileName);
  };

  const handleImgReSubmit = () => {
    if (!imageSelected) return;
    handleResubmitError();
    handleModalOpen();
  };

  const handleImageRemove = () => {
    setImageSelected(false);
    setImageName('');
    setImageFile(null);
  };

  const handleSizeError = () => {
    setToastType('sizeErr');
  };

  const handleResubmitError = () => {
    setToastType('ResubmitErr');
  };

  const handleModalOpen = () => {
    setIsToastOpen(true);
    setTimeout(() => setIsToastOpen(false), 3000);
  };

  return {
    toastType,
    imageSelected,
    imageName,
    imageFile,
    isToastOpen,
    handleImageChange,
    handleImgReSubmit,
    handleImageRemove,
    handleSizeError,
    handleResubmitError,
    handleModalOpen,
  };
};

export default useImageUpload;
