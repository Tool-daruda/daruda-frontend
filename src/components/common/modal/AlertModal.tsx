import { SVGProps, FunctionComponent } from 'react';

import * as S from './AlterModal.styled';
import { SingleBtn, DoubleBtns, SingleBtnModal, DoubleBtnModal, ModalWrapper } from './component';

interface AlertModalProps {
  modalTitle: string;
  isOpen: boolean;
  handleClose: () => void;
  ImgPopupModal: FunctionComponent<SVGProps<SVGSVGElement>>;

  isSingleModal: boolean;
  singleBtnContent?: string;

  modalContent?: string;
  DobblebtnProps?: {
    isPrimaryRight: boolean;
    primaryBtnContent: string;
    secondaryBtnContent: string;
    handleSecondClose?: () => void;
  };
}

const AlterModal = (props: AlertModalProps) => {
  const { isSingleModal, modalTitle, ImgPopupModal, isOpen, handleClose } = props;

  const renderModalContent = () =>
    isSingleModal ? (
      <SingleBtnModal modalTitle={modalTitle} ImgPopupModal={ImgPopupModal} />
    ) : (
      <DoubleBtnModal modalTitle={modalTitle} modalContent={props.modalContent} ImgPopupModal={ImgPopupModal} />
    );

  const renderModalButtons = () =>
    isSingleModal ? (
      <SingleBtn singleBtnContent={props.singleBtnContent} handleClose={handleClose} />
    ) : (
      <DoubleBtns {...props.DoublebtnProps} handleClose={handleClose} />
    );

  return (
    <ModalWrapper isOpen={isOpen} $isSingleModal={isSingleModal}>
      <S.ModalContainer $isSingleModal={isSingleModal}>{renderModalContent()}</S.ModalContainer>
      {renderModalButtons()}
    </ModalWrapper>
  );
};

export default AlterModal;
