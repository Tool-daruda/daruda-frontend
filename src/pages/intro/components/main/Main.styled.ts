import styled from '@emotion/styled';

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14rem;
  align-items: center;
  justify-content: center;
  padding-top: 11rem;

  span {
    padding: 0 1.55rem;
  }
`;

export const PageTitle = styled.section`
  margin-top: 6rem;

  color: ${({ theme }) => theme.colors.gray1};
  ${({ theme }) => theme.fonts.body_24_sb};
  text-align: center;
`;

export const Scroll = styled.section`
  ${({ theme }) => theme.fonts.caption_14_m};
  margin: 5.3rem 0 0.7rem;

  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
`;
