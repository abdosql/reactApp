import React from 'react';
import { CSVLink } from 'react-csv';
import { FaRegSave } from 'react-icons/fa'; 
import styled from 'styled-components';

const ExportToCSV = ({ data, dateRange, type, fileName = "data_export.csv" }) => {

  const filterDataByDateRange = (data, start, end) => {
    if (!start || !end) return data; 

    const startDate = new Date(start).setHours(0, 0, 0, 0);
    const endDate = new Date(end).setHours(23, 59, 59, 999);

    return data.filter((entry) => {
      const entryDate = new Date(entry.date).setHours(0, 0, 0, 0);
      return entryDate >= startDate && entryDate <= endDate;
    });
  };

  const filteredData = dateRange ? filterDataByDateRange(data, dateRange.start, dateRange.end) : data;

  if (filteredData.length === 0) {
    return <div>Aucune donnée disponible pour l'exportation.</div>;
  }

  const headers = Object.keys(filteredData[0] || {}).map((key) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    key,
  }));

  const ExportButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 9999px;
    color: white;
    background: #8d9eff; /* Couleur de base */
    border: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: #9694FF; /* Survol */
    }
  `;

  const formattedFileName = `${type || "export"}_${new Date().toISOString().split("T")[0]}.csv`;

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <CSVLink
        data={filteredData}
        headers={headers}
        filename={formattedFileName}
        style={{ textDecoration: 'none' }} 
      >
        <ExportButton>
          <FaRegSave style={{ marginRight: '8px' }} /> 
          Export to CSV
        </ExportButton>
      </CSVLink>
    </div>
  );
};

export default ExportToCSV;
