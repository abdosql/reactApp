import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../common/Table';
import AddButton from '../../common/AddButton';
import styled from 'styled-components';
import { RiEditLine, RiDeleteBinLine, RiEyeLine } from 'react-icons/ri';
import AddItemModal from '../../modals/AddItemModal';
import EditModal from '../../modals/EditModal';
import DeleteModal from '../../modals/DeleteModal';

const SensorsTable = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = [
    { header: 'Sensor ID', accessor: 'id' },
    { header: 'Location', accessor: 'location' },
    { header: 'Type', accessor: 'type' },
    { header: 'Last Reading', accessor: 'lastReading' },
    { header: 'Status', accessor: 'status',
      render: (row) => <StatusBadge status={row.status}>{row.status}</StatusBadge>
    },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (row) => (
        <ActionButtons>
          <ActionButton onClick={() => navigate(`/sensors/${row.id}`)} title="View Details">
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
      id: 'SENS-001',
      location: 'Zone A',
      type: 'Temperature',
      lastReading: '25°C',
      status: 'Active'
    },
    // Add more sample data as needed
  ];

  const fields = [
    { name: 'id', label: 'Sensor ID', required: true },
    { name: 'location', label: 'Location', required: true },
    { name: 'type', label: 'Type', required: true },
  ];

  const handleAdd = (formData) => {
    console.log('Adding:', formData);
    // Implement add logic
  };

  const handleEdit = (formData) => {
    console.log('Editing:', formData);
    // Implement edit logic
  };

  const handleDelete = () => {
    console.log('Deleting:', selectedItem);
    // Implement delete logic
    setIsDeleteModalOpen(false);
  };

  const handleEditClick = (row) => {
    setSelectedItem(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row) => {
    setSelectedItem(row);
    setIsDeleteModalOpen(true);
  };

  return (
    <TableContainer>
      <Table 
        columns={columns} 
        data={data} 
        onRowClick={(row) => console.log('Row clicked:', row)}
      />
      
      <TableFooter>
        <AddButton 
          onClick={() => setIsAddModalOpen(true)} 
          label="Add Sensor"
        />
      </TableFooter>

      <AddItemModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAdd}
        fields={fields}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEdit}
        fields={fields}
        initialData={selectedItem}
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  border-radius: 8px;
  padding: 1rem;
`;

const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 1rem;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => 
    props.status.toLowerCase() === 'active' 
      ? 'rgba(40, 167, 69, 0.1)' 
      : 'rgba(108, 117, 125, 0.1)'
  };
  color: ${props => 
    props.status.toLowerCase() === 'active' 
      ? '#28a745' 
      : '#6c757d'
  };
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

export default SensorsTable;