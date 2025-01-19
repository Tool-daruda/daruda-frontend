import { IcLeftarrow60 } from '@assets/svgs';
import BtnWritingChipx56 from '@assets/svgs/BtnWritingChipx56';
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

export const ModalInnerWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: -10rem;
`;

export const CloseBtn = styled(BtnWritingChipx56)`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
`;

export const ImgThumb = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 8rem;
`;

export const PreviewImg = styled.img<{ $isActive: boolean }>`
  width: 8rem;
  height: 8rem;
  object-fit: cover;

  cursor: pointer;
  ${({ $isActive, theme }) =>
    $isActive ? `  border: 3px solid ${theme.colors.orange1}` : `  border: 0.75px solid ${theme.colors.gray6};`};
  border-radius: 1.6rem;
`;

export const ModalContent = styled.img`
  width: 102.5rem;
  height: 60rem;
  object-fit: contain;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 6.5rem;
  display: flex;
  justify-content: space-between;
  width: 25.2rem;
`;

export const PrevBtn = styled(IcLeftarrow60)<{ $isActive: boolean }>`
  cursor: pointer;

  path {
    stroke: ${({ $isActive, theme }) => ($isActive ? theme.colors.white1 : theme.colors.gray2)};
  }

  &:hover {
    path {
      stroke: ${({ $isActive, theme }) => $isActive && theme.colors.gray4};
    }
  }

  ${({ $isActive }) => $isActive || 'cursor: not-allowed'}
`;

export const NextBtn = styled(PrevBtn)`
  transform: rotate(180deg);
`;
