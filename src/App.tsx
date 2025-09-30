import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/home";
import { AuthProvider } from "./context/AuthContext";
import { ShadcnComponents } from "./pages/shadcncomponents";
import { Hoyoverse } from "./pages/hoyoverse";
import { Dashboard } from "./pages/dashboard";
import { Stock } from "./pages/stock";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shadcncomponents" element={<ShadcnComponents />} />
          <Route path="/hoyoverse" element={<Hoyoverse />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ETF" element={<Stock />} />
        </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
