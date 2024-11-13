import React from 'react';
import { CardWrapper, CardTitle, CardValue, IconWrapper,  FirstWrapper,SecondWrapper, Label } from '../../../styles/components/StatsCardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
const AverageTemperatureCard = ({ title, value}) => {
  return (
    <CardWrapper>
  <FirstWrapper>
    <SecondWrapper>
          <CardTitle>{title}</CardTitle>
          <CardValue>{value}°C</CardValue>
    </SecondWrapper>
    <IconWrapper style={{ backgroundColor: 'rgb(255,164,51)' }}> {/* Unique color */}
          <FontAwesomeIcon icon={faTemperatureHigh} size="1x" />
    </IconWrapper>
    </FirstWrapper>   

      <Label>over the last 24 hours</Label>
    </CardWrapper>
  );
};

export default AverageTemperatureCard;
