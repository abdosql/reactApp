// src/components/common/StatsCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  CardTitle,
  CardValue,
  IconWrapper,
  FirstWrapper,
  SecondWrapper,
  Label,
} from '../../styles/components/StatsCardStyles';

const StatsCard = ({ title, value, icon, iconStyle, label, backgroundColor, unit }) => {
  return (
    <CardWrapper style={{ backgroundColor }}>
      <FirstWrapper>
        <SecondWrapper>
          <CardTitle>{title}</CardTitle>
          <CardValue>
            {value}
            {unit && <span>{unit}</span>}
          </CardValue>
        </SecondWrapper>
        <IconWrapper style={iconStyle}>{icon}</IconWrapper>
      </FirstWrapper>
      {label && <Label>{label}</Label>}
    </CardWrapper>
  );
};
export default StatsCard;
