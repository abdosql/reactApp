import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../common/Table';
import styled from 'styled-components';
import { RiEyeLine } from 'react-icons/ri';
import { BASE_URL } from '../../../config.js'; 

const AlertTable = () => {
  const navigate = useNavigate();
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/incidents-history/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIncidents(data);
    } catch (error) {
      console.error('Error fetching incidents:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { header: 'Incident ID', accessor: 'id_incident' },
    { header: 'Sensor ID', accessor: 'sensor_id' },
    { header: 'Detected Temperature', accessor: 'temperature_detectee' },
    { 
      header: 'Severity', 
      accessor: 'type_incident',
      render: (row) => <SeverityBadge severity={row.type_incident || 'Unknown'}>{row.type_incident || 'Unknown'}</SeverityBadge>
    },
    { 
      header: 'Start Date', 
      accessor: 'debut_incident',
      render: (row) => new Date(row.debut_incident).toLocaleString()
    },
    { 
      header: 'End Date', 
      accessor: 'fin_incident',
      render: (row) => row.fin_incident ? new Date(row.fin_incident).toLocaleString() : '-'
    },
    {
      header: 'Details',
      accessor: 'details',
      render: (row) => (
        <ActionButtons>
          <ActionButton onClick={() => navigate(`/alerts/${row.id_incident}`)} title="View Details">
            <RiEyeLine />
          </ActionButton>
        </ActionButtons>
      )
    }
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer>
      <Table 
        columns={columns} 
        data={incidents}
      />
    </TableContainer>
  );
};


const TableContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #4a5568;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    color: #2d3748;
    background-color: #e2e8f0;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => 
    props.status === 'Active' ? 'rgba(40, 167, 69, 0.1)' : 'rgba(108, 117, 125, 0.1)'
  };
  color: ${props => 
    props.status === 'Active' ? '#28a745' : '#6c757d'
  };
`;

const SeverityBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.severity.toLowerCase()) {
      case 'critical':
        return 'rgba(220, 53, 69, 0.1)';
      case 'severe':
        return 'rgba(255, 193, 7, 0.27)';
      case 'medium':
        return 'rgba(23, 162, 184, 0.1)';
      default:
        return 'rgba(108, 117, 125, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.severity.toLowerCase()) {
      case 'critical':
        return '#dc3545';
      case 'severe':
        return '#ffc107';
      case 'medium':
        return '#17a2b8';
      default:
        return '#6c757d';
    }
  }};
`;

export default AlertTable;