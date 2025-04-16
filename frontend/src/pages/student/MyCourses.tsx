import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBook, FiCalendar,  FiSearch, FiUser } from 'react-icons/fi';
import Card from '../../components/common/Card';

const MyCourses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock data - would normally come from API
  const courses = [
    { 
      id: 1, 
      name: 'Mathematics', 
      teacher: 'Dr. Smith', 
      progress: 75, 
      nextClass: 'Tomorrow, 9:00 AM',
      description: 'Advanced algebra and calculus concepts for college preparation.',
      startDate: '2023-01-15',
      endDate: '2023-06-30',
      creditHours: 4,
      materials: 12,
      assignments: 8,
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Physics', 
      teacher: 'Prof. Johnson', 
      progress: 60, 
      nextClass: 'Thursday, 11:30 AM',
      description: 'Mechanics, thermodynamics, and introduction to electromagnetism.',
      startDate: '2023-01-15',
      endDate: '2023-06-30',
      creditHours: 4,
      materials: 15,
      assignments: 10,
      status: 'active'
    },
    { 
      id: 3, 
      name: 'English Literature', 
      teacher: 'Mrs. Davis', 
      progress: 100, 
      nextClass: 'Completed',
      description: 'Analysis of classic and contemporary literary works with focus on critical thinking.',
      startDate: '2022-09-01',
      endDate: '2022-12-15',
      creditHours: 3,
      materials: 20,
      assignments: 6,
      status: 'completed'
    },
    { 
      id: 4, 
      name: 'Chemistry', 
      teacher: 'Dr. Wilson', 
      progress: 50, 
      nextClass: 'Friday, 10:15 AM',
      description: 'Fundamental principles of chemistry including atomic structure and chemical bonding.',
      startDate: '2023-01-15',
      endDate: '2023-06-30',
      creditHours: 4,
      materials: 18,
      assignments: 9,
      status: 'active'
    },
    { 
      id: 5, 
      name: 'World History', 
      teacher: 'Prof. Anderson', 
      progress: 100, 
      nextClass: 'Completed',
      description: 'Survey of major historical events and civilizations from ancient times to present day.',
      startDate: '2022-09-01',
      endDate: '2022-12-15',
      creditHours: 3,
      materials: 22,
      assignments: 7,
      status: 'completed'
    },
    { 
      id: 6, 
      name: 'Computer Science', 
      teacher: 'Dr. Roberts', 
      progress: 0, 
      nextClass: 'Starts July 15',
      description: 'Introduction to programming concepts, algorithms, and data structures.',
      startDate: '2023-07-15',
      endDate: '2023-12-20',
      creditHours: 4,
      materials: 16,
      assignments: 12,
      status: 'upcoming'
    },
    { 
      id: 7, 
      name: 'Introduction to Psychology', 
      teacher: 'Dr. Martinez', 
      progress: 0, 
      nextClass: 'Starts July 10',
      description: 'Exploration of human behavior, cognitive processes, and psychological theories.',
      startDate: '2023-07-10',
      endDate: '2023-12-18',
      creditHours: 3,
      materials: 14,
      assignments: 8,
      status: 'upcoming'
    }
  ];

  // Filter courses based on active tab and search term
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'all') {
      return matchesSearch;
    } else {
      return matchesSearch && course.status === activeTab;
    }
  });

  return (
    <CoursesContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>My Courses</PageTitle>
          <PageDescription>View and manage your enrolled courses</PageDescription>
        </HeaderContent>
      </PageHeader>

      <FilterSection>
        <SearchBar>
          <SearchIcon>
            <FiSearch size={18} />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search courses..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
        
        <TabsContainer>
          <TabButton 
            $isActive={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            All Courses
          </TabButton>
          <TabButton 
            $isActive={activeTab === 'active'} 
            onClick={() => setActiveTab('active')}
          >
            Active
          </TabButton>
          <TabButton 
            $isActive={activeTab === 'completed'} 
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </TabButton>
          <TabButton 
            $isActive={activeTab === 'upcoming'} 
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </TabButton>
        </TabsContainer>
      </FilterSection>

      <CourseGrid>
        {filteredCourses.map(course => (
          <CourseCard key={course.id} as={motion.div} whileHover={{ y: -5 }}>
            <CourseHeader $progress={course.progress}>
              <CourseProgress>
                <ProgressText>{course.progress}% Complete</ProgressText>
                <ProgressBar>
                  <ProgressFill $progress={course.progress} />
                </ProgressBar>
              </CourseProgress>
            </CourseHeader>
            <CourseBody>
              <CourseIcon>
                <FiBook size={24} />
              </CourseIcon>
              <CourseInfo>
                <CourseName>{course.name}</CourseName>
                <CourseTeacher>
                  <FiUser size={14} />
                  <span>{course.teacher}</span>
                </CourseTeacher>
                <CourseDescription>{course.description}</CourseDescription>
                <CourseDetails>
                  <DetailItem>
                    <DetailLabel>Start Date</DetailLabel>
                    <DetailValue>{new Date(course.startDate).toLocaleDateString()}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>End Date</DetailLabel>
                    <DetailValue>{new Date(course.endDate).toLocaleDateString()}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Credit Hours</DetailLabel>
                    <DetailValue>{course.creditHours}</DetailValue>
                  </DetailItem>
                </CourseDetails>
                <CourseStats>
                  <StatItem>
                    <StatValue>{course.materials}</StatValue>
                    <StatLabel>Materials</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>{course.assignments}</StatValue>
                    <StatLabel>Assignments</StatLabel>
                  </StatItem>
                </CourseStats>
              </CourseInfo>
            </CourseBody>
            <CourseFooter>
              <NextClass>
                <FiCalendar size={14} />
                <span>Next Class: {course.nextClass}</span>
              </NextClass>
              <ViewCourseButton>
                View Course
                <FiBook size={14} />
              </ViewCourseButton>
            </CourseFooter>
          </CourseCard>
        ))}
      </CourseGrid>
    </CoursesContainer>
  );
};

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

const PageDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: ${props => props.theme.shadows.sm};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

const SearchIcon = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  height: 40px;
  width: 100%;
  color: ${props => props.theme.colors.text.primary};
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

interface TabButtonProps {
  $isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  background-color: ${props => {
    if (props.$isActive) {
      return props.children === 'All Courses' ? '#4F46E5' : props.theme.colors.primary;
    }
    return 'transparent';
  }};
  color: ${props => props.$isActive ? 'white' : props.theme.colors.text.secondary};
  border: 1px solid ${props => {
    if (props.$isActive) {
      return props.children === 'All Courses' ? '#4F46E5' : props.theme.colors.primary;
    }
    return props.theme.colors.border.light;
  }};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => {
      if (props.$isActive) {
        return props.children === 'All Courses' ? '#4338CA' : props.theme.colors.primary;
      }
      return props.theme.colors.background.hover;
    }};
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.border.light};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

interface ProgressProps {
  $progress: number;
}

const CourseHeader = styled.div<ProgressProps>`
  background: linear-gradient(135deg, 
    ${props => {
      const color = props.theme.colors.primary;
      return `${color}30, ${color}10`;
    }}
  );
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const CourseProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProgressText = styled.div`
  color: ${props => props.theme.colors.text.primary};
  font-size: 14px;
  font-weight: 500;
`;

const ProgressBar = styled.div`
  height: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div<ProgressProps>`
  height: 100%;
  width: ${props => props.$progress}%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 3px;
`;

const CourseBody = styled.div`
  padding: 20px;
  display: flex;
  gap: 16px;
  flex: 1;
  background-color: ${props => props.theme.colors.background.secondary};
`;

const CourseIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${props => `${props.theme.colors.primary}20`};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CourseInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CourseName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const CourseTeacher = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  margin-top: -8px;
`;

const CourseDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.5;
  margin-bottom: 8px;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CourseDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 12px;
  background-color: ${props => props.theme.colors.background.hover};
  border-radius: 8px;
  padding: 12px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DetailLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const DetailValue = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const CourseStats = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const StatValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const CourseFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-top: 1px solid ${props => props.theme.colors.border.light};
  background-color: ${props => props.theme.colors.background.primary};
`;

const NextClass = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 14px;
`;

const ViewCourseButton = styled.button`
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background-color: #4338CA;
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default MyCourses; 