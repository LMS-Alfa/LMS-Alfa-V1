import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUsers, FiBook, FiBriefcase, FiCalendar, FiTrendingUp, FiActivity, FiAward, FiPieChart, FiRefreshCw, FiClock, FiDownload } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  // State for time period selector
  const [timePeriod, setTimePeriod] = useState<'today' | 'week' | 'month'>('week');
  // State for refresh animation
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Sample data - this would come from an API in a real application
  const stats = [
    { id: 1, title: 'Total Users', value: 356, change: '+12%', icon: <FiUsers />, color: 'primary' },
    { id: 2, title: 'Active Classes', value: 24, change: '+5%', icon: <FiBriefcase />, color: 'green' },
    { id: 3, title: 'Subjects', value: 48, change: '+3%', icon: <FiBook />, color: 'yellow' },
    { id: 4, title: 'Upcoming Events', value: 12, change: '+7%', icon: <FiCalendar />, color: 'purple' },
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'created a new class', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'added 5 new students', time: '3 hours ago' },
    { id: 3, user: 'Robert Johnson', action: 'updated Biology curriculum', time: '5 hours ago' },
    { id: 4, user: 'Emily Davis', action: 'scheduled a new event', time: '1 day ago' },
    { id: 5, user: 'Michael Wilson', action: 'created a new assessment', time: '1 day ago' },
  ];

  // Sample performance data
  const performanceData = [
    { subject: 'Mathematics', completion: 78 },
    { subject: 'Science', completion: 92 },
    { subject: 'Language', completion: 64 },
    { subject: 'History', completion: 85 },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate data refresh with a timeout
    setTimeout(() => {
      setIsRefreshing(false);
      // Here you would typically fetch new data
    }, 1000);
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <div>
          <PageTitle>Dashboard</PageTitle>
          <WelcomeMessage>Welcome back, Admin User!</WelcomeMessage>
        </div>

        <HeaderControls>
          <TimePeriodSelector>
            <TimePeriodButton 
              $isActive={timePeriod === 'today'} 
              onClick={() => setTimePeriod('today')}
            >
              Today
            </TimePeriodButton>
            <TimePeriodButton 
              $isActive={timePeriod === 'week'} 
              onClick={() => setTimePeriod('week')}
            >
              This Week
            </TimePeriodButton>
            <TimePeriodButton 
              $isActive={timePeriod === 'month'} 
              onClick={() => setTimePeriod('month')}
            >
              This Month
            </TimePeriodButton>
          </TimePeriodSelector>

          <RefreshButton onClick={handleRefresh} disabled={isRefreshing}>
            <AnimatePresence mode="wait">
              {isRefreshing ? (
                <motion.div
                  key="refreshing"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  exit={{ rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <FiRefreshCw />
                </motion.div>
              ) : (
                <motion.div key="refresh">
                  <FiRefreshCw />
                </motion.div>
              )}
            </AnimatePresence>
            <span>Refresh</span>
          </RefreshButton>
        </HeaderControls>
      </DashboardHeader>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard 
            key={stat.id}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            $color={stat.color as ColorType}
          >
            <StatIconWrapper $color={stat.color as ColorType}>
              {stat.icon}
            </StatIconWrapper>
            <StatInfo>
              <StatValue>{stat.value}</StatValue>
              <StatTitle>{stat.title}</StatTitle>
              <StatChange $isPositive={stat.change.startsWith('+')}>
                {stat.change} <FiTrendingUp />
              </StatChange>
            </StatInfo>
          </StatCard>
        ))}
      </StatsGrid>

      <DashboardGrid>
        {/* Recent Activities */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <SectionHeader>
            <SectionTitle>Recent Activities</SectionTitle>
            <ViewAllButton>View All <FiClock /></ViewAllButton>
          </SectionHeader>
          <ActivitiesCard>
            {recentActivities.map((activity, index) => (
              <ActivityItem 
                key={activity.id}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <ActivityDot />
                <ActivityContent>
                  <strong>{activity.user}</strong> {activity.action}
                  <ActivityTime>{activity.time}</ActivityTime>
                </ActivityContent>
              </ActivityItem>
            ))}
          </ActivitiesCard>
        </GridItem>

        {/* Performance Overview */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <SectionHeader>
            <SectionTitle>Course Performance</SectionTitle>
            <ViewAllButton>Details <FiPieChart /></ViewAllButton>
          </SectionHeader>
          <PerformanceCard>
            {performanceData.map((item, index) => (
              <PerformanceItem key={index}>
                <PerformanceLabel>{item.subject}</PerformanceLabel>
                <PerformanceBar>
                  <PerformanceProgress $percentage={item.completion} />
                </PerformanceBar>
                <PerformanceValue>{item.completion}%</PerformanceValue>
              </PerformanceItem>
            ))}
          </PerformanceCard>
        </GridItem>
      </DashboardGrid>

      <DashboardGrid>
        {/* Quick Actions */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <SectionHeader>
            <SectionTitle>Quick Actions</SectionTitle>
          </SectionHeader>
          <QuickActionsCard>
            <ActionButton $color="primary">
              <IconWrapper $color="primary">
                <UserIcon />
              </IconWrapper>
              <span>Add New User</span>
            </ActionButton>
            <ActionButton $color="green">
              <IconWrapper $color="green">
                <ClassIcon />
              </IconWrapper>
              <span>Create Class</span>
            </ActionButton>
            <ActionButton $color="yellow">
              <IconWrapper $color="yellow">
                <SubjectIcon />
              </IconWrapper>
              <span>Add Subject</span>
            </ActionButton>
            <ActionButton $color="purple">
              <IconWrapper $color="purple">
                <EventIcon />
              </IconWrapper>
              <span>Schedule Event</span>
            </ActionButton>
          </QuickActionsCard>
        </GridItem>

        {/* System Status */}
        <GridItem
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <SectionHeader>
            <SectionTitle>System Status</SectionTitle>
            <LastUpdatedText>Last updated: 5 min ago</LastUpdatedText>
          </SectionHeader>
          <StatusCard>
            <StatusItem>
              <StatusLabel>System Version</StatusLabel>
              <StatusValue>v1.0.0</StatusValue>
            </StatusItem>
            <StatusItem>
              <StatusLabel>Last Backup</StatusLabel>
              <StatusValue>Today at 03:00 AM</StatusValue>
            </StatusItem>
            <StatusItem>
              <StatusLabel>Storage Used</StatusLabel>
              <StatusProgressWrapper>
                <StatusProgress $percentage={65} />
              </StatusProgressWrapper>
              <StatusValue>65% of 10GB</StatusValue>
            </StatusItem>
            <StatusItem>
              <StatusLabel>Server Status</StatusLabel>
              <StatusBadge>
                <StatusDot $active={true} />
                <span>Operational</span>
              </StatusBadge>
            </StatusItem>
            <DownloadReportButton>
              <DownloadIcon />
              <span>Download System Report</span>
            </DownloadReportButton>
          </StatusCard>
        </GridItem>
      </DashboardGrid>
    </DashboardContainer>
  );
};

type ColorType = 'primary' | 'green' | 'yellow' | 'purple';

const getColorValue = (color: ColorType, theme: any) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary[600];
    case 'green':
      return theme.colors.accent.green;
    case 'yellow':
      return theme.colors.accent.yellow;
    case 'purple':
      return theme.colors.accent.purple;
    default:
      return theme.colors.primary[600];
  }
};

