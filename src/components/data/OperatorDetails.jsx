import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ShowPage from '../common/ShowPage';

const OperatorDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data for demonstration - replace with actual data fetching
  const operatorData = {
    "Operator ID": id,
    "Full Name": "John Doe",
    "Role": "Senior Technician",
    "Status": "Active",
    "Email": "john.doe@example.com",
    "Phone": "+1 234 567 8900",
    "Department": "Maintenance",
    "Shift": "Morning (6:00 AM - 2:00 PM)",
    "Access Level": "Level 3",
    "Assigned Zones": "Zone A, Zone B",
    "Last Login": "2024-12-10 08:15:00",
    "Join Date": "2023-01-15",
    "Certifications": "HVAC, Industrial Safety",
    "Emergency Contact": "+1 234 567 8901"
  };

  const breadcrumbItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Operators', path: '/operators' },
    { label: id, path: `/operators/${id}` }
  ];

  return (
    <ShowPage
      title="Operator Details"
      data={operatorData}
      onBack={() => navigate('/operators')}
      breadcrumbItems={breadcrumbItems}
    />
  );
};

export default OperatorDetails;
