import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";
import { Hoyoverse } from "./pages/hoyoverse";
import { Layout } from "./pages/layout";

import "./App.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hoyoverse" element={<Hoyoverse />} />
        </Routes>
    </Router>
  );
}

export default App;
