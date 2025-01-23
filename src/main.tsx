import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@styles/GlobalStyles';
import theme from '@styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <App />
          <div style={{ fontSize: '1.6rem' }}>
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </>,
);
