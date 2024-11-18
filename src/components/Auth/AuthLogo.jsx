import React from 'react';
import { LogoWrapper, LogoText, LogoImage } from '../../styles/components/AuthLogoStyles';

const AuthLogo = () => {
  return (
  <LogoWrapper>
    <LogoImage src="/assets/NoTextlogo.png" alt="logo" />
    <LogoText>
      <h2>ClimaSync</h2>
    </LogoText>
  </LogoWrapper>

  );
};

export default AuthLogo;
