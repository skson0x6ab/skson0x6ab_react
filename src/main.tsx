import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import { registerSW } from 'virtual:pwa-register';  // ✅ 추가

registerSW({
  onNeedRefresh() {
    console.log('새 버전이 있습니다. 새로고침 해주세요.');
  },
  onOfflineReady() {
    console.log('오프라인 모드 준비 완료.');
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);