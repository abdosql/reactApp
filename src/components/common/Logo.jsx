import React from 'react';
import { LogoImage } from '../../styles/components/LogoStyles';

const Logo = React.memo(() => <LogoImage />);

Logo.displayName = 'Logo';

export default Logo; 