import React from 'react';
import Table from '../../common/Table';
import styled from 'styled-components';
import { RiEditLine, RiDeleteBinLine } from 'react-icons/ri';

const OperatorsTable = () => {
  const columns = [
    { 
      header: 'Operator', 
      accessor: 'name',
      render: (row) => (
        <OperatorCell>
          <OperatorAvatar src={row.avatar} alt={row.name} />
          <OperatorInfo>
            <OperatorName>{row.name}</OperatorName>
            <OperatorEmail>{row.email}</OperatorEmail>
          </OperatorInfo>
        </OperatorCell>
      )
    },
    { header: 'Role', accessor: 'role' },
    { header: 'Assigned Zone', accessor: 'zone' },
    { header: 'Status', accessor: 'status',
      render: (row) => <StatusBadge status={row.status}>{row.status}</StatusBadge>
    }
  ];

  const data = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: 'https://via.placeholder.com/40',
      role: 'Senior Operator',
      zone: 'Zone A',
      status: 'Active'
    },
    // Add more sample data as needed
  ];

  const actions = (row) => (
    <>
      <ActionButton onClick={() => console.log('Edit', row)}>
        <RiEditLine />
      </ActionButton>
      <ActionButton danger onClick={() => console.log('Delete', row)}>
        <RiDeleteBinLine />
      </ActionButton>
    </>
  );

  return (
    <Table 
      columns={columns} 
      data={data} 
      actions={actions}
      onRowClick={(row) => console.log('Row clicked:', row)}
    />
  );
};

const OperatorCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const OperatorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const OperatorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const OperatorName = styled.span`
  font-weight: 500;
  color: #333;
`;

const OperatorEmail = styled.span`
  font-size: 0.75rem;
  color: #6c757d;
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

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${props => props.danger ? '#dc3545' : '#8d72e1'};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export default OperatorsTable; 