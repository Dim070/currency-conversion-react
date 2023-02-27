import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/mainPage/MainPage';
import reportWebVitals from './reportWebVitals';
import './assets/scss/style.global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrenciesPage from './pages/currenciesPage/CurrenciesPage';
import { Container } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container className="container">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="currencies" element={<CurrenciesPage />} />
          </Routes>
        </QueryClientProvider>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
