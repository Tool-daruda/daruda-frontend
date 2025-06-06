import styled from '@emotion/styled';

export const NotiWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const NotiContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 86rem;
  height: max-content;
  margin-top: 2.4rem;
  padding: 3.2rem 9.3rem 5.6rem;

  background: var(--white1, #fff);
  border-radius: 1.6rem;

  & h1 {
    ${({ theme }) => theme.fonts.body_24_b};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const NotiDateList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  align-self: stretch;

  li {
    width: 100%;
  }
`;

export const NotiDateText = styled.h2`
  ${({ theme }) => theme.fonts.body_16_m}
  color: ${({ theme }) => theme.colors.gray1};
`;

export const CardItem = styled.section`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  padding: 1.5rem 2.4rem;

  & > svg {
    min-width: fit-content;
  }

  & div {
    width: 84%;
  }

  & h2 {
    width: 85%;
    overflow: hidden;

    ${({ theme }) => theme.fonts.caption_14_b};
    color: ${({ theme }) => theme.colors.gray1};
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & p {
    ${({ theme }) => theme.fonts.caption_12_m};
    color: ${({ theme }) => theme.colors.gray4};
  }
`;
