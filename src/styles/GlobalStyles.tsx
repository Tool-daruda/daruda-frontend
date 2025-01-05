import { Global, css } from "@emotion/react";
import Reset from "./reset";

const globalStyles = css`
  ${Reset}

  @font-face {
    font-family: "AppleSDGothicNeoB00";
    src: url("/fonts/AppleSDGothicNeoB00.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "AppleSDGothicNeoM00";
    src: url("/fonts/AppleSDGothicNeoM00.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "AppleSDGothicNeoSB00";
    src: url("/fonts/AppleSDGothicNeoSB00.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "AppleSDGothicNeoR00";
    src: url("/fonts/AppleSDGothicNeoR00.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body,
  button,
  input,
  select,
  table,
  textarea {
    font-family: "AppleSDGothicNeoB00", "AppleSDGothicNeoM00",
      "AppleSDGothicNeoSB00", "AppleSDGothicNeoR00", -apple-system,
      BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
  }

  #root {
    width: 100%;
    min-width: 1366px;
    min-height: 100vh;
  }
`;

const GlobalStyle = () => <Global styles={globalStyles} />;

export default GlobalStyle;
