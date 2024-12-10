import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../common/Table';
import styled from 'styled-components';
import { RiEditLine, RiDeleteBinLine, RiEyeLine } from 'react-icons/ri';
import AddButton from '../../common/AddButton';
import AddItemModal from '../../modals/AddItemModal';
import EditModal from '../../modals/EditModal';
import DeleteModal from '../../modals/DeleteModal';

const OperatorsTable = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = [
    { header: 'Operator ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Role', accessor: 'role' },
    { header: 'Department', accessor: 'department' },
    { header: 'Status', accessor: 'status',
      render: (row) => <StatusBadge status={row.status}>{row.status}</StatusBadge>
    },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (row) => (
        <ActionButtons>
          <ActionButton onClick={() => navigate(`/operators/${row.id}`)} title="View Details">
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
      id: 'OPR-001',
      name: 'John Doe',
      role: 'Senior Technician',
      department: 'Maintenance',
      status: 'Active'
    },
    // Add more sample data as needed
  ];

  const fields = [
    { name: 'name', label: 'Name', required: true },
    { name: 'role', label: 'Role', required: true },
    { name: 'department', label: 'Department', required: true },
  ];

  const handleAdd = (formData) => {
    console.log('Adding:', formData);
    setIsAddModalOpen(false);
  };

  const handleEditClick = (row) => {
    setSelectedItem(row);
    setIsEditModalOpen(true);
  };

  const handleEdit = (formData) => {
    console.log('Editing:', formData);
    setIsEditModalOpen(false);
  };

  const handleDeleteClick = (row) => {
    setSelectedItem(row);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    console.log('Deleting:', selectedItem);
    setIsDeleteModalOpen(false);
  };

  return (
    <TableContainer>
      <Table 
        columns={columns} 
        data={data}
      />
      
      <TableFooter>
        <AddButton 
          onClick={() => setIsAddModalOpen(true)} 
          label="Add Operator"
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
        itemName={selectedItem?.name}
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

const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  margin-top: 1rem;
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

export default OperatorsTable;