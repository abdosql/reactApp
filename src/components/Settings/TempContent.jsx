import React from "react";
import { TempContainer, InputRow, Label, SaveButton, InputLine, LabelTitle } from '../../styles/components/TempContentStyles';
import {useState} from "react";
import { NumberInputDefault } from "./NumberInputDefault";

const TempContent = () => {
  const [minValue1, setMinValue1] = useState(0);
  const [maxValue1, setMaxValue1] = useState(100);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(100);
  const [minValue3, setMinValue3] = useState(0);
  const [maxValue3, setMaxValue3] = useState(100);
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
      <SaveButton>Save</SaveButton>
    </TempContainer>
  );
};

export default TempContent;
