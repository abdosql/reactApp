import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../common/Table';
import styled from 'styled-components';
import { RiEditLine, RiDeleteBinLine, RiEyeLine } from 'react-icons/ri';
import DeleteModal from '../../modals/DeleteModal';

const AlertTable = () => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = [
    { header: 'Alert ID', accessor: 'id' },
    { header: 'Type', accessor: 'type' },
    { header: 'Severity', accessor: 'severity',
      render: (row) => <SeverityBadge severity={row.severity}>{row.severity}</SeverityBadge>
    },
    { header: 'Timestamp', accessor: 'timestamp' },
    { header: 'Status', accessor: 'status',
      render: (row) => <StatusBadge status={row.status}>{row.status}</StatusBadge>
    },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (row) => (
        <ActionButtons>
          <ActionButton onClick={() => navigate(`/alerts/${row.id}`)} title="View Details">
            <RiEyeLine />
          </ActionButton>
          <ActionButton onClick={() => handleEditClick(row)} title="Edit">
            <RiEditLine />
          </ActionButton>
          <ActionButton onClick={() => handleDeleteClick(row)} title="Delete">
            <RiDeleteBinLine />
          </ActionButton>
        </ActionButtons>
      )
    }
  ];

  const data = [
    {
      id: 'ALT-001',
      type: 'Temperature High',
      severity: 'Critical',
      timestamp: '2024-12-10 14:30:00',
      status: 'Active'
    },
    // Add more sample data as needed
  ];

  const handleDeleteClick = (row) => {
    setSelectedItem(row);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    console.log('Deleting:', selectedItem);
    setIsDeleteModalOpen(false);
  };

  const handleEditClick = (row) => {
    console.log('Editing:', row);
  };

  return (
    <TableContainer>
      <Table 
        columns={columns} 
        data={data}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        itemName={selectedItem?.id}
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
      case 'high':
        return 'rgba(255, 193, 7, 0.1)';
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
      case 'high':
        return '#ffc107';
      case 'medium':
        return '#17a2b8';
      default:
        return '#6c757d';
    }
  }};
`;

export default AlertTable;