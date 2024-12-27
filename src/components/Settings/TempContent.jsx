import React, { useEffect } from "react";
import { TempContainer, InputRow, Label, SaveButton, InputLine, LabelTitle } from '../../styles/components/TempContentStyles';
import { useState } from "react";
import { NumberInputDefault } from "./NumberInputDefault";
import { BASE_URL } from '../../config';
const TempContent = () => {
  const [minValue1, setMinValue1] = useState(0);
  const [maxValue1, setMaxValue1] = useState(100);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(100);
  const [minValue3, setMinValue3] = useState(0);
  const [maxValue3, setMaxValue3] = useState(100);

  // Load existing thresholds
  useEffect(() => {
    const fetchThresholds = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/temperature-thresholds/`);
        const thresholds = await response.json();
        
        thresholds.forEach(threshold => {
          if (threshold.label === "Normal Temperature Range") {
            setMinValue1(threshold.min_value);
            setMaxValue1(threshold.max_value);
          } else if (threshold.label === "Critical Temperature Range 1") {
            setMinValue2(threshold.min_value);
            setMaxValue2(threshold.max_value);
          } else if (threshold.label === "Critical Temperature Range 2") {
            setMinValue3(threshold.min_value);
            setMaxValue3(threshold.max_value);
          }
        });
      } catch (error) {
        console.error('Error fetching thresholds:', error);
      }
    };

    fetchThresholds();
  }, []);

  const handleSave = async () => {
    const thresholds = [
      {
        label: "Normal Temperature Range",
        min_value: minValue1,
        max_value: maxValue1
      },
      {
        label: "Critical Temperature Range 1",
        min_value: minValue2,
        max_value: maxValue2
      },
      {
        label: "Critical Temperature Range 2",
        min_value: minValue3,
        max_value: maxValue3
      }
    ];

    try {
      const response = await fetch(`${BASE_URL}/api/temperature-thresholds/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(thresholds)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Temperature thresholds saved successfully!');
    } catch (error) {
      console.error('Error saving thresholds:', error);
      alert('Error saving temperature thresholds');
    }
  };

  return (
    <TempContainer>
      <LabelTitle>Normal Temperature Range</LabelTitle>
      <InputLine>
        <InputRow>
          <Label>Min</Label>
          <NumberInputDefault value={minValue1} setValue={setMinValue1} />
        </InputRow>
        <InputRow>
          <Label>Max</Label>
          <NumberInputDefault value={maxValue1} setValue={setMaxValue1} />
        </InputRow>
      </InputLine>

      <LabelTitle>Critical Temperature Range 1</LabelTitle>
      <InputLine>
        <InputRow>
          <Label>Min</Label>
          <NumberInputDefault value={minValue2} setValue={setMinValue2} />
        </InputRow>
        <InputRow>
          <Label>Max</Label>
          <NumberInputDefault value={maxValue2} setValue={setMaxValue2} />
        </InputRow>
      </InputLine>

      <LabelTitle>Critical Temperature Range 2</LabelTitle>
      <InputLine>
        <InputRow>
          <Label>Min</Label>
          <NumberInputDefault value={minValue3} setValue={setMinValue3} />
        </InputRow>
        <InputRow>
          <Label>Max</Label>
          <NumberInputDefault value={maxValue3} setValue={setMaxValue3} />
        </InputRow>
      </InputLine>
      <SaveButton onClick={handleSave}>Save</SaveButton>
    </TempContainer>
  );
};

export default TempContent;