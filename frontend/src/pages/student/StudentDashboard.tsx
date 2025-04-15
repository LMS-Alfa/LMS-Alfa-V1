import React from 'react';
import styled from 'styled-components';
import { FiCalendar, FiClock, FiBook } from 'react-icons/fi';
import Card from '../../components/common/Card';

const StudentDashboard: React.FC = () => {
  // Mock data - would normally come from API
  const upcomingAssignments = [
    { id: 1, title: 'Math Quiz: Algebra Basics', dueDate: '2023-04-20', subject: 'Mathematics', status: 'pending' },
    { id: 2, title: 'Physics Lab Report', dueDate: '2023-04-22', subject: 'Physics', status: 'pending' },
    { id: 3, title: 'Literature Essay', dueDate: '2023-04-25', subject: 'English', status: 'in-progress' },
  ];

  const recentGrades = [
    { id: 1, title: 'Chemistry Test', grade: 92, subject: 'Chemistry', date: '2023-04-10' },
    { id: 2, title: 'History Essay', grade: 88, subject: 'History', date: '2023-04-05' },
    { id: 3, title: 'Biology Quiz', grade: 95, subject: 'Biology', date: '2023-04-02' },
  ];

  const enrolledCourses = [
    { id: 1, name: 'Mathematics', progress: 75, teacher: 'Dr. Smith', nextClass: 'Tomorrow, 9:00 AM' },
    { id: 2, name: 'Physics', progress: 60, teacher: 'Prof. Johnson', nextClass: 'Thursday, 11:30 AM' },
    { id: 3, name: 'English Literature', progress: 85, teacher: 'Mrs. Davis', nextClass: 'Wednesday, 1:00 PM' },
  ];

  return (
    <DashboardContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Student Dashboard</PageTitle>
          <PageDescription>Welcome to your learning dashboard</PageDescription>
        </HeaderContent>
        <DateDisplay>
          <FiCalendar size={16} />
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </DateDisplay>
      </PageHeader>

      <WelcomeSection>
        <WelcomeCard>
          <WelcomeContent>
            <WelcomeTitle>Welcome back, Student!</WelcomeTitle>
            <WelcomeText>
              You have 3 upcoming assignments and 4 active courses.
              Your overall progress is doing great - keep it up!
            </WelcomeText>
            <ProgressStats>
              <ProgressStat>
                <ProgressLabel>Overall Grade</ProgressLabel>
                <ProgressValue>91%</ProgressValue>
                <ProgressBar $progress={91} />
              </ProgressStat>
              <ProgressStat>
                <ProgressLabel>Attendance</ProgressLabel>
                <ProgressValue>95%</ProgressValue>
                <ProgressBar $progress={95} />
              </ProgressStat>
              <ProgressStat>
                <ProgressLabel>Course Completion</ProgressLabel>
                <ProgressValue>68%</ProgressValue>
                <ProgressBar $progress={68} />
              </ProgressStat>
            </ProgressStats>
          </WelcomeContent>
        </WelcomeCard>
      </WelcomeSection>

      <SectionTitle>Upcoming Assignments</SectionTitle>
      <AssignmentGrid>
        {upcomingAssignments.map(assignment => (
          <AssignmentCard key={assignment.id}>
            <AssignmentHeader>
              <SubjectBadge>{assignment.subject}</SubjectBadge>
              <AssignmentStatus $status={assignment.status}>
                {assignment.status === 'pending' ? 'Pending' : 'In Progress'}
              </AssignmentStatus>
            </AssignmentHeader>
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDueDate>
              <FiClock size={14} />
              <span>Due: {new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </AssignmentDueDate>
          </AssignmentCard>
        ))}
      </AssignmentGrid>

      <DashboardGrid>
        <GridColumn>
          <SectionTitle>Recent Grades</SectionTitle>
          <Card>
            <GradesList>
              {recentGrades.map(grade => (
                <GradeItem key={grade.id}>
                  <GradeInfo>
                    <GradeTitle>{grade.title}</GradeTitle>
                    <GradeSubject>{grade.subject} • {new Date(grade.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</GradeSubject>
                  </GradeInfo>
                  <GradeValue $grade={grade.grade}>{grade.grade}%</GradeValue>
                </GradeItem>
              ))}
            </GradesList>
            <ViewAllLink>View all grades</ViewAllLink>
          </Card>
        </GridColumn>

        <GridColumn>
          <SectionTitle>My Courses</SectionTitle>
          <Card>
            <CoursesList>
              {enrolledCourses.map(course => (
                <CourseItem key={course.id}>
                  <CourseIcon><FiBook size={18} /></CourseIcon>
                  <CourseContent>
                    <CourseHeader>
                      <CourseName>{course.name}</CourseName>
                      <CourseProgress>{course.progress}%</CourseProgress>
                    </CourseHeader>
                    <CourseTeacher>{course.teacher}</CourseTeacher>
                    <CourseProgressBar $progress={course.progress} />
                    <CourseNextClass>
                      <FiCalendar size={12} />
                      <span>{course.nextClass}</span>
                    </CourseNextClass>
                  </CourseContent>
                </CourseItem>
              ))}
            </CoursesList>
            <ViewAllLink>View all courses</ViewAllLink>
          </Card>
        </GridColumn>
      </DashboardGrid>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
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

const DateDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  background: ${props => props.theme.colors.background.primary};
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border.light};
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

const WelcomeSection = styled.div`
  margin-bottom: 12px;
`;

const WelcomeCard = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}20, ${props => props.theme.colors.primary}10);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid ${props => props.theme.colors.border.light};
`;

const WelcomeContent = styled.div`
  max-width: 900px;
`;

const WelcomeTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: ${props => props.theme.colors.text.primary};
`;

const WelcomeText = styled.p`
  font-size: 15px;
  color: ${props => props.theme.colors.text.secondary};
  margin: 0 0 20px 0;
  line-height: 1.5;
`;

const ProgressStats = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ProgressStat = styled.div`
  flex: 1;
`;

const ProgressLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 4px;
`;

const ProgressValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 8px;
`;

interface ProgressBarProps {
  $progress: number;
}

const ProgressBar = styled.div<ProgressBarProps>`
  height: 6px;
  width: 100%;
  background-color: ${props => props.theme.colors.background.hover};
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$progress}%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 3px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 16px 0;
`;

const AssignmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`;

const AssignmentCard = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.border.light};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const AssignmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const SubjectBadge = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.background.hover};
  color: ${props => props.theme.colors.text.secondary};
`;

interface StatusProps {
  $status: string;
}

const AssignmentStatus = styled.div<StatusProps>`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${props => 
    props.$status === 'in-progress' ? '#fff8e1' : '#e3f2fd'};
  color: ${props => 
    props.$status === 'in-progress' ? '#f57c00' : '#1e88e5'};
`;

const AssignmentTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${props => props.theme.colors.text.primary};
`;

const AssignmentDueDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 16px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const GradesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const GradeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const GradeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const GradeTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 4px;
`;

const GradeSubject = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

interface GradeValueProps {
  $grade: number;
}

const GradeValue = styled.div<GradeValueProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${props => {
    if (props.$grade >= 90) return '#2e7d32';
    if (props.$grade >= 80) return '#388e3c';
    if (props.$grade >= 70) return '#f57c00';
    return '#d32f2f';
  }};
`;

const ViewAllLink = styled.a`
  display: block;
  text-align: center;
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  padding: 12px 0 0;
  margin-top: 12px;
  border-top: 1px solid ${props => props.theme.colors.border.light};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CourseItem = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const CourseIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props => `${props.theme.colors.primary}15`};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CourseContent = styled.div`
  flex: 1;
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const CourseName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.colors.text.primary};
`;

const CourseProgress = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
`;

const CourseTeacher = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 8px;
`;

interface CourseProgressBarProps {
  $progress: number;
}

const CourseProgressBar = styled.div<CourseProgressBarProps>`
  height: 4px;
  width: 100%;
  background-color: ${props => props.theme.colors.background.hover};
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$progress}%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 2px;
  }
`;

const CourseNextClass = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
`;

export default StudentDashboard; 