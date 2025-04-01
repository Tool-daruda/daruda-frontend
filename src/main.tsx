import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@styles/GlobalStyles';
import theme from '@styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import AnalyticsProvider from './hoc/useAnalytics';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AnalyticsProvider>
            <App />
          </AnalyticsProvider>
        </HelmetProvider>
        <div style={{ fontSize: '1.6rem' }}>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  </>,
);
