import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

const DeleteModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  const footer = (
    <>
      <CancelButton onClick={onClose}>Cancel</CancelButton>
      <DeleteButton onClick={onConfirm}>Delete</DeleteButton>
    </>
  );

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Delete Item"
      customFooter={footer}
    >
      <Content>
        <Message>
          Are you sure you want to delete {itemName}? This action cannot be undone.
        </Message>
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  text-align: center;
`;

const Message = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
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

const DeleteButton = styled(Button)`
  background: #dc3545;
  border: none;
  color: white;

  &:hover {
    background: #c82333;
  }
`;

export default DeleteModal; 