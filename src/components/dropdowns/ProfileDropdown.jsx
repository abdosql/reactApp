import React from 'react';
import styled from 'styled-components';
import { RiLogoutBoxLine, RiUserLine, RiSettings4Line } from 'react-icons/ri';

const ProfileDropdown = ({ isOpen, onLogout }) => {
  if (!isOpen) return null;

  return (
    <DropdownWrapper>
      <UserInfo>
        <UserAvatar src="https://via.placeholder.com/32" alt="Profile" />
        <UserDetails>
          <UserName>John Doe</UserName>
          <UserEmail>john@example.com</UserEmail>
        </UserDetails>
      </UserInfo>
      <DropdownDivider />
      <DropdownMenu>
        <MenuItem>
          <RiUserLine />
          Profile
        </MenuItem>
        <MenuItem>
          <RiSettings4Line />
          Settings
        </MenuItem>
        <DropdownDivider />
        <MenuItem onClick={onLogout} danger>
          <RiLogoutBoxLine />
          Logout
        </MenuItem>
      </DropdownMenu>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 240px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  z-index: 1000;
  border: 1px solid #e9ecef;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #8d9eff;
`;

const UserDetails = styled.div`
  flex: 1;
`;

const UserName = styled.h4`
  font-size: 0.875rem;
  color: #333;
  margin: 0;
`;

const UserEmail = styled.p`
  font-size: 0.75rem;
  color: #6c757d;
  margin: 0;
`;

const DropdownMenu = styled.div`
  padding: 0.5rem;
`;

const MenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  color: ${props => props.danger ? '#dc3545' : '#333'};
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;

  svg {
    font-size: 1.25rem;
    color: ${props => props.danger ? '#dc3545' : '#8d72e1'};
  }

  &:hover {
    background: ${props => props.danger ? 'rgba(220, 53, 69, 0.1)' : 'rgba(141, 158, 255, 0.1)'};
  }
`;

const DropdownDivider = styled.div`
  height: 1px;
  background: #e9ecef;
  margin: 0.5rem 0;
`;

export default ProfileDropdown; 