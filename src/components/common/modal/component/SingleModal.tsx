import { SVGProps, FunctionComponent } from 'react';

import * as S from '../AlterModal.styled';

interface SingleModalProps {
  modalTitle: string;
  ImgPopupModal: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const SingleBtnModal = ({ modalTitle, ImgPopupModal }: SingleModalProps) => {
  return (
    <>
      <S.ModalTitle>{modalTitle}</S.ModalTitle>
      <ImgPopupModal />
    </>
  );
};

export default SingleBtnModal;
