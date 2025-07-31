import { Global, css } from '@emotion/react';

import Reset from './reset';
import theme from './theme';

const globalStyles = css`
  ${Reset}

  @font-face {
    font-weight: 700;
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    src: url('/fonts/AppleSDGothicNeoB00.ttf') format('truetype');
  }

  @font-face {
    font-weight: 500;
    font-family: 'AppleSDGothicNeoM00';
    font-style: normal;
    src: url('/fonts/AppleSDGothicNeoM00.ttf') format('truetype');
  }

  @font-face {
    font-weight: 600;
    font-family: 'AppleSDGothicNeoSB00';
    font-style: normal;
    src: url('/fonts/AppleSDGothicNeoSB00.ttf') format('truetype');
  }

  @font-face {
    font-weight: 400;
    font-family: 'AppleSDGothicNeoR00';
    font-style: normal;
    src: url('/fonts/AppleSDGothicNeoR00.ttf') format('truetype');
  }

  @font-face {
    font-weight: 700;
    font-family: SFProDisplaybold;
    font-style: normal;
    src: url('/fonts/SFProDisplaybold.otf') format('opentype');
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  }

  body,
  button,
  input,
  select,
  table,
  textarea {
    font-family:
      'AppleSDGothicNeoB00',
      'AppleSDGothicNeoM00',
      'AppleSDGothicNeoSB00',
      'AppleSDGothicNeoR00',
      -apple-system,
      BlinkMacSystemFont,
      'Malgun Gothic',
      '맑은 고딕',
      helvetica,
      sans-serif;
  }

  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;

    background-color: ${theme.colors.white2};
  }

  #root {
    width: 100%;
    min-width: 1366px;
    min-height: 100vh;
  }
`;

const GlobalStyle = () => <Global styles={globalStyles} />;

export default GlobalStyle;
