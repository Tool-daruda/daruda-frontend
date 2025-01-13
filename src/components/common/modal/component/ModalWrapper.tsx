import styled from '@emotion/styled';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalWrapperProps {
  children: ReactNode;
  $isSingleModal: boolean;
  isOpen: boolean;
}

const ModalWrapper = ({ children, isOpen, $isSingleModal }: ModalWrapperProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.ModalContent $isSingleModal={$isSingleModal}>{children}</S.ModalContent>
    </S.ModalWrapper>,

    document.getElementById('portal-root') as HTMLElement,
  );
};

export default ModalWrapper;

const S = {
  ModalWrapper: styled.dialog`
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding-top: 3.1rem;
    overflow: auto;

    background: rgb(70 70 70 / 60%);
    backdrop-filter: blur(0.6rem);
  `,
  ModalContent: styled.div<{ $isSingleModal: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${({ $isSingleModal }) => $isSingleModal && '3.4rem'};
    align-items: center;
    justify-content: flex-end;
    width: 40rem;
    height: auto;
    padding: ${({ $isSingleModal }) => ($isSingleModal ? '4.4rem 4.8rem 2.8rem 4.8rem' : '3.1rem 0 0 0')};

    background: ${({ theme }) => theme.colors.white1};
    box-shadow: 0 0 12px 0 ${({ theme }) => theme.colors.shadow1};
    border: 1px solid ${({ theme }) => theme.colors.gray4};
    border-radius: 2rem;
  `,
};
