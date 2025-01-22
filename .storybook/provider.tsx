import { ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyles';
import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

interface ProviderProps {
  children?: ReactNode;
  theme?: unknown;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <GlobalStyle />
        <BrowserRouter>{children}</BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
};
