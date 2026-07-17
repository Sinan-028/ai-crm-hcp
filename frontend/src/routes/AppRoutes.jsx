import { Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import LogInteractionPage from "../pages/LogInteractionPage";
import HCPPage from "../pages/HCPPage";
import SettingsPage from "../pages/SettingsPage";
import AIInsightsPage from "../pages/AIInsightsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/interaction" element={<LogInteractionPage />} />
      <Route path="/hcp" element={<HCPPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/insights" element={<AIInsightsPage />} />
    </Routes>
  );
}