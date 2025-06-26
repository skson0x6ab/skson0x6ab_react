import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/home";
import { Layout } from "./pages/layout";
import { FormControls } from "./pages/formcontrols";
import { Navigation } from "./pages/navigation";
import { FeedbackDisplay } from "./pages/feedbackdisplay";
import { Hoyoverse } from "./pages/hoyoverse";
import { Dashboard } from "./pages/dashboard";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/formcontrols" element={<FormControls />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/feedbackdisplay" element={<FeedbackDisplay />} />
          <Route path="/hoyoverse" element={<Hoyoverse />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
