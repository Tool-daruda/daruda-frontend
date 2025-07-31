import styled from '@emotion/styled';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalWrapperProps {
  children: ReactNode;
  // $isSingleModal: boolean;
  isOpen: boolean;
  // isPrimaryRight?: boolean;
}

const ModalWrapper = ({ children, isOpen }: ModalWrapperProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalWrapper>{children}</S.ModalWrapper>,

    document.getElementById('portal-root') as HTMLElement,
  );
};

export default ModalWrapper;

const S = {
  ModalWrapper: styled.dialog`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 3.1rem;
    overflow: auto;

    background: rgb(70 70 70 / 60%);
    backdrop-filter: blur(0.6rem);
  `,
};
