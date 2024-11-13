import React from 'react';
import { CardWrapper, CardTitle, CardValue, IconWrapper, FirstWrapper,SecondWrapper, Label } from '../../../styles/components/StatsCardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
const HumidityCard = ({ title, value, time}) => {
  const label = time ? `Updated ${time} minutes ago` : "No update yet";
  return (
    <CardWrapper>
   
      <FirstWrapper>
        <SecondWrapper>
          <CardTitle>{title}</CardTitle>
          <CardValue>{value}</CardValue>
        </SecondWrapper>
        <IconWrapper style={{ backgroundColor: 'rgb(100,178,241)' }}> {/* Unique color */}
          <FontAwesomeIcon icon={faDroplet} size="1x" />
        </IconWrapper> 
      </FirstWrapper>     
      
      <Label>{label}</Label>
    </CardWrapper>
  );
};

export default HumidityCard;
