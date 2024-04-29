import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import MoviePage from './pages/MoviePage';
import { ThemeProvider } from './components/ThemeContext'; // Import the provider

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/home',
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/:movieId',
    element: <MoviePage/>,
    errorElement: <ErrorPage/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
