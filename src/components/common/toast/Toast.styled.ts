import styled from '@emotion/styled';

export const ToastWrapper = styled.section<{ $isVisible: boolean; $isWarning: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? 'inline-flex' : 'none')};
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
