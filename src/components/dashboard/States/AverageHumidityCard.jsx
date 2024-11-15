import React from 'react';
import StatsCard from '../../common/StatsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

const AverageHumidityCard = ({ value }) => {
  return (
    <StatsCard
      title="Average Humidity"
      value={value}
      label="Over the last 24 hours"
      icon={<FontAwesomeIcon icon={faDroplet} size="1x" />}
      iconStyle={{ backgroundColor: 'rgb(57,209,188)' }}
      unit="%"
    />
  );
};

export default AverageHumidityCard;
