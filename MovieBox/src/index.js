import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom';
import App from './App';
import ErrorPage from './Error/ErrorPage';
import MovieDetails from './MovieCard/MovieDetails';

const router = createBrowserRouter([
  {index: true, element: <App />},
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movies/:id',
    element: <MovieDetails />,
  }
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

