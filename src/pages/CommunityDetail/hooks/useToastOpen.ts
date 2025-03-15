import { useState } from 'react';

const useToastOpen = () => {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleModalOpen = () => {
    setIsToastOpen(true);
    setTimeout(() => setIsToastOpen(false), 1500);
  };

  const handleMessageChange = (message: string) => {
    setToastMessage(message);
  };

  return {
    isToastOpen,
    handleModalOpen,
    toastMessage,
    handleMessageChange,
  };
};

export default useToastOpen;
