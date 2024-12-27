import React, { useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL } from '../../config.js'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const FormCard = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize navigate hook

  const handleSwitchChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('userRole', data.role); 
        navigate('/DashboardPage'); 
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <CardWrapper>
      <CardTitle>Welcome back</CardTitle>
      <CardText>Login to your account</CardText>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputIcon>
            <FontAwesomeIcon icon={faUser} />
          </InputIcon>
          <InputField
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputIcon>
            <FontAwesomeIcon icon={faLock} />
          </InputIcon>
          <InputField
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
