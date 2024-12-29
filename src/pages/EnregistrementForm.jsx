import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../config.js';
import { RiFileAddLine} from 'react-icons/ri';
const EnregistrementForm = () => {
  const [capteurs, setCapteurs] = useState([]);
  const [formData, setFormData] = useState({
    id_capteur: '',
    temperature: '',
    humidite: '',
    date_enregistrement: ''
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchCapteurs();
  }, []);

  const fetchCapteurs = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/capteurs-list/`);
      if (!response.ok) throw new Error('Failed to fetch capteurs');
      const data = await response.json();
      setCapteurs(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/add-enregistrement/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to add enregistrement');
      
      setMessage('Enregistrement added successfully!');
      setFormData({
        id_capteur: '',
        temperature: '',
        humidite: '',
        date_enregistrement: ''
      });
    } catch (error) {
      setMessage('Error adding enregistrement');
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <FormContainer>
      <Title>Add New Enregistrement</Title>
      {message && <Message>{message}</Message>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Capteur</Label>
          <Select 
            name="id_capteur" 
            value={formData.id_capteur}
            onChange={handleChange}
            required
          >
            <option value="">Select a capteur</option>
            {capteurs.map((capteur) => (
              <option key={capteur.id_capteur} value={capteur.id_capteur}>
                {capteur.nom_capteur}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Temperature</Label>
          <Input
            type="number"
            step="0.01"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Humidity</Label>
          <Input
            type="number"
            step="0.01"
            name="humidite"
            value={formData.humidite}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Date</Label>
          <Input
            type="datetime-local"
            name="date_enregistrement"
            value={formData.date_enregistrement}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Add Enregistrement</SubmitButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #2d3748;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #4a5568;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #4299e1;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #4299e1;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3182ce;
  }
`;

const Message = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #48bb78;
  color: white;
`;

export default EnregistrementForm;