import React from 'react';
import {
  CardWrapper,
  CardTitle,
  CardText,
  InputField,
  SwitchWrapper,
  SubmitButton,
  InputGroup,
  InputIcon,

} from '../../styles/components/FormCardStyles.js';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const FormCard = () => {
    const [isChecked, setIsChecked] = useState(true);
  
    const handleSwitchChange = () => {
      setIsChecked(prevState => !prevState); // Toggle the checked state
    };
  return (
    <CardWrapper>
      <CardTitle>Welcome back</CardTitle>
      <CardText>Login to your account</CardText>
      <form>
         <InputGroup>
          <InputIcon>
            <FontAwesomeIcon icon={faUser} />
          </InputIcon>
          <InputField type="email" placeholder="name@company.com" />
        </InputGroup>

        <InputGroup>
          <InputIcon>
            <FontAwesomeIcon icon={faLock} />
          </InputIcon>
          <InputField type="password" placeholder="Enter your password" />
        </InputGroup>
        
        <SwitchWrapper>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked={isChecked}
              onChange={handleSwitchChange}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              Remember me
            </label>
          </div>
        </SwitchWrapper>
        <SubmitButton type="submit">Login</SubmitButton>
      </form>
    </CardWrapper>
  );
};

export default FormCard;
