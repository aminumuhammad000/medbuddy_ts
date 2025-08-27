import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/landing_page/HomePage";
import Auth from "./pages/Auth";
import DashboardPatient from "./pages/patient/Dashboard";
import NotFound from "./pages/common/NotFound";
// import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/patient/dashboard" element={<DashboardPatient />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
