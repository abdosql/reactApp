import React from 'react';
import styled from 'styled-components';

const Logo = () => (
  <LogoImage 
    src="/assets/logo.png" 
    alt="Logo" 
  />
);

const LogoImage = styled.img`
  width: 10rem;
  height: auto;
`;

export default Logo; 