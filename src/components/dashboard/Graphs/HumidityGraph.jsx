import React from 'react';
import Calendar from '../../data/calendar/Calendar';
import Graph from '../../common/Graph';
import ExportToCSV from '../../data/csv/ExportToCSV'; 

const HumidityGraph = ({ data, dateRange, onDateChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', alignItems: 'center' }}>
     
      <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-start' }}>
        <Calendar onDateSelect={onDateChange} />
      </div>

     
      <div 
        style={{ flex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '55%' }}
      >
        <div style={{
          alignSelf: 'flex-end',
          marginBottom: '1rem', 
          marginRight: '30px',
        }}>
          <ExportToCSV 
            data={data} 
            dateRange={dateRange} 
            type="humidity" 
          />
        </div>

        <Graph data={data} type="humidity" dateRange={dateRange} />
      </div>
    </div>
  );
};

export default HumidityGraph;
