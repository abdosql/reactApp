import React from 'react';
import AuthLogo from './AuthLogo';
import FormCard from './FormCard';
import ImageView from './ImageView';
import { AuthWrapper, AuthLeft, AuthRight, BigCircle, SmallCircle, AuthUp } from '../../styles/components/AuthContainerStyles';

const AuthContainer = () => {
  return (
    <AuthWrapper>
        <BigCircle/>
        <SmallCircle/>
    <AuthUp>
      <AuthLeft>
        <AuthLogo />
        <FormCard />
      </AuthLeft>
      <AuthRight>
        <ImageView />
      </AuthRight>
    </AuthUp>
    </AuthWrapper>
  );
};

export default AuthContainer;
