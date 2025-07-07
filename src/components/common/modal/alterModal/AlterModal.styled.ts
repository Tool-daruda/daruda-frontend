import styled from '@emotion/styled';

export const ModalContent = styled.div<{ $isSingleModal: boolean; $isPrimaryRight?: boolean }>`
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
`;

export const ModalContainer = styled.section<{ $isSingleModal: boolean; $isPrimaryRight?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $isPrimaryRight }) => ($isPrimaryRight ? '1.8rem' : '1.6rem')};
  align-items: center;
  padding-bottom: ${({ $isSingleModal, $isPrimaryRight }) =>
    !$isSingleModal && $isPrimaryRight ? '2.8rem' : !$isSingleModal && '2.5rem'};
`;

export const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.body_20_b};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const ModalInnerContent = styled.p<{ $isPrimaryRight?: boolean }>`
  ${({ theme }) => theme.fonts.caption_12_r};
  margin-top: ${({ $isPrimaryRight }) => ($isPrimaryRight ? '-1rem' : '-0.8rem')};

  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
`;
