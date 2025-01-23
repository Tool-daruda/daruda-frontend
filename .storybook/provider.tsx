import { ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyles';
import React, { ReactNode, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProviderProps {
  children?: ReactNode;
  theme?: unknown;
}

export const Provider = ({ children }: ProviderProps) => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <GlobalStyle />
          <BrowserRouter>{children}</BrowserRouter>
        </HelmetProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
