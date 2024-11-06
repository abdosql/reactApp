import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>
        <LogoText>App Logo</LogoText>
      </Logo>
      <NavItems>
      </NavItems>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.aside`
  width: 260px;
  background-color: #8d72e1;
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Logo = styled.div`
  padding: 1rem 0;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

const NavItems = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default Sidebar; 