import styled from '@emotion/styled';

export const ToolIntroWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  width: 76.8rem;
  height: 30.7rem;
  padding: 5.2rem 3.2rem;
`;

export const IntroImgBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36rem;
  height: 100%;
  overflow: hidden;

  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.shadow1};
  border: 0.5px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 0.8rem;

  img {
    width: inherit;
    height: inherit;
    object-fit: fill;
  }

  .hover-icon {
    position: absolute;
    z-index: -1;

    cursor: pointer;
    opacity: 0;

    transition:
      opacity 0.3s ease,
      z-index 0.3s ease;
  }

  &:hover {
    .hover-icon {
      z-index: 1; /* z-index 조정 */

      opacity: 1; /* hover 시 표시 */
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background-color: ${({ theme }) => theme.colors.black_toast};
      opacity: 0.5;

      transition: opacity 0.3s ease;

      content: '';
    }
  }
`;

export const ToolInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
  width: 31.2rem;
  margin: 2rem 0 5.9rem;

  span {
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body_24_b};
  }

  pre {
    width: 100%;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.caption_14_m};
    white-space: break-spaces;
    word-break: keep-all;
  }
`;

export const DividingLine = styled.span`
  display: flex;
  flex-direction: column;
  width: 68.8rem;
  height: 0.2rem;
  margin: 0 4rem;

  background-color: ${({ theme }) => theme.colors.gray5};
`;
