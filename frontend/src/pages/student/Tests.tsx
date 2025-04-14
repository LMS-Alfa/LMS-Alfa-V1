import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { FiSearch, FiChevronDown, FiChevronUp, FiFilter, FiCalendar, FiClock, FiFileText } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { format, parseISO } from 'date-fns';

interface Test {
  id: string;
  title: string;
  subject: string;
  date: string;
  duration: number;
  status: 'upcoming' | 'completed' | 'missed';
  type: 'quiz' | 'exam' | 'assignment';
  description?: string;
  score?: number;
  maxScore?: number;
  location?: string;
  instructions?: string;
}

const Tests: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'completed' | 'missed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTests, setExpandedTests] = useState<string[]>([]);
  const [subjectFilter, setSubjectFilter] = useState<string>('all');

  // Mock data for tests
  const tests: Test[] = [
    {
      id: '1',
      title: 'Midterm Examination',
      subject: 'Mathematics',
      date: '2023-11-15T09:00:00',
      duration: 120,
      status: 'upcoming',
      type: 'exam',
      description: 'This exam covers chapters 1-5 from the textbook. Focus on calculus and linear algebra concepts.',
      maxScore: 100,
      location: 'Room 301',
      instructions: 'No calculators allowed. Bring two #2 pencils and an eraser.'
    },
    {
      id: '2',
      title: 'Weekly Quiz',
      subject: 'Physics',
      date: '2023-11-10T14:30:00',
      duration: 30,
      status: 'upcoming',
      type: 'quiz',
      description: 'Quiz on mechanics and thermodynamics concepts covered in the last two weeks.',
      maxScore: 20,
      location: 'Online',
      instructions: 'Open book quiz. You can use your notes and textbook.'
    },
    {
      id: '3',
      title: 'Final Project Submission',
      subject: 'Computer Science',
      date: '2023-12-05T23:59:00',
      duration: 0,
      status: 'upcoming',
      type: 'assignment',
      description: 'Submit your final project including source code and documentation.',
      maxScore: 50,
      instructions: 'Submit through the online portal as a single ZIP file. Include a README file.'
    },
    {
      id: '4',
      title: 'Literature Review',
      subject: 'English',
      date: '2023-10-25T10:00:00',
      duration: 90,
      status: 'completed',
      type: 'exam',
      description: 'Essay-based examination on 19th century American literature.',
      score: 88,
      maxScore: 100,
      location: 'Room 205'
    },
    {
      id: '5',
      title: 'Pop Quiz',
      subject: 'Chemistry',
      date: '2023-10-20T13:15:00',
      duration: 15,
      status: 'completed',
      type: 'quiz',
      description: 'Surprise quiz on chemical reactions and formulas.',
      score: 18,
      maxScore: 20,
      location: 'Lab 3'
    },
    {
      id: '6',
      title: 'Research Paper',
      subject: 'History',
      date: '2023-10-15T23:59:00',
      duration: 0,
      status: 'missed',
      type: 'assignment',
      description: 'Research paper on a historical event of your choice from the 20th century.',
      maxScore: 40,
      instructions: 'APA format, 8-10 pages double-spaced, minimum 5 academic sources.'
    }
  ];

  // Get unique subjects for filter dropdown
  const subjects = useMemo(() => {
    const uniqueSubjects = [...new Set(tests.map(test => test.subject))];
    return ['all', ...uniqueSubjects];
  }, [tests]);

  // Handle expanding/collapsing test details
  const toggleTestExpansion = (id: string) => {
    setExpandedTests(prev => 
      prev.includes(id) ? prev.filter(testId => testId !== id) : [...prev, id]
    );
  };

  // Filter tests based on active tab, search term, and subject filter
  const filteredTests = useMemo(() => {
    return tests
      .filter(test => {
        // Filter by tab
        if (activeTab !== 'all' && test.status !== activeTab) return false;
        
        // Filter by search term
        if (searchTerm && !test.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
            !test.subject.toLowerCase().includes(searchTerm.toLowerCase())) {
          return false;
        }
        
        // Filter by subject
        if (subjectFilter !== 'all' && test.subject !== subjectFilter) return false;
        
        return true;
      })
      .sort((a, b) => {
        // Sort by date (most recent first for completed, earliest first for upcoming)
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
  }, [tests, activeTab, searchTerm, subjectFilter]);

  return (
    <Container>
      <PageHeader>
        <h1>Tests & Assessments</h1>
        <p>View and prepare for your upcoming tests and assessments.</p>
      </PageHeader>

      <FilterContainer>
        <SearchWrapper>
          <FiSearch />
          <SearchInput 
            type="text" 
            placeholder="Search tests by title or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchWrapper>
        
        <FilterWrapper>
          <FiFilter />
          <Select 
            value={subjectFilter} 
            onChange={(e) => setSubjectFilter(e.target.value)}
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subject === 'all' ? 'All Subjects' : subject}
              </option>
            ))}
          </Select>
        </FilterWrapper>
      </FilterContainer>

      <TabsContainer>
        <Tab 
          isActive={activeTab === 'all'} 
          onClick={() => setActiveTab('all')}
        >
          All
        </Tab>
        <Tab 
          isActive={activeTab === 'upcoming'} 
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </Tab>
        <Tab 
          isActive={activeTab === 'completed'} 
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </Tab>
        <Tab 
          isActive={activeTab === 'missed'} 
          onClick={() => setActiveTab('missed')}
        >
          Missed
        </Tab>
      </TabsContainer>

      <TestsList>
        {filteredTests.length === 0 ? (
          <NoTests>No tests found matching your criteria.</NoTests>
        ) : (
          filteredTests.map(test => (
            <TestCard 
              key={test.id} 
              status={test.status}
              onClick={() => toggleTestExpansion(test.id)}
            >
              <TestHeader>
                <div>
                  <TestType type={test.type}>
                    {test.type.charAt(0).toUpperCase() + test.type.slice(1)}
                  </TestType>
                  <TestTitle>{test.title}</TestTitle>
                  <TestSubject>{test.subject}</TestSubject>
                </div>
                <TestInfo>
                  <TestDate>
                    <FiCalendar />
                    {format(parseISO(test.date), 'MMM d, yyyy • h:mm a')}
                  </TestDate>
                  {test.duration > 0 && (
                    <TestDuration>
                      <FiClock />
                      {test.duration} minutes
                    </TestDuration>
                  )}
                  {test.status === 'completed' && test.score !== undefined && (
                    <TestScore score={(test.score / test.maxScore!) * 100}>
                      {test.score} / {test.maxScore}
                    </TestScore>
                  )}
                  <ExpandButton>
                    {expandedTests.includes(test.id) ? <FiChevronUp /> : <FiChevronDown />}
                  </ExpandButton>
                </TestInfo>
              </TestHeader>
              
              <AnimatePresence>
                {expandedTests.includes(test.id) && (
                  <TestDetails
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {test.description && (
                      <DetailItem>
                        <DetailLabel><FiFileText /> Description</DetailLabel>
                        <DetailText>{test.description}</DetailText>
                      </DetailItem>
                    )}
                    
                    {test.location && (
                      <DetailItem>
                        <DetailLabel>Location</DetailLabel>
                        <DetailText>{test.location}</DetailText>
                      </DetailItem>
                    )}
                    
                    {test.instructions && (
                      <DetailItem>
                        <DetailLabel>Instructions</DetailLabel>
                        <DetailText>{test.instructions}</DetailText>
                      </DetailItem>
                    )}
                    
                    {test.status === 'upcoming' && (
                      <ActionButton>Prepare for Test</ActionButton>
                    )}
                    
                    {test.status === 'completed' && (
                      <ActionButton>View Detailed Results</ActionButton>
                    )}
                  </TestDetails>
                )}
              </AnimatePresence>
            </TestCard>
          ))
        )}
      </TestsList>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 24px;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const SearchWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FilterWrapper = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const Select = styled.select`
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 24px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
`;

