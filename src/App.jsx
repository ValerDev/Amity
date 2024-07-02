import React from "react";
import s from "./App.scss";
import { Routes, Route } from "react-router-dom";
import { AppHome } from "./pages/AppHome/AppHome";
import { ForBusiness } from "./pages/ForBusinesses/ForBusinesses";
import { ForMilitary } from "./pages/ForMilitary/ForMilitary";
import { ForIndividuals } from "./pages/ForIndividuals/ForIndividuals";
import { ForStudents } from "./pages/ForStudents/ForStudents";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage/TermsPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage/CookiePolicyPage";

function App() {
  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/for-businesses" element={<ForBusiness />} />
        <Route path="/for-military" element={<ForMilitary />} />
        <Route path="/for-individuals" element={<ForIndividuals />} />
        <Route path="/for-students" element={<ForStudents />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Routes>
    </div>
  );
}

export default App;
