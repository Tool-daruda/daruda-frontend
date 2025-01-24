import styled from '@emotion/styled';

export const ToastWrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const ToastLayout = styled.section<{ $isVisible: boolean; $isWarning: boolean }>`
  position: absolute;
  bottom: 10rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 2.8rem 2rem;

  background-color: ${({ theme, $isWarning }) => ($isWarning ? theme.colors.orange1 : theme.colors.black_toast)};
  backdrop-filter: blur(1.2rem);
  border-radius: 1.2rem;
`;

export const ToastMessage = styled.div`
  width: 44.7rem;

  color: ${({ theme }) => theme.colors.white1};
  text-align: center;
  ${({ theme }) => theme.fonts.body_20_b};
`;
