import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

const AddItemModal = ({ isOpen, onClose, onSubmit, fields }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const footer = (
    <>
      <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
      <SubmitButton onClick={handleSubmit}>Add</SubmitButton>
    </>
  );

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Add New Item"
      customFooter={footer}
    >
      <Form>
        {fields.map((field) => (
          <FormGroup key={field.name}>
            <Label>{field.label}</Label>
            <Input
              type={field.type || 'text'}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
            />
          </FormGroup>
        ))}
      </Form>
    </Modal>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #8d72e1;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
`;

const CancelButton = styled(Button)`
  background: white;
  border: 1px solid #e2e8f0;
  color: #6c757d;

  &:hover {
    background: #f8f9fa;
  }
`;

const SubmitButton = styled(Button)`
  background: #8d72e1;
  border: none;
  color: white;

  &:hover {
    background: #7c64c5;
  }
`;

export default AddItemModal; 