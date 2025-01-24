import { useState } from 'react';

const useToastOpen = () => {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsToastOpen(true);
    setTimeout(() => setIsToastOpen(false), 3000);
  };
  return {
    isToastOpen,
    handleModalOpen,
  };
};

export default useToastOpen;
