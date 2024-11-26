import React from "react";
import { AssignContainer, InputPair, InputField, Dropdown } from '../../styles/components/AssignOperatorsStyles';
import { InputRow, Label, SaveButton, InputLine, LabelTitle } from '../../styles/components/TempContentStyles';
import {useState} from "react";
import { NumberInputDefault } from "./NumberInputDefault";

const AssignOperators = () => {
    const [value1, setValue1] = useState(4);
    const [value2, setValue2] = useState(7);
  return (
    <AssignContainer>
      <LabelTitle>Assign Operators and Configure Alerts Thresholds</LabelTitle>
      <InputLine>
        <InputRow>
            <Label>Max Alerts Number</Label>
            <NumberInputDefault value={value1} setValue={setValue1} />
        </InputRow>
        <InputRow>
            <Label>To Operator </Label>
            <Dropdown>
                        <option value="" disabled selected>Select Operator</option>
                        <option value="operator1">Operator 1</option>
                        <option value="operator2">Operator 2</option>
                        <option value="operator3">Operator 3</option>
            </Dropdown>
        </InputRow>
      </InputLine>
      <InputLine>
        <InputRow>
            <Label>Max Alerts Number</Label>
            <NumberInputDefault value={value2} setValue={setValue2} />
        </InputRow>
        <InputRow>
            <Label>To Operator </Label>
            <Dropdown>
                        <option value="" disabled selected>Select Operator</option>
                        <option value="operator1">Operator 1</option>
                        <option value="operator2">Operator 2</option>
                        <option value="operator3">Operator 3</option>
            </Dropdown>
        </InputRow>
      </InputLine>
      <SaveButton>Save</SaveButton>
    </AssignContainer>
  );
};

export default AssignOperators;
