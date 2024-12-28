import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../common/Table';
import AddButton from '../../common/AddButton';
import styled from 'styled-components';
import { RiEditLine, RiDeleteBinLine, RiEyeLine } from 'react-icons/ri';
import AddItemModal from '../../modals/AddItemModal';
import EditModal from '../../modals/EditModal';
import DeleteModal from '../../modals/DeleteModal';
import { BASE_URL } from '../../../config.js'; 

const SensorsTable = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);

  // Fetch sensor data from the backend
  useEffect(() => {
    const fetchSensorsData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/sensors-data/`);  
        const result = await response.json();
        // Process and set the data for table
        const formattedData = result.map(sensor => ({
          id: sensor.id,
          latitude: `${sensor.latitude}`,
          longitude: `${sensor.longitude}`,
          type: 'Temperature and Humidity',  
          lastReading: `${sensor.lastReading.split(' - ')[0]}°C  ${sensor.lastReading.split(' - ')[1]}%`,
          status: 'Active'  
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchSensorsData();
  }, []);

  const columns = [
    { header: 'Sensor ID', accessor: 'id' },
    { header: 'Latitude', accessor: 'latitude' },
    { header: 'Longitude', accessor: 'longitude' },
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
          <ActionButton onClick={() => navigate(`/sensors-details/${row.id}`)} title="View Details">
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

// Move this function outside useEffect
const fetchSensorsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/sensors-data/`);  
    const result = await response.json();

    const formattedData = result.map(sensor => ({
      id: sensor.id,
      name: sensor.name,
      latitude: `${sensor.latitude}`,
      longitude: `${sensor.longitude}`,
      type: 'Temperature and Humidity',  
      lastReading: sensor.lastReading !== "N/A"
        ? `${sensor.lastReading.split(' - ')[0]}°C  ${sensor.lastReading.split(' - ')[1]}%`
        : "No Data",
      status: 'Active'
    }));
    setData(formattedData);
  } catch (error) {
    console.error('Error fetching sensor data:', error);
  }
};

useEffect(() => {
  fetchSensorsData();
}, []);
  
  const handleAdd = async (formData) => {
    const payload = {
      nom_capteur: formData.id,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
    };
  
    try {
      const response = await fetch(`${BASE_URL}/api/sensors/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.error("Error details:", error);
        throw new Error("Failed to add sensor");
      }
  
      const newSensor = await response.json();
  
      // Map the new sensor data to match the table format
      const formattedSensor = {
        id: newSensor.id,
        name: payload.nom_capteur, // Add the name field
        latitude: `${newSensor.latitude}`,
        longitude: `${newSensor.longitude}`,
        type: "Temperature and Humidity",
        lastReading: "No Data",
        status: "Active",
      };
  
      // Update the data state to include the new sensor
      setData((prevData) => [...prevData, formattedSensor]);
      
      // Fetch fresh data to ensure everything is in sync
      fetchSensorsData();
      
      setIsAddModalOpen(false);
    } catch (error) {
      console.error("Error adding sensor:", error);
    }
  };
  
  

  const handleEdit = async (formData) => {
    // Prepare the payload according to your serializer format
    const payload = {
      nom_capteur: formData.name,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
    };
  
    try {
      // Use the correct endpoint from your urls.py
      const response = await fetch(`${BASE_URL}/api/sensors/${formData.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.error("Error details:", error);
        throw new Error("Failed to edit sensor");
      }
  
      // After successful edit, fetch fresh data
      await fetchSensorsData();
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error editing sensor:', error);
    }
  };
  

  const handleDelete = async () => {
    try {
      // Use the correct endpoint from your urls.py
      const response = await fetch(`${BASE_URL}/api/sensors/delete/${selectedItem.id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.error("Error details:", error);
        throw new Error("Failed to delete sensor");
      }
  
      // After successful deletion, fetch fresh data
      await fetchSensorsData();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting sensor:', error);
    }
  };
  

  const handleEditClick = (row) => {
    setSelectedItem(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row) => {
    setSelectedItem(row);
    setIsDeleteModalOpen(true);
  };

  const fields = [
    { label: 'Sensor Name', name: 'id', type: 'text' },
    { label: 'Latitude', name: 'latitude', type: 'text' },
    { label: 'Longitude', name: 'longitude', type: 'text' },
  ];

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
