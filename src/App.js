import React from 'react';
import Layout from './components/layout/Layout';
import DashboardPage from './components/dashboard/DashboardPage';
import './App.css';

function App() {
  const breadcrumbItems = [
    {
      label: 'Home',
      onClick: () => console.log('Navigate to Home')
    },
    {
      label: 'Dashboard',
    }
  ];

  return (
    <Layout breadcrumbItems={breadcrumbItems}>
      <DashboardPage />
    </Layout>
  );
}

export default App;
