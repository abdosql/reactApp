import React from 'react';
import { CardWrapper, CardTitle, CardValue, IconWrapper, FirstWrapper,SecondWrapper, Label} from '../../../styles/components/StatsCardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
const TemperatureCard = ({ title, value, time }) => {
  const label = time ? `Updated ${time} minutes ago` : "No update yet";
  return (
    <CardWrapper>
       <FirstWrapper>
       <SecondWrapper>
          <CardTitle>{title}</CardTitle>
          <CardValue>{value}°C</CardValue>
        </SecondWrapper>
      <IconWrapper style={{ backgroundColor: '#ff6b6b' }}> {/* Unique background color */}
        <FontAwesomeIcon icon={faTemperatureHalf} size="1x" />
      </IconWrapper> 
      </FirstWrapper>
      <Label>{label}</Label>
    </CardWrapper>
  );
};

export default TemperatureCard;
