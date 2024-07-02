import React from 'react';
import s from './App.scss';

import { Routes, Route } from 'react-router-dom';
import { AppHome } from './pages/AppHome/AppHome';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage/CookiePolicyPage';
function App() {

  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Routes>
    </div>
  );
}

export default App;
