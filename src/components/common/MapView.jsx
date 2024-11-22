import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapTitle, MapSection,PopupTitle, PopupElement,PopupName,PopupLocation } from '../../styles/components/MapViewStyles';

const MapView = ({ latitude, longitude, sensorName, sensorTemperature, sensorHumidity }) => {
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
                <PopupTitle>
                  <PopupName>{sensorName}</PopupName> 
                  <PopupLocation>({latitude},{longitude})</PopupLocation>
                </PopupTitle>
                <PopupElement></PopupElement>
              </Popup>
            </Marker>
      </MapContainer>
    </MapSection>
  );
};

export default MapView;
