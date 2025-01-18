import styled from '@emotion/styled';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalWrapperProps {
  children: ReactNode;
  $isSingleModal: boolean;
  isOpen: boolean;
  isPrimaryRight?: boolean;
}

const ModalWrapper = ({ children, isOpen, $isSingleModal, isPrimaryRight }: ModalWrapperProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.ModalContent $isSingleModal={$isSingleModal} $isPrimaryRight={isPrimaryRight}>
        {children}
      </S.ModalContent>
    </S.ModalWrapper>,

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
  ModalContent: styled.div<{ $isSingleModal: boolean; $isPrimaryRight?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${({ $isSingleModal }) => $isSingleModal && '3.7rem'};
    align-items: center;
    justify-content: flex-end;
    width: 40rem;
    margin: auto;
    padding: ${({ $isSingleModal, $isPrimaryRight }) =>
      $isSingleModal ? '4.9rem 0 2.8rem 0' : $isPrimaryRight ? '3.6rem 0 0 0' : '3.1rem 0 0 0'};

    background: ${({ theme }) => theme.colors.white1};
    box-shadow: 0 0 12px 0 ${({ theme }) => theme.colors.shadow1};
    border: 1px solid ${({ theme }) => theme.colors.gray4};
    border-radius: 2rem;
  `,
};
