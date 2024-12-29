import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../config';

const IncidentPage = () => {
  const [incidents, setIncidents] = useState([]);
  const userRole = sessionStorage.getItem('userRole');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userRole) {
      console.error('User role is missing. Redirecting to login.');
      window.location.href = '/login';
      return;
    }
  
    fetch(`${BASE_URL}/api/incidents/active?role=${userRole}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            window.location.href = '/login';
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched incidents:', data);
        setIncidents(data);
      })
      .catch((error) => {
        console.error('Error fetching incidents:', error);
        setError('Failed to fetch incidents. Please try again later.');
      });
  }, [userRole]);
  
  const acquitIncident = (incidentId) => {
    fetch(`${BASE_URL}/api/incidents/${incidentId}/acquit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ role: userRole })
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            window.location.href = '/login';
          } else if (response.status === 403) {
            alert('You are not responsible for this incident.');
          } else if (response.status === 404) {
            alert('Incident not found or already acknowledged.');
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        alert('Incident acknowledged successfully');
        setIncidents((prev) =>
          prev.filter((incident) => incident.id_incident !== incidentId)
        );
      })
      .catch((error) => console.error('Error acknowledging incident:', error));
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>Current Incidents</Title>
        <Subtitle>Manage and track ongoing incidents</Subtitle>
      </PageHeader>

      <PageContent>
        {incidents.length > 0 ? (
          incidents.map((incident) => (
            <IncidentCard key={incident.id_incident}>
              <IncidentHeader>
                <IncidentTitle>
                  Incident ID: <strong>{incident.id_incident}</strong>
                </IncidentTitle>
                <SeverityBadge severity={incident.type_incident}>
                  {incident.type_incident}
                </SeverityBadge>
              </IncidentHeader>
              <IncidentBody>
                <CompactRow>
                  <Detail>
                    <Icon>📡</Icon>
                    <Label>Sensor:</Label>
                    <Value>{incident.sensor}</Value>
                  </Detail>
                  <Detail>
                    <Icon>🌡️</Icon>
                    <Label>Temperature:</Label>
                    <Value>{incident.temperature_detectee}°C</Value>
                  </Detail>
                  <Detail>
                    <Icon>🕒</Icon>
                    <Label>Start Time:</Label>
                    <Value>
                      {isNaN(Date.parse(incident.debut_incident)) ? 'Invalid Date' : new Date(incident.debut_incident).toLocaleString()}
                    </Value>
                  </Detail>
                  {!incident.is_responsible && (
  <Detail>
    <Icon>🔔</Icon>
    <Label>Alert Sent To:</Label>
    <Value>{incident.responsable_full_name}</Value>
  </Detail>
)}



                </CompactRow>
              </IncidentBody>
              <IncidentFooter>
                {incident.is_responsible && (
                  <ActionContainer>
                    <ActionMessage>
                      <Icon>📢</Icon> Please acknowledge and take control of this incident  .     
                    </ActionMessage>
                    <AcquitButton onClick={() => acquitIncident(incident.id_incident)}>
                      <AcquitIcon>✔</AcquitIcon>
                    </AcquitButton>
                  </ActionContainer>
                )}
              </IncidentFooter>
            </IncidentCard>
          ))
        ) : (
          <NoDataText>No active incidents found.</NoDataText>
        )}
      </PageContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 1rem;
  min-height: 100vh;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #6c757d;
  font-size: 0.875rem;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const IncidentCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const IncidentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const IncidentTitle = styled.h3`
  color: #333;
  font-size: 1.1rem;
`;

const SeverityBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${(props) => {
    switch (props.severity.toLowerCase()) {
      case 'critical':
        return 'rgba(255, 165, 0, 0.2)';
      case 'severe':
        return 'rgba(220, 53, 69, 0.2)';
      default:
        return 'rgba(108, 117, 125, 0.1)';
    }
  }};
  color: ${(props) => {
    switch (props.severity.toLowerCase()) {
      case 'critical':
        return '#ffa500';
      case 'severe':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  }};
`;

const IncidentBody = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const CompactRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 1rem;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Icon = styled.span`
  font-size: 1.3rem;
`;

const Label = styled.span`
  color: #555;
  font-weight: bold;
`;

const Value = styled.span`
  color: #333;
`;

const IncidentFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  width: 100%; /* Ajuste selon les besoins */
  text-align: center; /* Optionnel pour le texte */
`;


const ActionMessage = styled.p`
  color: #007bff;
  font-size: 1,5rem;
  margin: 0;
  display: flex;
  align-items: center;
`;

const AcquitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid #28a745;
  color: #28a745;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #28a745;
    color: white;
  }
`;

const AcquitIcon = styled.span`
  font-size: 1.5rem;
`;

const NoDataText = styled.p`
  text-align: center;
  color: #6c757d;
  font-size: 1rem;
`;

export default IncidentPage;
