import styled from '@emotion/styled';

export const ModalContainer = styled.section<{ $isSingleModal: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  gap: ${({ $isSingleModal }) => ($isSingleModal ? '3.4rem' : '1.6rem')};
  align-items: center;
  width: 30.2rem;
  padding-bottom: ${({ $isSingleModal }) => !$isSingleModal && ' 3.4rem'};
`;

export const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.body_20_b};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const ModalContent = styled.p`
  ${({ theme }) => theme.fonts.caption_12_r};
  padding-bottom: 2.3rem;

  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
`;
