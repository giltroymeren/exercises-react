import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import RootProvider from './root'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <RootProvider>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </RootProvider >,
  document.getElementById('root')
);
