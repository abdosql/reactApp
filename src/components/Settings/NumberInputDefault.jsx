import React from 'react';
import {StyledNumberInputWrapper} from '../../styles/components/NumberInputDefaultStyles';
export const NumberInputDefault = ({value, setValue}) => {
  const onMinus = () => {
    const newValue = (value || 0) - 1;
    setValue(newValue);
  };
  const onChange = event => {
    const value = event.target.value;
    setValue(value === '' ? value : +value);
  };
  const onPlus = () => {
    const newValue = (value || 0) + 1;
    setValue(newValue);
  };
  return (
    <StyledNumberInputWrapper>
      <button className="minus-btn" aria-label="Minus" onClick={onMinus}>
        −
      </button>
      <input
        type="text"
        value={value}
        onChange={onChange}
        aria-label="Number input"
      />
      <button className="plus-btn" aria-label="Plus" onClick={onPlus}>
        +
      </button>
    </StyledNumberInputWrapper>
  );
};