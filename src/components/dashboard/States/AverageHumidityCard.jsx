import React from 'react';
import { CardWrapper, CardTitle, CardValue, IconWrapper,FirstWrapper,SecondWrapper, Label } from '../../../styles/components/StatsCardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
const AverageHumidityCard = ({ title, value}) => {
  return (
    <CardWrapper>
<FirstWrapper>
      <SecondWrapper>
          <CardTitle>{title}</CardTitle>
          <CardValue>{value}</CardValue>
          
        </SecondWrapper>
      <IconWrapper style={{ backgroundColor: 'rgb(57,209,188)' }}> {/* Unique color */}
        <FontAwesomeIcon icon={faDroplet} size="1x" />
      </IconWrapper>
      
      </FirstWrapper>
      <Label>over the last 24 hours</Label>
    </CardWrapper>
  );
};

export default AverageHumidityCard;
