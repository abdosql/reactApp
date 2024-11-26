import styled from "styled-components";

export const TempContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const InputLine = styled.div`
  display: flex;
  gap:90px;
  margin: 1rem 20px;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  margin-right: 1rem;
  color : rgb(62,62,62);
`;

export const LabelTitle = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-right: 1rem;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #6f42c1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width:10%;
  margin-left:80%;
  &:hover {
    background-color:  #5939a6;
  }
`;
