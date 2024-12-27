import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../common/Table';
import styled from 'styled-components';
import { RiEditLine, RiDeleteBinLine, RiEyeLine } from 'react-icons/ri';
import AddButton from '../../common/AddButton';
import AddItemModal from '../../modals/AddItemModal';
import EditModal from '../../modals/EditModal';
import DeleteModal from '../../modals/DeleteModal';
import { BASE_URL } from '../../../config';
const UsersTable = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/operateurs/`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add operator
  const handleAdd = async (formData) => {
    try {
      const response = await fetch('http://localhost:8000/api/operateurs/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to add operator');
      fetchData();
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding operator:', error);
    }
  };
  
  const handleEdit = async (formData) => {
    try {
      const response = await fetch(`http://localhost:8000/api/operateurs/${formData.id_utilisateur}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to edit operator');
      console.log('Item edited successfully');
      fetchData(); // Recharge les données après modification
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error editing operator:', error);
    }
  };
  

  const handleDelete = async () => {
    console.log('Delete action triggered for:', selectedItem); 
    try {
      const response = await fetch(`http://localhost:8000/api/operateurs/${selectedItem.id_utilisateur}/`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete operator');
      console.log('Item deleted successfully');
      fetchData(); 
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting operator:', error); 
    }
  };
  
  
  

  const handleEditClick = (row) => {
    setSelectedItem(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row) => {
    console.log('Selected item for deletion:', row); 
    setSelectedItem(row);
    setIsDeleteModalOpen(true);
  };
  

  const columns = [
    { header: 'First Name', accessor: 'nom' },
    { header: 'Last Name', accessor: 'prenom' },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'telephone' },
    { header: 'Role', accessor: 'role' },
    { header: 'Telegram ID', accessor: 'id_telegram' },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (row) => (
        <ActionButtons>
          <ActionButton onClick={() => navigate(`/operators/${row.id_utilisateur}`)} title="View Details">
  <RiEyeLine />
</ActionButton>

          <ActionButton onClick={() => handleEditClick(row)} title="Edit">
            <RiEditLine />
          </ActionButton>
          <ActionButton onClick={() => handleDeleteClick(row)} title="Delete">
  <RiDeleteBinLine />
</ActionButton>

        </ActionButtons>
      ),
    },
  ];

  const fields = [
    { name: 'nom', label: 'First Name', required: true },
    { name: 'prenom', label: 'Last Name', required: true },
    { name: 'email', label: 'Email', required: true },
    { name: 'telephone', label: 'Phone' },
    { name: 'role', label: 'Role', required: true },
    { name: 'mot_de_passe', label: 'Password', required: true }, 
    { name: 'id_telegram', label: 'Telegram ID' },
  ];
  
  return (
    <TableContainer>
      <Table columns={columns} data={data} />

      <TableFooter>
        <AddButton onClick={() => setIsAddModalOpen(true)} label="Add Operator" />
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
  fields={fields.filter(field => field.name !== 'mot_de_passe')} 
  initialData={selectedItem}
/>


<DeleteModal
  isOpen={isDeleteModalOpen}
  onClose={() => setIsDeleteModalOpen(false)}
  onConfirm={handleDelete} 
  itemName={`${selectedItem?.nom} ${selectedItem?.prenom}`}
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

export default UsersTable;
