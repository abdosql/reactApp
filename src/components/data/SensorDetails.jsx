import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowPage from '../common/ShowPage';

const SensorDetails = () => {
  const navigate = useNavigate();

  // Mock data for demonstration
  const sensorData = {
    "Sensor ID": "SENS-001",
    "Location": "Zone A",
    "Type": "Temperature",
    "Last Reading": "25°C",
    "Status": true,
    "Installation Date": "2023-12-01",
    "Maintenance Due": "2024-06-01",
    "Calibration Status": "Calibrated",
    "Firmware Version": "v2.1.0",
    "Battery Level": "85%",
    "Network Status": "Connected",
    "Data Transmission Rate": "Every 5 minutes"
  };

  const breadcrumbItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Sensors', path: '/sensors' },
    { label: 'SENS-001', path: '/sensors/SENS-001' }
  ];

  return (
    <ShowPage
      title="Sensor Details"
      data={sensorData}
      onBack={() => navigate('/sensors')}
      breadcrumbItems={breadcrumbItems}
    />
  );
};

export default SensorDetails;
