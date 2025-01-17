import styled from '@emotion/styled';

export const ToolIntroWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  width: 76.8rem;
  height: 30.7rem;
  padding: 5.2rem 3.2rem;

  background-color: ${({ theme }) => theme.colors.white1};
`;

export const IntroImgBox = styled.div`
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
