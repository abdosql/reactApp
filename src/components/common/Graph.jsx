import React, { useEffect } from 'react';
import { Container as BootstrapContainer } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  Container,
  CustomTooltip,
  TooltipText,
  TooltipValue,
  NoDataMessageContainer,
  NoDataText,
  NoDataSubText,
  GradientDefinitions
} from '../../styles/components/GraphStyles';

const Graph = ({ data, type, period, dateRange }) => {
  const isSingleDaySelection = () => {
    if (!dateRange?.start || !dateRange?.end) return false;
    const start = new Date(dateRange.start);
    const end = new Date(dateRange.end);
    return start.toDateString() === end.toDateString();
  };

  const filterDataByDateRange = (data, startDate, endDate) => {
    const start = normalizeDate(startDate).getTime();
    const end = normalizeDate(endDate).getTime();
    return data.filter(d => {
      const date = normalizeDate(d.date).getTime();
      return date >= start && date <= end;
    });
  };
  
const normalizeDate = (dateString) => {
  if (!dateString) return null; 
  if (!isNaN(Date.parse(dateString))) {
    return new Date(dateString); 
  }
  const [day, month, year] = dateString.split('/');
  if (!day || !month || !year) {
    throw new Error(`Invalid date format: ${dateString}`); 
  }
  return new Date(`${year}-${month}-${day}T00:00:00Z`);
};


  const processData = () => {
    if (!dateRange) return [];
    const filteredData = filterDataByDateRange(data, dateRange.start, dateRange.end);
    if (isSingleDaySelection()) {
      return filteredData.reduce((acc, item) => {
        const timeKey = normalizeDate(item.date).getTime();
        if (!acc[timeKey]) {
          acc[timeKey] = {};
        }
        acc[timeKey][item.type] = item.value;
        return acc;
      }, {});
    }
    return filteredData.reduce((acc, item) => {
      const day = normalizeDate(item.date).toISOString().split('T')[0];
      if (!acc[day]) {
        acc[day] = {};
      }
      if (!acc[day][item.type]) {
        acc[day][item.type] = { total: 0, count: 0 };
      }
      acc[day][item.type].total += item.value;
      acc[day][item.type].count += 1;
      return acc;
    }, {});
  };
  

  const prepareChartData = () => {
    const processedData = processData();
    const chartData = [];
    if (isSingleDaySelection()) {
      Object.entries(processedData).sort(([a], [b]) => a - b).forEach(([timestamp, values]) => {
        chartData.push({
          date: parseInt(timestamp),
          temperature: values.temperature,
          humidity: values.humidity
        });
      });
    } else {
      Object.entries(processedData).sort().forEach(([date, types]) => {
        chartData.push({
          date: normalizeDate(date).getTime(),
          temperature: types.temperature
            ? types.temperature.total / types.temperature.count
            : null,
          humidity: types.humidity
            ? types.humidity.total / types.humidity.count
            : null
        });        
      });
    }
    return chartData;
  };
  

  const CustomTooltipComponent = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      try {
        const date = new Date(label);
        if (isNaN(date.getTime())) {
          throw new Error('Date invalide');
        }
  
        return (
          <CustomTooltip>
            <TooltipText>{`Date: ${date.toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}`}</TooltipText>
            {payload.map((pld, index) => (
              <TooltipValue key={index} color={pld.color}>
                {`${pld.name}: ${pld.value?.toFixed(1) || 'N/A'}`}
              </TooltipValue>
            ))}
          </CustomTooltip>
        );
      } catch (error) {
        console.error('Erreur dans CustomTooltipComponent :', error.message);
        return (
          <CustomTooltip>
            <TooltipText>Date invalide</TooltipText>
          </CustomTooltip>
        );
      }
    }
    return null;
  };
  

  const NoDataMessage = () => (
    <NoDataMessageContainer>
      <div className="text-center">
        <NoDataText>No data available for the selected period</NoDataText>
        <NoDataSubText>Please select a different period</NoDataSubText>
      </div>
    </NoDataMessageContainer>
  );

  const chartData = prepareChartData();
  const hasData = chartData.length > 0 && chartData.some(item => item.temperature !== null || item.humidity !== null);

  return (
    <Container>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              {GradientDefinitions.map(gradient => (
                <linearGradient key={gradient.id} id={gradient.id} x1="0" y1="0" x2="0" y2="1">
                  {gradient.stops.map((stop, index) => (
                    <stop key={index} offset={stop.offset} stopColor={stop.stopColor} stopOpacity={stop.stopOpacity} />
                  ))}
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
  dataKey="date"
  type="number"
  domain={['dataMin', 'dataMax']}
  scale="time"
  tickFormatter={(timestamp) => {
    try {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid timestamp');
      }
      return isSingleDaySelection()
        ? date.toISOString().split('T')[1].slice(0, 5) 
        : date.toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' }); 
    } catch (error) {
      console.error('Erreur dans XAxis tickFormatter :', error.message);
      return 'Date invalide';
    }
  }}
  label={{
    value: 'Date',
    position: 'insideBottomRight',
    offset: -10,
    style: { fontSize: 14, fontWeight: 'bold' }
  }}
/>

            <YAxis
              label={{
                value: 'Value',
                angle: -90,
                position: 'insideLeft',
                style: { fontSize: 14, fontWeight: 'bold' }
              }}
            />
            <Tooltip content={<CustomTooltipComponent />} />
            <Legend />
            {(type === 'both' || type === 'temperature') && (
              <Area
                {...{
                  type: "monotone",
                  stroke: '#E4B1F0',
                  fillOpacity: 1,
                  dot: true,
                }}
                dataKey="temperature"
                name="Temperature"
                fill="url(#colorTemp)"
              />
            )}
            {(type === 'both' || type === 'humidity') && (
              <Area
                {...{
                  type: "monotone",
                  stroke: '#4A90E2',
                  fillOpacity: 1,
                  dot: true,
                }}
                dataKey="humidity"
                name="Humidity"
                fill="url(#colorHum)"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
        {!hasData && <NoDataMessage />}
      </div>
    </Container>
  );
};

export default Graph;
