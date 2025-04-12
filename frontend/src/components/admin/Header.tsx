import React from 'react';
import styled from 'styled-components';
import { FiBell, FiSearch } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchInput placeholder="Search..." />
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
      </SearchContainer>
      
      <HeaderActions>
        <NotificationButton>
          <FiBell />
          <NotificationBadge>3</NotificationBadge>
        </NotificationButton>
        <UserAvatar>
          <AvatarText>AU</AvatarText>
        </UserAvatar>
      </HeaderActions>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  height: 60px;
  width: 100%;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background-color: #f5f5f5;
  color: #333;
  
  &::placeholder {
    color: #888;
  }
  
  &:focus {
    outline: none;
    border-color: #0078d4;
    box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NotificationButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  color: #666;
  font-size: 1.25rem;
  padding: 0.25rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e74c3c;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #2196f3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const AvatarText = styled.span`
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
`;

export default Header; 