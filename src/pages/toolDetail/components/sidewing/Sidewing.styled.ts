import styled from '@emotion/styled';

export const SidewingWrapper = styled.div`
  position: sticky;
  top: 8.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
  justify-content: center;
  width: 26.6rem;
  height: 62.2rem;
  margin-top: 1.8rem;
  padding: 3.2rem 0;

  background-color: ${({ theme }) => theme.colors.white1};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 16px;
`;

export const OrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  width: 100%;
  height: 20.6rem;
  padding: 0 2.8rem;

  h1 {
    padding-bottom: 0.4rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body_20_b};
  }
`;

export const OrderBtn = styled.button<{ $isActive: boolean }>`
  display: flex;
  gap: ${({ $isActive }) => ($isActive ? '0.9rem' : '0')};
  align-items: center;
  width: 11.7rem;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.black : theme.colors.gray3)};

  transition:
    gap 0.3s ease-in-out,
    color 0.3s ease-in-out;

  ${({ theme, $isActive }) => ($isActive ? theme.fonts.caption_14_b : theme.fonts.caption_14_m)};

  &:hover {
    color: ${({ theme, $isActive }) => ($isActive ? theme.colors.black : theme.colors.gray4)};
  }

  .click-left-bar {
    width: 0.3rem;
    height: 1.6rem;

    background-color: ${({ theme }) => theme.colors.black};
    visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
    border-radius: 3.2rem;

    transition: visibility 0s ease-in-out ${({ $isActive }) => ($isActive ? '0s' : '0.3s')};
  }
`;

export const SimilarToolContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  .title {
    align-items: flex-start;
    padding: 0 2.8rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body_16_b_3};
  }
`;

export const ToolContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
`;

export const ToolBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  align-items: flex-start;
  align-self: stretch;
  padding: 1.6rem;
`;

export const TopBox = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  align-self: stretch;
`;

export const ToolImgBox = styled.div`
  width: 6rem;
  height: 6rem;
  overflow: hidden;

  border-radius: 1.2rem;

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
  width: 9.8rem;

  h2 {
    ${({ theme }) => theme.fonts.body_16_b_3};
  }
`;
