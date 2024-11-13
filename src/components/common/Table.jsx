import React from 'react';
import styled from 'styled-components';

const Table = ({ 
  columns, 
  data, 
  onRowClick,
  actions,
  isLoading = false 
}) => {
  if (isLoading) {
    return <TableWrapper>Loading...</TableWrapper>;
  }

  return (
    <TableWrapper>
      <TableElement>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <TableHeader key={index}>{column.header}</TableHeader>
            ))}
            {actions && <TableHeader>Actions</TableHeader>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow 
              key={rowIndex} 
              onClick={() => onRowClick && onRowClick(row)}
              clickable={!!onRowClick}
            >
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>
                  {column.render ? column.render(row) : row[column.accessor]}
                </TableCell>
              ))}
              {actions && (
                <TableCell>
                  <ActionsContainer>
                    {actions(row)}
                  </ActionsContainer>
                </TableCell>
              )}
            </TableRow>
          ))}
        </tbody>
      </TableElement>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background: #f8f9fa;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #495057;
  font-size: 0.875rem;
  border-bottom: 2px solid #e9ecef;
`;

const TableRow = styled.tr`
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.clickable ? 'rgba(141, 158, 255, 0.05)' : 'transparent'};
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  color: #495057;
  font-size: 0.875rem;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

export default Table; 