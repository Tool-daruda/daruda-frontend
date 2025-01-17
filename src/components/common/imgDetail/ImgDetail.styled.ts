import BtnWritingChipx56 from '@assets/svgs/BtnWritingChipx56';
import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
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
