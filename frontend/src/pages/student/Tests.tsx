import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { FiSearch, FiChevronDown, FiChevronUp, FiFilter, FiCalendar, FiClock, FiFileText, FiMapPin, FiAlertCircle, FiCheckCircle, FiClock as FiClockAlt } from 'react-icons/fi';
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

  // Get counts for each tab
  const upcomingCount = tests.filter(test => test.status === 'upcoming').length;
  const completedCount = tests.filter(test => test.status === 'completed').length;
  const missedCount = tests.filter(test => test.status === 'missed').length;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming': return <FiClockAlt />;
      case 'completed': return <FiCheckCircle />;
      case 'missed': return <FiAlertCircle />;
      default: return null;
    }
  };

  return (
    <Container>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Tests & Assessments</PageTitle>
          <PageDescription>View and prepare for your upcoming tests and assessments</PageDescription>
        </HeaderContent>
      </PageHeader>

      <ContentWrapper>
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
            $isActive={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            All Tests
          </Tab>
          <Tab 
            $isActive={activeTab === 'upcoming'} 
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming <TabCount>{upcomingCount}</TabCount>
          </Tab>
          <Tab 
            $isActive={activeTab === 'completed'} 
            onClick={() => setActiveTab('completed')}
          >
            Completed <TabCount>{completedCount}</TabCount>
          </Tab>
          <Tab 
            $isActive={activeTab === 'missed'} 
            onClick={() => setActiveTab('missed')}
          >
            Missed <TabCount>{missedCount}</TabCount>
          </Tab>
        </TabsContainer>

        <TestsList>
          <AnimatePresence>
            {filteredTests.length === 0 ? (
              <NoTests
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <NoTestsIcon><FiFileText size={48} /></NoTestsIcon>
                <NoTestsTitle>No tests found</NoTestsTitle>
                <NoTestsMessage>No tests matching your criteria were found. Try adjusting your filters.</NoTestsMessage>
              </NoTests>
            ) : (
              filteredTests.map((test, index) => (
                <TestCard 
                  key={test.id} 
                  status={test.status}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ y: -4 }}
                >
                  <TestHeader onClick={() => toggleTestExpansion(test.id)}>
                    <TestMainInfo>
                      <TestMetaInfo>
                        <TestType type={test.type}>
                          {test.type.charAt(0).toUpperCase() + test.type.slice(1)}
                        </TestType>
                        <StatusBadge status={test.status}>
                          {getStatusIcon(test.status)}
                          <span>{test.status.charAt(0).toUpperCase() + test.status.slice(1)}</span>
                        </StatusBadge>
                      </TestMetaInfo>
                      <TestTitle>{test.title}</TestTitle>
                      <TestSubject>{test.subject}</TestSubject>
                    </TestMainInfo>
                    <TestInfo>
                      <TestDate>
                        <FiCalendar />
                        <span>{format(parseISO(test.date), 'MMM d, yyyy • h:mm a')}</span>
                      </TestDate>
                      {test.duration > 0 && (
                        <TestDuration>
                          <FiClock />
                          <span>{test.duration} minutes</span>
                        </TestDuration>
                      )}
                      {test.status === 'completed' && test.score !== undefined && (
                        <TestScoreContainer>
                          <ScoreLabel>Score:</ScoreLabel>
                          <TestScore score={(test.score / test.maxScore!) * 100}>
                            {test.score} / {test.maxScore}
                          </TestScore>
                        </TestScoreContainer>
                      )}
                    </TestInfo>
                    <ExpandButtonWrapper>
                      <ExpandButton>
                        {expandedTests.includes(test.id) ? <FiChevronUp /> : <FiChevronDown />}
                      </ExpandButton>
                    </ExpandButtonWrapper>
                  </TestHeader>
                  
                  <AnimatePresence>
                    {expandedTests.includes(test.id) && (
                      <TestDetails
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <DetailItems>
                          {test.description && (
                            <DetailItem>
                              <DetailLabel><FiFileText /> Description</DetailLabel>
                              <DetailText>{test.description}</DetailText>
                            </DetailItem>
                          )}
                          
                          {test.location && (
                            <DetailItem>
                              <DetailLabel><FiMapPin /> Location</DetailLabel>
                              <DetailText>{test.location}</DetailText>
                            </DetailItem>
                          )}
                          
                          {test.instructions && (
                            <DetailItem>
                              <DetailLabel><FiAlertCircle /> Instructions</DetailLabel>
                              <DetailText>{test.instructions}</DetailText>
                            </DetailItem>
                          )}
                        </DetailItems>
                        
                        <ActionButtonContainer>
                          {test.status === 'upcoming' && (
                            <ActionButton as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              Prepare for Test
                            </ActionButton>
                          )}
                          
                          {test.status === 'completed' && (
                            <ActionButton as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              View Detailed Results
                            </ActionButton>
                          )}
                        </ActionButtonContainer>
                      </TestDetails>
                    )}
                  </AnimatePresence>
                </TestCard>
              ))
            )}
          </AnimatePresence>
        </TestsList>
      </ContentWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 24px;
