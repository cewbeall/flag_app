import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Creator from './Routes/CreatorPage';
import HowToPlay from './Routes/HowToPlay';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="HowToPlay" element={<HowToPlay />} />
      <Route path="Creator" element={<Creator />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
