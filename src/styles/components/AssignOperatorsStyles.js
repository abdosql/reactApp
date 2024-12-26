import styled from "styled-components";

export const AssignContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputPair = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InputField = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const Dropdown = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: white;
  color: #333;
  cursor: pointer;


  &:focus {
    border-color: #6f42c1;
    outline: none;
  }

  option {
    padding: 0.5rem;
    background-color: white; /* Default background for options */
    color: rgb(77,77,77);
    padding: 0.5rem;

    /* Change hover effect */
    &:hover {
      background-color: #a020f0 !important; /* Purple background on hover */
      color: white; /* Optional: Change text color to white on hover */
    }
  }
`;

export const RoleText = styled.div`
    font-size: 14px;
    color: #555;
    margin-left: 10px;
    font-weight: bold;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
