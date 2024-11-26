import React from 'react';
import Graph from '../../common/Graph';
import StatsDisplay from '../../common/MaxMinAvgDisplay';
import ExportToCSV from '../../data/csv/ExportToCSV'; 

const calculateStats = (data) => {
  const stats = {
    temperature: { avg: 0, max: null, min: null },
    humidity: { avg: 0, max: null, min: null },
  };
  const tempValues = data.filter(d => d.type === 'temperature').map(d => d.value);
  const humValues = data.filter(d => d.type === 'humidity').map(d => d.value);

  if (tempValues.length > 0) {
    stats.temperature.avg = (tempValues.reduce((acc, val) => acc + val, 0) / tempValues.length).toFixed(2);
    stats.temperature.max = Math.max(...tempValues).toFixed(2);
    stats.temperature.min = Math.min(...tempValues).toFixed(2);
  }
  if (humValues.length > 0) {
    stats.humidity.avg = (humValues.reduce((acc, val) => acc + val, 0) / humValues.length).toFixed(2);
    stats.humidity.max = Math.max(...humValues).toFixed(2);
    stats.humidity.min = Math.min(...humValues).toFixed(2);
  }

  return stats;
};

const TempHumGraph = ({ data, dateRange, selectedType, onTypeChange }) => {
  const filteredData = selectedType === 'both' 
    ? data 
    : data.filter(d => d.type === selectedType);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', alignItems: 'center' }}>
      
      <div style={{ flex: '0.7', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        
        <div style={{
          alignSelf: 'flex-end',
          marginBottom: '1rem',
          marginRight: '30px', 
        }}>
          <ExportToCSV 
            data={data} 
            dateRange={dateRange} 
            type="all"  
          />
        </div>

        <Graph data={filteredData} type={selectedType} dateRange={dateRange} />
      </div>

      <div style={{ flex: '0.5', borderRadius: '8px' }}>
        <StatsDisplay 
          type={selectedType} 
          stats={calculateStats(data)} 
          onChangeType={onTypeChange} 
        />
      </div>
    </div>
  );
};

export default TempHumGraph;
