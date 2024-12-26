import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapTitle, MapSection, PopupTitle, PopupElement, PopupName, PopupLocation } from '../../styles/components/MapViewStyles';

const MapView = () => {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/sensor-data/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSensorData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSensorData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!sensorData) return <div>No sensor data available</div>;

  const position = [sensorData.sensor.latitude, sensorData.sensor.longitude];

  return (
    <MapSection>
      <MapTitle>Sensor Location</MapTitle>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <PopupTitle>
              <PopupName>{sensorData.sensor.name}</PopupName>
              <PopupLocation>({sensorData.sensor.latitude}, {sensorData.sensor.longitude})</PopupLocation>
            </PopupTitle>
            <PopupElement>Temperature: {sensorData.latest_reading.temperature}°C</PopupElement>
            <PopupElement>Humidity: {sensorData.latest_reading.humidity}%</PopupElement>
            <PopupElement>Last Updated: {new Date(sensorData.latest_reading.timestamp).toLocaleString()}</PopupElement>
          </Popup>
        </Marker>
      </MapContainer>
    </MapSection>
  );
};

export default MapView;