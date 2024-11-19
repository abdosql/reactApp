import React from 'react';
import Calendar from '../../data/calendar/Calendar';
import Graph from '../../common/Graph';

const HumidityGraph = ({ data, dateRange, onDateChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', alignItems: 'center' }}>
     
      <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-start' }}>
        <Calendar onDateSelect={onDateChange} />
      </div>

      <div 
        style={{ flex: '2', display: 'flex', justifyContent: 'center', maxWidth: '60%' }}
      >
        <Graph data={data} type="humidity" dateRange={dateRange} />
      </div>
    </div>
  );
};

export default HumidityGraph;
