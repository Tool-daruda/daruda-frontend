import { ImgDarudalogo50 } from '@assets/svgs';
import styled from '@emotion/styled';

export const PageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 11rem;
  overflow: hidden;

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
  margin: 5.3rem 0 1.5rem;

  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
`;

export const BottomContainer = styled.div`
  transform: scale(0.8);
  opacity: 0;

  transition: opacity 0.6s ease-in-out;

  &.visible {
    transform: scale(1);
    opacity: 1;
  }
`;

export const LogoSVG = styled(ImgDarudalogo50)`
  margin-right: 4rem;
`;
