import React from 'react';
import StatsCard from '../../common/StatsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

const HumidityCard = ({ value, time }) => {
  return (
    <StatsCard
      title="Humidity"
      value={value}
      label={`Last updated ${time} minutes ago`}
      icon={<FontAwesomeIcon icon={faDroplet} size="1x" />}
      iconStyle={{ backgroundColor: 'rgb(100,178,241)' }}
      unit="%"
    />
  );
};

export default HumidityCard;
