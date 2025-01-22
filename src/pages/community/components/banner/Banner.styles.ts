import { ImgBannerAttached } from '@assets/svgs';
import styled from '@emotion/styled';

export const BannerWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 19.9rem;

  background: ${({ theme }) => theme.colors.orange1};
`;

export const MainImgBanner = styled(ImgBannerAttached)`
  width: 51.4rem;
  margin: 2.6rem 0 0 21.6rem;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: center;
  padding: 5.2rem 0 5.2rem 6.4rem;
`;
export const BannerTitle = styled.h1`
  ${({ theme }) => theme.fonts.body_20_b};
  color: ${({ theme }) => theme.colors.white1};
`;

export const ModalChipsContainer = styled.ul`
  display: flex;
  gap: 1rem;
  width: max-content;
`;

export const ModalChip = styled.li`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1.2rem;

  background: ${({ theme }) => theme.colors.white1};
  border-radius: 2.8rem;
`;

export const ModalChipText = styled.p`
  ${({ theme }) => theme.fonts.caption_12_b};
  color: ${({ theme }) => theme.colors.gray1};
`;
