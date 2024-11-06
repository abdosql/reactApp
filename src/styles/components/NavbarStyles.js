import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
`;

export const SearchBar = styled.div`
  flex: 1;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #8d9eff;
    box-shadow: 0 0 0 3px rgba(141, 158, 255, 0.1);
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const NotificationIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f9fa;
    color: #8d72e1;
  }
`;

export const ProfileSection = styled.div`
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #8d9eff;
`; 