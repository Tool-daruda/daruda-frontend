import styled from '@emotion/styled';

import theme from '@styles/theme';

const S = {
  Layout: styled.section`
    display: inline-flex;
    gap: 1rem;
    align-items: center;
    padding: 3.2rem 2.8rem;

    background: ${theme.colors.white1};
    border-radius: 1.6rem;
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;
    width: max-content;
    min-width: 42.4rem;
  `,

  Header: styled.header`
    display: flex;
    gap: 17rem;
    align-items: center;
    align-self: stretch;
    justify-content: flex-end;

    & h1 {
      ${theme.fonts.body_24_b}
      color: ${theme.colors.black};
      text-align: center;
    }
  `,

  MainContainer: styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;
    align-self: stretch;
  `,

  TitleInputContainer: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    align-self: stretch;
    padding: 1.2rem 0;

    border-top: 1px solid ${theme.colors.gray5};
    border-bottom: 1px solid ${theme.colors.gray5};
    ${theme.fonts.body_16_m}

    & label {
      color: ${theme.colors.gray2};
    }

    & span {
      color: ${theme.colors.gray1};
    }
  `,

  ContentContainer: styled.section`
    ${theme.fonts.body_16_m}
    color: ${theme.colors.gray1};

    & pre {
      text-align: start;
    }
  `,

  ButtonContainer: styled.section`
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `,
};

export default S;
