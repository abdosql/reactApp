import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Table from '../common/Table';
import styled from 'styled-components';
import { BASE_URL } from '../../config.js';

const AlertDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [alertDetails, setAlertDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlertDetails();
  }, [id]);

  const fetchAlertDetails = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/incidents/${id}/details/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAlertDetails(data);
    } catch (error) {
      console.error('Error fetching alert details:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { header: 'Alert ID', accessor: 'id_alerte' },
    { 
      header: 'Date', 
      accessor: 'date_alerte',
      render: (row) => new Date(row.date_alerte).toLocaleString()
    },
    { header: 'Alert Level', accessor: 'niveau_alerte' },
    { header: 'Operator', accessor: 'operator' }
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/alerts')}>← Back to Alerts</BackButton>
        <Title>Incident Details</Title>
      </Header>
      
      <AlertCount>
        Total Alerts: <strong>{alertDetails?.alert_count || 0}</strong>
      </AlertCount>

      <Table 
        columns={columns}
        data={alertDetails?.alerts || []}
        isLoading={loading}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #4a5568;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  
  &:hover {
    color: #2d3748;
  }
`;

const Title = styled.h1`
  margin: 0 0 0 1rem;
  font-size: 1.5rem;
  color: #2d3748;
`;

const AlertCount = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #4a5568;
`;

export default AlertDetails;