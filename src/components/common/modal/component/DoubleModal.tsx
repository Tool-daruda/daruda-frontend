import { SVGProps, FunctionComponent } from 'react';

import * as S from '../AlterModal.styled';

interface DoubleBtnModalProps {
  modalTitle: string;
  modalContent?: string;
  ImgPopupModal: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const DoubleBtnModal = ({ modalTitle, modalContent, ImgPopupModal }: DoubleBtnModalProps) => {
  return (
    <>
      <ImgPopupModal />
      <S.ModalTitle>{modalTitle}</S.ModalTitle>
      <S.ModalContent>{modalContent}</S.ModalContent>
    </>
  );
};

export default DoubleBtnModal;
