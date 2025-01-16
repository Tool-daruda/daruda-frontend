import { useState } from 'react';

const useImageUpload = () => {
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [imageName, setImageName] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  const handleImageChange = (isSelected: boolean, fileName: string, file: File | null) => {
    setImageSelected(isSelected);
    setImageFile(file);
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
    setImageFile(null);
  };

  return {
    imageSelected,
    imageName,
    imageFile,
    isToastOpen,
    handleImageChange,
    handleImgReSubmit,
    handleImageRemove,
  };
};

export default useImageUpload;
