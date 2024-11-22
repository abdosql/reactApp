import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapTitle, MapSection } from '../../styles/components/MapViewStyles';

const MapView = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  return (
    <MapSection>
      <MapTitle>Sensors Locations</MapTitle>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Latitude: {latitude}, Longitude: {longitude}
              </Popup>
            </Marker>
      </MapContainer>
    </MapSection>
  );
};

export default MapView;