const getColorLight = (color: ColorType, theme: any) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary[100];
    case 'green':
      return 'rgba(16, 185, 129, 0.1)';
    case 'yellow':
      return 'rgba(245, 158, 11, 0.1)';
    case 'purple':
      return 'rgba(139, 92, 246, 0.1)';
    default:
      return theme.colors.primary[100];
  }
};

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[6]};
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[4]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${props => props.theme.spacing[4]};
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  margin-bottom: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.8rem;
`;

const WelcomeMessage = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1rem;
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[4]};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const TimePeriodSelector = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.md};
  overflow: hidden;
`;

interface ActiveButtonProps {
  $isActive: boolean;
}

const TimePeriodButton = styled.button<ActiveButtonProps>`
  background-color: ${props => props.$isActive ? props.theme.colors.primary[600] : 'transparent'};
  color: ${props => props.$isActive ? '#fff' : props.theme.colors.text.secondary};
  border: none;
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[3]}`};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.$isActive ? props.theme.colors.primary[700] : props.theme.colors.background.secondary};
  }
`;

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  background-color: transparent;
  color: ${props => props.theme.colors.text.secondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[3]}`};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

interface ColorProps {
  $color: ColorType;
}

const StatCard = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing[5]};
  box-shadow: ${props => props.theme.shadows.md};
  border-left: 4px solid ${props => getColorValue(props.$color, props.theme)};
  transition: transform ${props => props.theme.transition.fast}, 
              box-shadow ${props => props.theme.transition.fast};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const StatIconWrapper = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => getColorLight(props.$color, props.theme)};
  color: ${props => getColorValue(props.$color, props.theme)};
  font-size: 24px;
  margin-right: ${props => props.theme.spacing[4]};
`;

const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StatValue = styled.div`
  font-size: ${props => props.theme.spacing[6]};
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  line-height: 1.2;
`;

const StatTitle = styled.div`
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.secondary};
  margin-top: ${props => props.theme.spacing[1]};
`;

interface StatChangeProps {
  $isPositive: boolean;
}

const StatChange = styled.div<StatChangeProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.$isPositive ? props.theme.colors.accent.green : props.theme.colors.accent.red};
  margin-top: ${props => props.theme.spacing[1]};
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[4]};
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: ${props => props.theme.spacing[4]};
  color: ${props => props.theme.colors.text.primary};
  font-weight: 600;
`;

