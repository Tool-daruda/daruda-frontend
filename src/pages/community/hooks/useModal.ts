import React, { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');
  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModal = (type: string) => {
    setModalType(type);
    setIsOpen(true);
  };

  const preventPropogation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return {
    isOpen,
    setIsOpen,
    modalType,
    handleModalClose,
    preventPropogation,
    handleModal,
  };
};

export default useModal;
