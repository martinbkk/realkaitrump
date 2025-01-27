import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import PrivacyPolicy from './pages/privacy-policy.tsx';
import CopyrightPolicy from './pages/copyright-policy.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/copyright-policy",
    element: <CopyrightPolicy />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
