import { useState, useRef } from 'react';

const useToastOpen = () => {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState('');
  const timeoutRef = useRef<number | null>(null);

  const handleModalOpen = () => {
    setIsToastOpen(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsToastOpen(false);
      timeoutRef.current = null;
    }, 1500);
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
