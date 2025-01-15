import styled from '@emotion/styled';

export const ModalContainer = styled.section<{ $isSingleModal: boolean; $isPrimaryRight?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $isSingleModal }) => ($isSingleModal ? '3.7rem' : '1.6rem')};
  align-items: center;
  width: 30.2rem;
  padding-bottom: ${({ $isSingleModal, $isPrimaryRight }) =>
    !$isSingleModal && $isPrimaryRight ? '2.8rem' : !$isSingleModal && '2.5rem'};
`;

export const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.body_20_b};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const ModalContent = styled.p`
  ${({ theme }) => theme.fonts.caption_12_r};
  margin-top: -0.8rem;

  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
`;
