import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/mainPage/MainPage';
import reportWebVitals from './reportWebVitals';
import './assets/scss/style.global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrenciesPage from './pages/currenciesPage/CurrenciesPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="gallery" element={<CurrenciesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
