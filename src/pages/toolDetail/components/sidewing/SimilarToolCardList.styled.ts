import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.colors.black2_hover};
  backdrop-filter: blur(0.6rem);
  inset: 0;
`;