`;

const HeaderContent = styled.div`
  padding: 16px 0;
`;

const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const PageDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  flex-wrap: wrap;
`;

const SearchWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  min-width: 250px;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 18px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}30`};
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
    font-size: 18px;
  }
`;

const Select = styled.select`
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  min-width: 200px;
  appearance: none;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}30`};
  }
`;

const TabsContainer = styled.div`
  display: flex;
  padding: 0 20px;
  margin-top: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
`;

const Tab = styled.button<{ $isActive: boolean }>`
  padding: 16px 20px;
  background: none;
  border: none;
  font-size: 15px;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '500'};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.text.secondary};
  cursor: pointer;
  border-bottom: 3px solid ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : 'transparent'};
  transition: all 0.2s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
  
  &:focus {
    outline: none;
  }
`;

const TabCount = styled.span`
  background-color: ${({ theme }) => `${theme.colors.primary}20`};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 500;
`;

const TestsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TestCard = styled(motion.div)<{ status: string }>`
  margin-bottom: 16px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-left: 5px solid ${({ status, theme }) => {
    switch (status) {
      case 'upcoming': return theme.colors.primary;
      case 'completed': return theme.colors.success;
      case 'missed': return theme.colors.danger[500];
      default: return theme.colors.border.light;
    }
  }};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  }
`;

const TestHeader = styled.div`
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  position: relative;
`;

const TestMainInfo = styled.div`
  flex: 2;
  min-width: 250px;
`;

const TestMetaInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = styled.span<StatusBadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background: ${({ status, theme }) => {
    switch (status) {
      case 'upcoming': return `${theme.colors.primary}20`;
      case 'completed': return `${theme.colors.success}20`;
      case 'missed': return `${theme.colors.danger[500]}20`;
      default: return theme.colors.border.light;
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case 'upcoming': return theme.colors.primary;
      case 'completed': return theme.colors.success;
      case 'missed': return theme.colors.danger[500];
      default: return theme.colors.text.primary;
    }
  }};
  
  svg {
    font-size: 14px;
  }
`;

const TestType = styled.span<{ type: string }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background: ${({ type, theme }) => {
    switch (type) {
      case 'quiz': return `${theme.colors.warning}20`;
      case 'exam': return `${theme.colors.primary}20`;
      case 'assignment': return `${theme.colors.primary}10`;
      default: return theme.colors.border.light;
    }
  }};
  color: ${({ type, theme }) => {
    switch (type) {
      case 'quiz': return theme.colors.warning;
      case 'exam': return theme.colors.primary;
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
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TestDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

const TestDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

const TestScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ScoreLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const TestScore = styled.div<{ score: number }>`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ score, theme }) => {
    if (score >= 80) return `${theme.colors.success}20`;
    if (score >= 60) return `${theme.colors.warning}20`;
    return `${theme.colors.danger[500]}20`;
  }};
  color: ${({ score, theme }) => {
    if (score >= 80) return theme.colors.success;
    if (score >= 60) return theme.colors.warning;
    return theme.colors.danger[500];
  }};
`;

const ExpandButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 32px;
  height: 32px;
  border-radius: 16px;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }
`;

const TestDetails = styled(motion.div)`
  padding: 0 20px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const DetailItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DetailLabel = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-size: 16px;
  }
`;

const DetailText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  padding-left: 24px;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary}e0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${({ theme }) => `${theme.colors.primary}40`};
  }
  
  &:focus {
    outline: none;
  }
`;

const NoTests = styled(motion.div)`
  text-align: center;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const NoTestsIcon = styled.div`
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: 8px;
`;

const NoTestsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const NoTestsMessage = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  max-width: 400px;
`;

export default Tests; 