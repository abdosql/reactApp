import React from 'react';
import StatsCard from '../../common/StatsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

const AverageTemperatureCard = ({ value }) => {
  return (
    <StatsCard
      title="Average Temperature"
      value={value}
      label="Over the last 24 hours"
      icon={<FontAwesomeIcon icon={faTemperatureHigh} size="1x" />}
      iconStyle={{ backgroundColor: 'rgb(255,164,51)' }}
      unit="°C"
    />
  );
};

export default AverageTemperatureCard;
