import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;
