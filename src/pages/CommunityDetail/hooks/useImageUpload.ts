import { useState } from 'react';

const useImageUpload = (handleModalOpen: () => void) => {
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [imageName, setImageName] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [toastType, setToastType] = useState<'sizeErr' | 'ResubmitErr' | 'postComment' | null>(null);

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

  return {
    toastType,
    imageSelected,
    imageName,
    imageFile,
    setToastType,
    handleImageChange,
    handleImgReSubmit,
    handleImageRemove,
    handleSizeError,
    handleResubmitError,
  };
};

export default useImageUpload;
