import React from 'react';
import { FaTemperatureHigh, FaTint } from 'react-icons/fa';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { StatsWrapper, Header, ButtonGroup, Button, StatsContainer, StatItem, Icon, StatLabel, StatDetails, StatValue } from '../../styles/components/MaxMinAvgStyles';

const MaxMinAvgDisplay = ({ type, stats, onChangeType }) => {
  return (
    <StatsWrapper>
      <Header>Statistics for the Last 7 Days</Header>
      
      <ButtonGroup>
        <Button onClick={() => onChangeType('both')} isActive={type === 'both'}>
          Both
        </Button>
        <Button onClick={() => onChangeType('temperature')} isActive={type === 'temperature'}>
          Temperature
        </Button>
        <Button onClick={() => onChangeType('humidity')} isActive={type === 'humidity'}>
          Humidity
        </Button>
      </ButtonGroup>
      
      <StatsContainer>
        {(type === 'temperature' || type === 'both') && (
          <StatItem>
            <Icon type="temperature">
              <FaTemperatureHigh />
            </Icon>
            <div>
              <StatLabel>Temperature</StatLabel>
              <StatDetails>
                <span>Avg : {stats.temperature.avg}°C</span> | 
                <StatValue isMax={false}>
                  <BsArrowUp className="inline" /> Max : {stats.temperature.max}°C
                </StatValue> | 
                <StatValue isMax={false}>
                  <BsArrowDown className="inline" /> Min : {stats.temperature.min}°C
                </StatValue>
              </StatDetails>
            </div>
          </StatItem>
        )}
        
        {(type === 'humidity' || type === 'both') && (
          <StatItem>
            <Icon type="humidity">
              <FaTint />
            </Icon>
            <div>
              <StatLabel>Humidity</StatLabel>
              <StatDetails>
                <span>Avg : {stats.humidity.avg}%</span> | 
                <StatValue isMax={false}>
                  <BsArrowUp className="inline" /> Max : {stats.humidity.max}%
                </StatValue> | 
                <StatValue isMax={false}>
                  <BsArrowDown className="inline" /> Min : {stats.humidity.min}%
                </StatValue>
              </StatDetails>
            </div>
          </StatItem>
        )}
      </StatsContainer>
    </StatsWrapper>
  );
};

export default MaxMinAvgDisplay;