const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  background-color: transparent;
  color: ${props => props.theme.colors.primary[600]};
  border: none;
  font-size: ${props => props.theme.spacing[3]};
  cursor: pointer;
  transition: color ${props => props.theme.transition.fast};
  
  &:hover {
    color: ${props => props.theme.colors.primary[700]};
    text-decoration: underline;
  }
`;

const LastUpdatedText = styled.span`
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.tertiary};
`;

const ActivitiesCard = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing[5]};
  box-shadow: ${props => props.theme.shadows.md};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[4]};
`;

const ActivityItem = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing[3]};
  padding-bottom: ${props => props.theme.spacing[4]};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const ActivityDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => props.theme.colors.primary[600]};
  margin-top: 6px;
`;

const ActivityContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  strong {
    font-weight: 600;
  }
`;

const ActivityTime = styled.div`
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.tertiary};
  margin-top: ${props => props.theme.spacing[1]};
`;

const PerformanceCard = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing[4]};
  box-shadow: ${props => props.theme.shadows.md};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
`;

const PerformanceItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
  padding: ${props => props.theme.spacing[1]} 0;
`;

const PerformanceLabel = styled.div`
  width: 100px;
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.secondary};
`;

const PerformanceBar = styled.div`
  flex: 1;
  height: 8px;
  background-color: ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
`;

interface ProgressProps {
  $percentage: number;
}

const PerformanceProgress = styled.div<ProgressProps>`
  width: ${props => `${props.$percentage}%`};
  height: 100%;
  background-color: ${props => {
    if (props.$percentage >= 80) return props.theme.colors.accent.green;
    if (props.$percentage >= 60) return props.theme.colors.primary[600];
    if (props.$percentage >= 40) return props.theme.colors.accent.yellow;
    return props.theme.colors.accent.red;
  }};
  border-radius: ${props => props.theme.borderRadius.full};
`;

const PerformanceValue = styled.div`
  width: 40px;
  text-align: right;
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.secondary};
  font-weight: 600;
`;

const QuickActionsCard = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing[4]};
  box-shadow: ${props => props.theme.shadows.md};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: ${props => props.theme.spacing[3]};
  height: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const IconWrapper = styled.div<ColorProps>`
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing[1]};
  color: ${props => {
    switch (props.$color) {
      case 'primary': return '#0078D4';
      case 'green': return '#10B981';
      case 'yellow': return '#F59E0B';
      case 'purple': return '#8B5CF6';
      default: return '#0078D4';
    }
  }};
`;

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M5 20C5 16.6863 7.68629 14 11 14H13C16.3137 14 19 16.6863 19 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ClassIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M4 8H20" stroke="currentColor" strokeWidth="2" />
    <path d="M8 4L8 20" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const SubjectIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EventIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 11H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ActionButton = styled.button<ColorProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => {
    switch (props.$color) {
      case 'primary': return '#E6F4FF';
      case 'green': return '#E6F9F6';
      case 'yellow': return '#FFF8E6';
      case 'purple': return '#F3E6FF';
      default: return '#E6F4FF';
    }
  }};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing[3]};
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  height: 100%;
  
  span {
    font-size: ${props => props.theme.spacing[3]};
    font-weight: 500;
    color: ${props => props.theme.colors.text.primary};
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
  }
`;

const StatusCard = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing[4]};
  box-shadow: ${props => props.theme.shadows.md};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[3]};
  height: 100%;
`;

const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[1]} 0;
`;

const StatusLabel = styled.div`
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.secondary};
`;

const StatusValue = styled.div`
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.text.primary};
  font-weight: 500;
`;

const StatusProgressWrapper = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.full};
  margin: ${props => props.theme.spacing[2]} 0;
`;

const StatusProgress = styled.div<ProgressProps>`
  width: ${props => `${props.$percentage}%`};
  height: 100%;
  background-color: ${props => {
    if (props.$percentage < 70) return props.theme.colors.accent.green;
    if (props.$percentage < 90) return props.theme.colors.accent.yellow;
    return props.theme.colors.accent.red;
  }};
  border-radius: ${props => props.theme.borderRadius.full};
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  font-size: ${props => props.theme.spacing[3]};
  color: ${props => props.theme.colors.accent.green};
  font-weight: 500;
`;

interface StatusDotProps {
  $active: boolean;
}

const StatusDot = styled.div<StatusDotProps>`
  width: 8px;
  height: 8px;
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => props.$active ? props.theme.colors.accent.green : props.theme.colors.accent.red};
`;

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3V14M10 14L6 10M10 14L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DownloadReportButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing[2]};
  background-color: ${props => props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.text.secondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing[3]};
  margin-top: auto;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  width: 100%;
  
  svg {
    color: ${props => props.theme.colors.text.secondary};
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.primary[600]};
    
    svg {
      color: ${props => props.theme.colors.primary[600]};
    }
  }
`;

export default Dashboard; 