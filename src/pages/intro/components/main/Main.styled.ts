import styled from '@emotion/styled';

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const PageTitle = styled.section`
  ${({ theme }) => theme.fonts.body_24_sb};
  text-align: center;
`;

export const Scroll = styled.section`
  ${({ theme }) => theme.fonts.caption_14_m};
  text-align: center;
`;
