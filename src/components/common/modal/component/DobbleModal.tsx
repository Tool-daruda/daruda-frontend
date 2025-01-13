import { SVGProps, FunctionComponent } from 'react';

import * as S from '../AlterModal.styled';

interface DobbleBtnModalProps {
  modalTitle: string;
  modalContent?: string;
  ImgPopupModal: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const DobbleBtnModal = ({ modalTitle, modalContent, ImgPopupModal }: DobbleBtnModalProps) => {
  return (
    <>
      <ImgPopupModal />
      <S.ModalTitle>{modalTitle}</S.ModalTitle>
      <S.ModalContent>{modalContent}</S.ModalContent>
    </>
  );
};

export default DobbleBtnModal;
