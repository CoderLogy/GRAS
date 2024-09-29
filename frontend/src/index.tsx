import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './index.css';
import { Landing } from './pages/Landing';
import styled from 'styled-components';
import { Chat } from './pages/Chat';
import { Header } from './components/Header';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #212121;
`;

const router = createBrowserRouter([
  {
    element: (
      <Container>
        <Header />
        <Outlet />
      </Container>
    ),
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
