import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/home";
import { ShadcnComponents } from "./pages/shadcncomponents";
import { Hoyoverse } from "./pages/hoyoverse";
import { Dashboard } from "./pages/dashboard";
import { Stock } from "./pages/stock";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shadcncomponents" element={<ShadcnComponents />} />
          <Route path="/hoyoverse" element={<Hoyoverse />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
    </Router>
  );
}

export default App;
