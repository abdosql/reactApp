import React from 'react';



const StatsCard = ({ CardComponent, title, value, time }) => {
      return <CardComponent title={title} value={value} time={time}/>;
};

export default StatsCard;