const Tab = styled.button<{ isActive: boolean }>`
  padding: 12px 24px;
  background: none;
  border: none;
  font-size: 15px;
  font-weight: ${({ isActive }) => isActive ? '600' : '400'};
  color: ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : theme.colors.text.secondary};
  cursor: pointer;
  border-bottom: 3px solid ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : 'transparent'};
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:focus {
    outline: none;
  }
`;

const TestsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TestCard = styled.div<{ status: string }>`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${({ status, theme }) => {
    switch (status) {
      case 'upcoming': return theme.colors.primary;
      case 'completed': return theme.colors.success;
      case 'missed': return theme.colors.error;
      default: return theme.colors.border;
    }
  }};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const TestHeader = styled.div`
  padding: 16px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const TestType = styled.span<{ type: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  background: ${({ type, theme }) => {
    switch (type) {
      case 'quiz': return `${theme.colors.warning}20`;
      case 'exam': return `${theme.colors.error}20`;
      case 'assignment': return `${theme.colors.primary}20`;
      default: return theme.colors.border;
    }
  }};
  color: ${({ type, theme }) => {
    switch (type) {
      case 'quiz': return theme.colors.warning;
      case 'exam': return theme.colors.error;
      case 'assignment': return theme.colors.primary;
      default: return theme.colors.text.primary;
    }
  }};
`;

const TestTitle = styled.h3`
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const TestSubject = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const TestInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const TestDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const TestDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const TestScore = styled.div<{ score: number }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ score, theme }) => {
    if (score >= 80) return `${theme.colors.success}20`;
    if (score >= 60) return `${theme.colors.warning}20`;
    return `${theme.colors.error}20`;
  }};
  color: ${({ score, theme }) => {
    if (score >= 80) return theme.colors.success;
    if (score >= 60) return theme.colors.warning;
    return theme.colors.error;
  }};
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 20px;
  padding: 4px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TestDetails = styled(motion.div)`
  padding: 0 20px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DetailItem = styled.div`
  margin-top: 16px;
`;

const DetailLabel = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    font-size: 16px;
  }
`;

const DetailText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
`;

const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;
  align-self: flex-start;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary}dd;
  }
`;

const NoTests = styled.div`
  text-align: center;
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 16px;
`;

export default Tests; 