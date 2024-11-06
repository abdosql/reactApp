import React, { useState } from 'react';
import {
  NavbarWrapper,
  SearchBar,
  SearchInput,
  NavActions,
  NotificationIcon,
  ProfileSection,
  ProfileImage
} from '../../styles/components/NavbarStyles';
import NotificationDropdown from '../dropdowns/NotificationDropdown';
import ProfileDropdown from '../dropdowns/ProfileDropdown';

const Navbar = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Temperature alert in Zone A",
      timestamp: "2 minutes ago",
      read: false
    },
    {
      id: 2,
      message: "Humidity levels critical in Zone B",
      timestamp: "5 minutes ago",
      read: false
    },
    {
      id: 3,
      message: "System maintenance scheduled",
      timestamp: "1 hour ago",
      read: true
    }
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement logout logic here
  };

  return (
    <NavbarWrapper>
      <SearchBar>
        <SearchInput placeholder="Search..." />
      </SearchBar>
      <NavActions>
        <div style={{ position: 'relative' }}>
          <NotificationIcon onClick={() => {
            setIsNotifOpen(!isNotifOpen);
            setIsProfileOpen(false);
          }}>
            🔔
          </NotificationIcon>
          <NotificationDropdown 
            isOpen={isNotifOpen}
            notifications={notifications}
            onMarkAsRead={handleMarkAsRead}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <ProfileSection onClick={() => {
            setIsProfileOpen(!isProfileOpen);
            setIsNotifOpen(false);
          }}>
            <ProfileImage src="https://via.placeholder.com/32" alt="Profile" />
          </ProfileSection>
          <ProfileDropdown 
            isOpen={isProfileOpen}
            onLogout={handleLogout}
          />
        </div>
      </NavActions>
    </NavbarWrapper>
  );
};

export default Navbar; 