import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  
`;

export const CardTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-weight:600;
`;

export const CardText = styled.p`
  color: #6c757d;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  width: 300px;
  padding: 5px;
  
  font-size: 1rem;
background-color: transparent;
  &::placeholder {
    color: #aaa;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
  margin-bottom: 20px;

  &:focus-within {
    border-bottom: 2px solid #6f42c1; /* Highlight color when focused */
  }
`;

export const InputIcon = styled.span`
  color: #6f42c1; /* Adjust icon color */
  margin-right: 10px; /* Space between icon and input */
  font-size: 1.2rem;
`;


export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top:10px;
  margin-left:-26px;
  margin-bottom: 28px;
  .form-check {
    display: block;
    position: relative;
    padding-left: 1.5em;
  }

  .form-switch .form-check-input {
    width: 2em;
    height: 1em;
    background-color: #dee2e6;
    border-radius: 1em;
    position: relative;
    appearance: none;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
  }

  .form-switch .form-check-input:checked {
    background-color: #6f42c1;
  }

  .form-switch .form-check-input:before {
    content: "";
    position: absolute;
    top: 0.1em;
    left: 0.1em;
    width: 0.8em;
    height: 0.8em;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.15s ease-in-out;
  }

  .form-switch .form-check-input:checked:before {
    transform: translateX(1em);
  }

  .form-check-label {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #6f42c1;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #5939a6;
  }
`;


