import React from 'react';
import styled from 'styled-components';
import { RiCheckLine } from 'react-icons/ri';

const NotificationDropdown = ({ isOpen, notifications, onMarkAsRead }) => {
  if (!isOpen) return null;

  return (
    <DropdownWrapper>
      <DropdownHeader>
        <h3>Notifications</h3>
        <NotifCount>{notifications.filter(n => !n.read).length}</NotifCount>
      </DropdownHeader>
      <NotificationList>
        {notifications.map((notif) => (
          <NotificationItem key={notif.id} read={notif.read}>
            <NotifContent>
              <NotifText>{notif.message}</NotifText>
              <NotifTime>{notif.timestamp}</NotifTime>
            </NotifContent>
            {!notif.read && (
              <MarkReadButton onClick={() => onMarkAsRead(notif.id)}>
                <RiCheckLine />
              </MarkReadButton>
            )}
            {!notif.read && <UnreadIndicator />}
          </NotificationItem>
        ))}
      </NotificationList>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 320px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  z-index: 1000;
  border: 1px solid #e9ecef;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;

  h3 {
    color: #333;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const NotifCount = styled.span`
  background: #8d72e1;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const NotificationList = styled.div`
  max-height: 360px;
  overflow-y: auto;
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  background: ${props => props.read ? 'white' : 'rgba(141, 158, 255, 0.05)'};
  position: relative;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

const NotifContent = styled.div`
  flex: 1;
`;

const NotifText = styled.p`
  font-size: 0.875rem;
  color: #333;
  margin-bottom: 0.25rem;
`;

const NotifTime = styled.span`
  font-size: 0.75rem;
  color: #6c757d;
`;

const UnreadIndicator = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8d72e1;
`;

const MarkReadButton = styled.button`
  background: none;
  border: none;
  color: #8d9eff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: rgba(141, 158, 255, 0.1);
    color: #8d72e1;
  }
`;

export default NotificationDropdown; 