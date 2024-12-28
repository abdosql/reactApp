import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ShowPage from '../common/ShowPage';
import { BASE_URL } from '../../config.js'; 

const SensorDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();  
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/sensors-details/${id}/`);  // Update URL as necessary
        if (response.ok) {
          const data = await response.json();
          const lastReading = data.lastReading ? `${data.lastReading.temperature}°C - ${data.lastReading.humidity}%` : "N/A";
          
          setSensorData({
            "Sensor ID": data.id,
            "Sensor Label": data.name,  
            "Latitude": data.latitude,
            "Longitude": data.longitude,
            "Last Reading": lastReading,
            "Status": data.status ? 'Active' : 'Inactive',
            "Data Transmission Rate": "Every 20 minutes" 
          });
        } else {
          console.error('Failed to fetch sensor data');
        }
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchSensorData();
  }, [id]); // Run this effect when the component mounts or the sensor ID changes

  const breadcrumbItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Sensors', path: '/sensors' },
    { label: `SENS-${id}`, path: `/sensors/${id}` }
  ];

  // If sensorData is still loading, you could show a loading state
  if (!sensorData) {
    return <div>Loading...</div>;
  }

  return (
    <ShowPage
      title="Sensor Details"
      data={sensorData}
      onBack={() => navigate('/sensors')}
      breadcrumbItems={breadcrumbItems}
    />
  );
};

export default SensorDetails;
