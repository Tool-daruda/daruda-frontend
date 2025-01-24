import { Backcards } from '@assets/svgs';
import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  position: relative;
  z-index: 0;
  align-self: stretch;
  height: 20.8rem;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.black};
`;

export const BannerBackground = styled.div`
  height: 20.8rem;

  background: linear-gradient(90deg, #4d4ecd 40.5%, rgb(77 78 205 / 20%) 69.5%, rgb(77 78 205 / 5%) 100%);
`;

export const BackCards = styled(Backcards)`
  position: absolute;
  top: -26%;
  left: 73%;
  z-index: -2;
  height: 52.35rem;
  overflow: hidden;

  transform: translate(-50%, -50%);
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
