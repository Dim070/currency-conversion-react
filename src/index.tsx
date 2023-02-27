import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/mainPage/MainPage';
import reportWebVitals from './reportWebVitals';
import './assets/scss/style.global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrenciesPage from './pages/currenciesPage/CurrenciesPage';
import { Container } from '@material-ui/core';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="currencies" element={<CurrenciesPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
