import React from 'react';
import StatsCard from '../../common/StatsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

const TemperatureCard = ({ value, time }) => {
  return (
    <StatsCard
      title="Temperature"
      value={value}
      label={`Last updated ${time} minutes ago`}
      icon={<FontAwesomeIcon icon={faTemperatureHalf} size="1x" />}
      iconStyle={{ backgroundColor: '#ff6b6b' }}
      unit="°C"
    />
  );
};

export default TemperatureCard;
