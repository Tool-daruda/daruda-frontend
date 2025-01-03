import { css } from "@emotion/react";

import Reset from "./reset";

const GlobalStyle = css`
  ${Reset}
  * {
    box-sizing: border-box;
  }

  :root {
    --min-width: 1366px;
    --max-width: 1366px;
  }

  html,
  body {
    font-size: 62.5%;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  #root {
    width: 100%;
    min-height: 100dvh;
    background-color: #fff;
  }

  @media (min-width: 1366px) {
    #root {
      max-width: var(--max-width);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    }
  }
`;

export default GlobalStyle;
