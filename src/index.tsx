import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalReset } from '~/styles/GlobalReset';
import App from '~/App';
import { Theme } from '~/styles/Theme';
import { serviceWorker } from '~/server/browser';
import { ToastProvider } from '~/components/common/Toast/ToastContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';
import LandingPage from '~/pages/LandingPage/LandingPage';
import StartPage from '~/pages/StartPage/StartPage';
import JoinPage from '~/pages/JoinPage/JoinPage';
import CreatePage from '~/pages/CreatePage/CreatePage';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';
import LoginPage from '~/pages/LoginPage/LoginPage';
import ProtectRoute from '~/components/common/ProtectRoute/ProtectRoute';

if (process.env.WORKER === 'on') {
  serviceWorker.start({ onUnhandledRequest: 'bypass' });
}

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '', element: <LandingPage /> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      {
        element: <ProtectRoute />,
        children: [
          { path: ROUTES.START, element: <StartPage /> },
          { path: ROUTES.CREATE, element: <CreatePage /> },
          { path: ROUTES.JOIN, element: <JoinPage /> },
        ],
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalReset} />
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
