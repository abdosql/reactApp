import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import TemperaturePage from './pages/TemperaturePage';
import HumidityPage from './pages/HumidityPage';
import SensorsLocationPage from './pages/SensorsLocationPage';
import AlertsHistoryPage from './pages/AlertsHistoryPage';
import OperateursPage from './pages/OperateursPage';
import SettingsPage from './pages/SettingsPage';
import AuthContainer from './components/Auth/AuthContainer';
import SensorDetails from './components/data/SensorDetails';
import AlertDetails from './components/data/AlertDetails';
import OperatorDetails from './components/data/OperatorDetails';

const AppLayout = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AuthContainer />} />
        <Route element={<AppLayout />}>
        <Route path="/DashboardPage" element={<DashboardPage />} />
          <Route path="/temperature" element={<TemperaturePage />} />
          <Route path="/humidity" element={<HumidityPage />} />
          <Route path="/sensors-location" element={<SensorsLocationPage />} />
          <Route path="/sensors/:id" element={<SensorDetails />} />
          <Route path="/alerts/:id" element={<AlertDetails />} />
          <Route path="/operators/:id" element={<OperatorDetails />} />
          <Route path="/alerts-history" element={<AlertsHistoryPage />} />
          <Route path="/operateurs" element={<OperateursPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
