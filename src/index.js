
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { GenshinCodeRedeemProvider } from "contexts/RedeemCodeGenshin";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import RedeemCodePage from "views/examples/RedeemCodePage.js";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GenshinCodeRedeemProvider> {/* Context Provider 적용 */}
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/nucleo-icons" element={<NucleoIcons />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/redeemcode-page" element={<RedeemCodePage />} />
        <Route path="*" element={<Navigate to="/index" replace />} />
      </Routes>
    </BrowserRouter>
  </GenshinCodeRedeemProvider>
);
