import React from 'react';
import s from './App.scss';

import { Routes, Route } from 'react-router-dom';
import { AppHome } from './pages/AppHome/AppHome';
import { EmptyPage } from './pages/EmptyPage/EmptyPage';
function App() {

  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/terms-and-conditions" element={<EmptyPage />} />
      </Routes>
    </div>
  );
}

export default App;
