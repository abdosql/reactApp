import React from 'react';
import {
  NavbarWrapper,
  SearchBar,
  SearchInput,
  NavActions,
  NotificationIcon,
  ProfileSection,
  ProfileImage
} from '../../styles/components/NavbarStyles';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <SearchBar>
        <SearchInput placeholder="Search..." />
      </SearchBar>
      <NavActions>
        <NotificationIcon>🔔</NotificationIcon>
        <ProfileSection>
          <ProfileImage src="https://via.placeholder.com/32" alt="Profile" />
        </ProfileSection>
      </NavActions>
    </NavbarWrapper>
  );
};

export default Navbar; 