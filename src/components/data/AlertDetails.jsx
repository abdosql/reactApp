import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ShowPage from '../common/ShowPage';

const AlertDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data for demonstration - replace with actual data fetching
  const alertData = {
    "Alert ID": id,
    "Type": "Temperature High",
    "Severity": "Critical",
    "Status": "Active",
    "Timestamp": "2024-12-10 14:30:00",
    "Sensor ID": "SENS-001",
    "Location": "Zone A",
    "Reading": "35°C",
    "Threshold": "30°C",
    "Description": "Temperature exceeded maximum threshold",
    "Actions Taken": "Notification sent to operators",
    "Resolution Time": "Pending"
  };

  const breadcrumbItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Alerts', path: '/alerts' },
    { label: id, path: `/alerts/${id}` }
  ];

  return (
    <ShowPage
      title="Alert Details"
      data={alertData}
      onBack={() => navigate('/alerts')}
      breadcrumbItems={breadcrumbItems}
    />
  );
};

export default AlertDetails;
