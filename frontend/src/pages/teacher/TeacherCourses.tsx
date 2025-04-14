import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FiSearch, FiFilter, FiPlus, FiUsers, FiBook,
  FiCalendar, FiBarChart2, FiDownload, FiMoreVertical,
  FiEdit, FiTrash2, FiEye, FiX, FiCheck
} from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

interface Course {
  id: number;
  name: string;
  subject: string;
  grade: string;
  students: number;
  room: string;
  schedule: string;
  progress: number;
  coverImage: string;
}

const TeacherCourses: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  
  // Mock data for courses
  const courses: Course[] = [
    {
      id: 1,
      name: 'Algebra Fundamentals',
      subject: 'Mathematics',
      grade: '10-A',
      students: 24,
      room: 'Room 101',
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      progress: 65,
      coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80',
    },
    {
      id: 2,
      name: 'Physics Principles',
      subject: 'Physics',
      grade: '11-B',
      students: 20,
      room: 'Lab 3',
      schedule: 'Tue, Thu - 11:30 AM',
      progress: 48,
      coverImage: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80',
    },
    {
      id: 3,
      name: 'Chemistry Fundamentals',
      subject: 'Chemistry',
      grade: '12-C',
      students: 22,
      room: 'Lab 2',
      schedule: 'Mon, Wed - 2:15 PM',
      progress: 72,
      coverImage: 'https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80',
    },
    {
      id: 4,
      name: 'Geometry',
      subject: 'Mathematics',
      grade: '10-B',
      students: 25,
      room: 'Room 102',
      schedule: 'Tue, Thu - 9:00 AM',
      progress: 58,
      coverImage: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80',
    },
    {
      id: 5,
      name: 'Biology 101',
      subject: 'Biology',
      grade: '11-A',
      students: 23,
      room: 'Lab 1',
      schedule: 'Mon, Wed, Fri - 11:00 AM',
      progress: 82,
      coverImage: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80',
    },
  ];

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setShowFilters(false);
  };

  // Filter courses based on search term and selected filter
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.grade.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'inProgress') return matchesSearch && course.progress < 100 && course.progress > 0;
    if (filter === 'notStarted') return matchesSearch && course.progress === 0;
    if (filter === 'completed') return matchesSearch && course.progress === 100;
    
    return matchesSearch;
  });

  // Calculate cards to show per row based on screen width
  const getGridColumns = () => {
    const width = window.innerWidth;
    if (width >= 1600) return 4;
    if (width >= 1280) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  const [cardsPerRow, setCardsPerRow] = useState(getGridColumns());

  // Update cards per row on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerRow(getGridColumns());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle course card click
  const handleCourseClick = (courseId: number) => {
    navigate(`/teacher/courses/${courseId}`);
  };

  // Toggle menu for a course
  const toggleCourseMenu = (courseId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCourse(selectedCourse === courseId ? null : courseId);
  };

  return (
    <CoursesContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader>
        <div>
          <PageTitle>My Courses</PageTitle>
          <PageDescription>Manage your teaching subjects and classes</PageDescription>
        </div>
        
        <HeaderActions>
          <ActionButton>
            <FiPlus />
            <span>Add Course</span>
          </ActionButton>
        </HeaderActions>
      </PageHeader>

      <SearchFilterBar>
        <SearchBox>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchBox>

        <FilterContainer>
          <FilterButton onClick={() => setShowFilters(!showFilters)}>
            <FiFilter />
            <span>Filter</span>
          </FilterButton>
          
          {showFilters && (
            <FilterDropdown>
              <FilterOption 
                onClick={() => handleFilterChange('all')}
                $isActive={filter === 'all'}
              >
                All Courses
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('inProgress')}
                $isActive={filter === 'inProgress'}
              >
                In Progress
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('notStarted')}
                $isActive={filter === 'notStarted'}
              >
                Not Started
              </FilterOption>
              <FilterOption 
                onClick={() => handleFilterChange('completed')}
                $isActive={filter === 'completed'}
              >
                Completed
              </FilterOption>
            </FilterDropdown>
          )}
        </FilterContainer>
      </SearchFilterBar>

      {filteredCourses.length === 0 ? (
        <EmptyState>
          <EmptyIcon>
            <FiBook size={48} />
          </EmptyIcon>
          <EmptyTitle>No courses found</EmptyTitle>
          <EmptyDescription>
            {searchTerm 
              ? `No results matching "${searchTerm}". Try a different search term.` 
              : "You haven't been assigned any courses yet."}
          </EmptyDescription>
        </EmptyState>
      ) : (
        <CoursesGrid $columns={cardsPerRow}>
          {filteredCourses.map(course => (
            <CourseCard 
              key={course.id}
              onClick={() => handleCourseClick(course.id)}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CourseCardTop>
                <CourseImage $imageUrl={course.coverImage} />
                <CourseSubject>{course.subject}</CourseSubject>
                <CourseMenu onClick={(e) => toggleCourseMenu(course.id, e)}>
                  <FiMoreVertical />
                  
                  {selectedCourse === course.id && (
                    <CourseMenuDropdown
                      as={motion.div}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MenuOption onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/teacher/courses/${course.id}`);
                      }}>
                        <FiEye />
                        <span>View Details</span>
                      </MenuOption>
                      <MenuOption>
                        <FiEdit />
                        <span>Edit Course</span>
                      </MenuOption>
                      <MenuOption>
                        <FiTrash2 />
                        <span>Delete Course</span>
                      </MenuOption>
                    </CourseMenuDropdown>
                  )}
                </CourseMenu>
              </CourseCardTop>
              
              <CourseCardContent>
                <CourseTitle>{course.name}</CourseTitle>
                <CourseGrade>Class {course.grade}</CourseGrade>
                
                <CourseStats>
                  <StatItem>
                    <StatIcon $type="students">
                      <FiUsers />
                    </StatIcon>
                    <StatValue>{course.students} Students</StatValue>
                  </StatItem>
                  
                  <StatItem>
                    <StatIcon $type="schedule">
                      <FiCalendar />
                    </StatIcon>
                    <StatValue>{course.schedule.split(' - ')[0]}</StatValue>
                  </StatItem>
                </CourseStats>
                
                <CourseProgress>
                  <ProgressLabel>Course Progress</ProgressLabel>
                  <ProgressBar>
                    <ProgressFill $percentage={course.progress} />
                  </ProgressBar>
                  <ProgressValue>{course.progress}%</ProgressValue>
                </CourseProgress>
                
                <CourseActions>
                  <ActionButton $small>
                    <FiUsers />
                    <span>Students</span>
                  </ActionButton>
                  <ActionButton $small>
                    <FiBarChart2 />
                    <span>Progress</span>
                  </ActionButton>
                </CourseActions>
              </CourseCardContent>
            </CourseCard>
          ))}
        </CoursesGrid>
      )}
    </CoursesContainer>
  );
};

const CoursesContainer = styled.div`
  padding: 1rem 0;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.colors.text.primary};
`;

const PageDescription = styled.p`
  margin: 0.5rem 0 0;
  color: ${props => props.theme.colors.text.secondary};
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

interface ActionButtonProps {
  $small?: boolean;
}

const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: ${props => props.$small ? '0.5rem 0.75rem' : '0.75rem 1rem'};
  background-color: ${props => props.theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.$small ? '0.75rem' : '0.875rem'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.theme.shadows.sm};
  
  svg {
    font-size: ${props => props.$small ? '0.875rem' : '1rem'};
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[600]};
  }
`;

const SearchFilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.text.tertiary};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.border.light};
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary[300]};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary[100]};
  }
`;

const FilterContainer = styled.div`
  position: relative;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
`;

const FilterDropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 200px;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 10;
  overflow: hidden;
`;

interface FilterOptionProps {
  $isActive: boolean;
}

const FilterOption = styled.div<FilterOptionProps>`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${props => props.$isActive ? props.theme.colors.background.tertiary : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors.primary[500] : props.theme.colors.text.primary};
  font-weight: ${props => props.$isActive ? '500' : 'normal'};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
`;

interface CoursesGridProps {
  $columns: number;
}

const CoursesGrid = styled.div<CoursesGridProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 1fr);
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
    transform: translateY(-4px);
  }
`;

const CourseCardTop = styled.div`
  position: relative;
  height: 140px;
`;

interface CourseImageProps {
  $imageUrl: string;
}

const CourseImage = styled.div<CourseImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
`;

const CourseSubject = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.4rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius.md};
`;

const CourseMenu = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const CourseMenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 160px;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.light};
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 20;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const MenuOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.primary};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
  
  svg {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const CourseCardContent = styled.div`
  padding: 1.5rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: ${props => props.theme.colors.text.primary};
`;

const CourseGrade = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 1rem;
`;

const CourseStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface StatIconProps {
  $type: 'students' | 'schedule';
}

const StatIcon = styled.div<StatIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props => 
    props.$type === 'students' 
      ? props.theme.colors.primary[100] 
      : props.theme.colors.success[100]};
  color: ${props => 
    props.$type === 'students' 
      ? props.theme.colors.primary[500] 
      : props.theme.colors.success[500]};
`;

const StatValue = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const CourseProgress = styled.div`
  margin-bottom: 1.5rem;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const ProgressBar = styled.div`
  height: 6px;
  width: 100%;
  background-color: ${props => props.theme.colors.background.tertiary};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

interface ProgressFillProps {
  $percentage: number;
}

const ProgressFill = styled.div<ProgressFillProps>`
  height: 100%;
  width: ${props => props.$percentage}%;
  background-color: ${props => {
    if (props.$percentage >= 80) return props.theme.colors.success[500];
    if (props.$percentage >= 40) return props.theme.colors.warning[500];
    return props.theme.colors.danger[500];
  }};
  border-radius: ${props => props.theme.borderRadius.full};
  transition: width 0.3s ease;
`;

const ProgressValue = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
  text-align: right;
`;

const CourseActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
`;

const EmptyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background.tertiary};
  color: ${props => props.theme.colors.primary[500]};
  margin-bottom: 1.5rem;
`;

const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const EmptyDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text.secondary};
  max-width: 400px;
  margin: 0;
`;

export default TeacherCourses; 