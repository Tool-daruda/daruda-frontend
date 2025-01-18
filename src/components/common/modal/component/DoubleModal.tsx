import { SVGProps, FunctionComponent } from 'react';

import * as S from '../AlterModal.styled';

interface DoubleBtnModalProps {
  modalTitle: string;
  modalContent?: string;
  ImgPopupModal: FunctionComponent<SVGProps<SVGSVGElement>>;
  isPrimaryRight?: boolean;
}

const DoubleBtnModal = ({ modalTitle, modalContent, ImgPopupModal, isPrimaryRight }: DoubleBtnModalProps) => {
  return (
    <>
      <ImgPopupModal />
      <S.ModalTitle>{modalTitle}</S.ModalTitle>
      <S.ModalContent $isPrimaryRight={isPrimaryRight}>{modalContent}</S.ModalContent>
    </>
  );
};

export default DoubleBtnModal;
