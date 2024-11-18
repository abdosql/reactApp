import React, { useState } from 'react';
import Table from '../../common/Table';
import styled from 'styled-components';
import { RiEditLine, RiDeleteBinLine } from 'react-icons/ri';
import AddItemModal from '../../modals/AddItemModal';
import EditModal from '../../modals/EditModal';
import DeleteModal from '../../modals/DeleteModal';

const SensorsTable = () => {
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

  const actions = (row) => (
    <>
      <ActionButton onClick={() => {
        setSelectedItem(row);
        setIsEditModalOpen(true);
      }}>
        <RiEditLine />
      </ActionButton>
      <ActionButton danger onClick={() => {
        setSelectedItem(row);
        setIsDeleteModalOpen(true);
      }}>
        <RiDeleteBinLine />
      </ActionButton>
    </>
  );

  return (
    <>
      <Table 
        columns={columns} 
        data={data} 
        actions={actions}
        onRowClick={(row) => console.log('Row clicked:', row)}
      />

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
    </>
  );
};

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

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${props => props.danger ? '#dc3545' : '#8d72e1'};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export default SensorsTable; 