import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  position: relative;
  align-self: stretch;
  height: 20.8rem;

  background-color: ${({ theme }) => theme.colors.iris1};
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-top: 5rem;
  padding-left: 16rem;

  ${({ theme }) => theme.fonts.body_16_m};
  color: ${({ theme }) => theme.colors.white1};
`;
export const BannerTitle = styled.div`
  ${({ theme }) => theme.fonts.head_32_b};
  color: ${({ theme }) => theme.colors.white1};
`;
