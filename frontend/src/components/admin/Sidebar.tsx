import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUsers, FiBook, FiSettings, FiHome, FiChevronLeft, FiChevronRight, FiLogOut, FiBriefcase, FiCalendar, FiMenu, FiX, FiShield } from 'react-icons/fi';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  onMobileToggle?: (isOpen: boolean) => void;
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isCollapsed: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, to, isCollapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <MenuItemContainer 
      to={to}
      $isActive={isActive}
      $isCollapsed={isCollapsed}
    >
      <IconWrapper>
        {icon}
      </IconWrapper>
      <AnimatePresence>
        {!isCollapsed && (
          <MenuLabel
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </MenuLabel>
        )}
      </AnimatePresence>
      {isActive && (
        <ActiveIndicator 
          layoutId="activeIndicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </MenuItemContainer>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar, onMobileToggle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMobileToggle = () => {
    const newState = !isMobileOpen;
    setIsMobileOpen(newState);
    if (onMobileToggle) {
      onMobileToggle(newState);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <MobileMenuButton onClick={handleMobileToggle}>
          {isMobileOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      )}
      
      <AnimatePresence>
        {(isMobile ? isMobileOpen : true) && (
          <SidebarContainer 
            $isCollapsed={isMobile ? false : isCollapsed}
            $isMobile={isMobile}
            as={motion.aside}
            initial={{ x: isMobile ? -300 : 0 }}
            animate={{ x: 0 }}
            exit={{ x: isMobile ? -300 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <LogoContainer $isCollapsed={isMobile ? false : isCollapsed}>
              {isCollapsed && !isMobile ? (
                <SmallLogo>LMS</SmallLogo>
              ) : (
                <Logo>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Learning Management System
                  </motion.span>
                </Logo>
              )}
              
              {isMobile ? (
                <CloseButton onClick={handleMobileToggle}>
                  <FiX />
                </CloseButton>
              ) : (
                <ToggleButton onClick={toggleSidebar}>
                  {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
                </ToggleButton>
              )}
            </LogoContainer>

            <MenuContainer>
              <MenuSection>
                <MenuItem 
                  icon={<FiHome />} 
                  label="Dashboard" 
                  to="/admin/dashboard" 
                  isCollapsed={isMobile ? false : isCollapsed} 
                />
                <MenuItem 
                  icon={<FiUsers />} 
                  label="User Management" 
                  to="/admin/users" 
                  isCollapsed={isMobile ? false : isCollapsed} 
                />
                <MenuItem 
                  icon={<FiShield />} 
                  label="Role Management" 
                  to="/admin/roles" 
                  isCollapsed={isMobile ? false : isCollapsed} 
                />
                <MenuItem 
                  icon={<FiBook />} 
                  label="Subjects" 
                  to="/admin/subjects" 
                  isCollapsed={isMobile ? false : isCollapsed} 
                />
                <MenuItem 
                  icon={<FiBriefcase />} 
                  label="Classes" 
                  to="/admin/classes" 
                  isCollapsed={isMobile ? false : isCollapsed} 
                />
                <MenuItem 
                  icon={<FiCalendar />} 
                  label="Timetables" 
                  to="/admin/timetables" 
                  isCollapsed={isMobile ? false : isCollapsed} 
                />
              </MenuSection>

              <AnimatePresence>
                {(!isCollapsed || isMobile) && (
                  <SectionLabel
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    System
                  </SectionLabel>
                )}
              </AnimatePresence>

              <MenuSection>
                <MenuItem 
                  icon={<FiSettings />} 
                  label="Settings" 
                  to="/admin/settings" 
                  isCollapsed={isMobile ? false : isCollapsed} 
                />
              </MenuSection>
            </MenuContainer>

            <ProfileSection $isCollapsed={isMobile ? false : isCollapsed}>
              <ProfileImage src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="Admin User" />
              <AnimatePresence>
                {(!isCollapsed || isMobile) && (
                  <ProfileInfo
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProfileName>Admin User</ProfileName>
                    <ProfileRole>Super Admin</ProfileRole>
                  </ProfileInfo>
                )}
              </AnimatePresence>
              <LogoutButton>
                <FiLogOut />
              </LogoutButton>
            </ProfileSection>
            
            {isMobile && <MobileOverlay onClick={handleMobileToggle} />}
          </SidebarContainer>
        )}
      </AnimatePresence>
      
      {/* Background Overlay for Mobile */}
      <AnimatePresence>
        {isMobile && isMobileOpen && (
          <Overlay 
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleMobileToggle}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface CollapsibleProps {
  $isCollapsed: boolean;
  $isMobile?: boolean;
}

const SidebarContainer = styled(motion.aside)<CollapsibleProps>`
  height: 100%;
  background: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.primary};
  box-shadow: ${props => props.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.theme.zIndices.modal};
  
  width: ${({ $isCollapsed, $isMobile }) => {
    if ($isMobile) return '300px';
    return $isCollapsed ? '80px' : '280px';
  }};
  transition: width ${props => props.theme.transition.normal} ease;
`;

const MobileOverlay = styled.div`
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${props => props.theme.zIndices.overlay};
`;

const MobileMenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${props => props.theme.spacing[5]};
  z-index: ${props => props.theme.zIndices.sticky};
  box-shadow: ${props => props.theme.shadows.md};
  
  &:hover {
    background: ${props => props.theme.colors.background.tertiary};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const LogoContainer = styled.div<CollapsibleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.$isCollapsed ? '0 0.5rem' : '0 1rem'};
  height: 60px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  font-size: 0.9rem;
  font-weight: ${props => props.theme.fontWeight ? props.theme.fontWeight.bold : '700'};
  color: ${props => props.theme.colors.primary[600]};
  white-space: nowrap;
`;

const SmallLogo = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary[600]};
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${props => props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.primary[600]};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  margin-left: 0.5rem;
  position: absolute;
  right: 10px;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[100]};
    color: ${props => props.theme.colors.primary[700]};
  }
`;

const CloseButton = styled(ToggleButton)`
  color: ${props => props.theme.colors.text.secondary};
  
  &:hover {
    color: ${props => props.theme.colors.accent.red};
  }
`;

const MenuContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${props => props.theme.spacing[4]} 0;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[4]};
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[1]};
`;

const SectionLabel = styled(motion.div)`
  font-size: ${props => props.theme.spacing[3]};
  font-weight: 600;
  color: ${props => props.theme.colors.text.tertiary};
  padding: 0 ${props => props.theme.spacing[4]};
  margin-top: ${props => props.theme.spacing[4]};
  margin-bottom: ${props => props.theme.spacing[2]};
`;

interface MenuItemContainerProps {
  $isActive: boolean;
  $isCollapsed: boolean;
}

const MenuItemContainer = styled(NavLink)<MenuItemContainerProps>`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing[3]} ${props => props.theme.spacing[4]};
  position: relative;
  text-decoration: none;
  color: ${props => props.$isActive 
    ? props.theme.colors.primary[600]
    : props.theme.colors.text.secondary
  };
  font-weight: ${props => props.$isActive ? '600' : '400'};
  font-size: 1rem;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
    color: ${props => props.$isActive 
      ? props.theme.colors.primary[600]
      : props.theme.colors.text.primary
    };
  }
  
  ${({ $isCollapsed }) => $isCollapsed && css`
    justify-content: center;
    padding: ${props => props.theme.spacing[3]} 0;
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  min-width: 24px;
`;

const MenuLabel = styled(motion.span)`
  margin-left: ${props => props.theme.spacing[3]};
  white-space: nowrap;
  font-size: 1rem;
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${props => props.theme.colors.primary[600]};
  border-radius: 0 ${props => props.theme.borderRadius.sm} ${props => props.theme.borderRadius.sm} 0;
`;

const ProfileSection = styled.div<CollapsibleProps>`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing[4]};
  border-top: 1px solid ${props => props.theme.colors.border};
  gap: ${props => props.theme.spacing[3]};
  
  ${({ $isCollapsed }) => $isCollapsed && css`
    justify-content: center;
    padding: ${props => props.theme.spacing[3]} 0;
  `}
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  object-fit: cover;
`;

const ProfileInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const ProfileName = styled.div`
  font-weight: 600;
  font-size: ${props => props.theme.spacing[3.5]};
  color: ${props => props.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProfileRole = styled.div`
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.tertiary};
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing[2]};
  border-radius: ${props => props.theme.borderRadius.full};
  transition: all ${props => props.theme.transition.fast};
  font-size: ${props => props.theme.spacing[4]};
  
  &:hover {
    background: ${props => props.theme.colors.background.tertiary};
    color: ${props => props.theme.colors.accent.red};
  }
`;

export default Sidebar;