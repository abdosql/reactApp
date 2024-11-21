import React from 'react';
import styled from 'styled-components';
import { RiAddLine } from 'react-icons/ri';

const AddButton = ({ onClick, label = 'Add New' }) => {
  return (
    <StyledButton onClick={onClick}>
      <RiAddLine />
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: #8d72e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 1rem;

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    background-color: #7c64c5;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default AddButton; 