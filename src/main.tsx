import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import { NotificationProvider } from './hoc/NotificationProvider';
import AnalyticsProvider from './hoc/useAnalytics';
import GlobalStyle from '@styles/GlobalStyles';
import theme from '@styles/theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AnalyticsProvider>
            <NotificationProvider>
              <App />
            </NotificationProvider>
          </AnalyticsProvider>
        </HelmetProvider>
        <div style={{ fontSize: '1.6rem' }}>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  </>,
);
