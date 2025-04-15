import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSearch, FiPlus, FiFilter, FiChevronLeft, FiChevronRight, FiX, FiCheck, FiEdit, FiShare2 } from 'react-icons/fi';

interface Flashcard {
  id: string;
  question: string;
  answer: string;
  mastered: boolean;
  lastReviewed?: Date;
}

interface FlashcardSet {
  id: string;
  title: string;
  subject: string;
  totalCards: number;
  masteredCards: number;
  lastStudied?: Date;
  tags: string[];
}

const Flashcards: React.FC = () => {
  const [activeView, setActiveView] = useState<'sets' | 'study'>('sets');
  const [activeSetId, setActiveSetId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [masteredCards, setMasteredCards] = useState<Set<string>>(new Set());
  const [filterTag, setFilterTag] = useState<string | null>(null);
  
  // Mock data for flashcard sets
  const flashcardSets: FlashcardSet[] = [
    {
      id: 'set1',
      title: 'Biology - Cell Structure',
      subject: 'Biology',
      totalCards: 15,
      masteredCards: 8,
      lastStudied: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      tags: ['science', 'biology', 'cells']
    },
    {
      id: 'set2',
      title: 'Math - Calculus Fundamentals',
      subject: 'Mathematics',
      totalCards: 24,
      masteredCards: 12,
      lastStudied: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      tags: ['math', 'calculus']
    },
    {
      id: 'set3',
      title: 'History - World War II',
      subject: 'History',
      totalCards: 20,
      masteredCards: 15,
      lastStudied: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      tags: ['history', 'world wars']
    },
    {
      id: 'set4',
      title: 'Programming - JavaScript Basics',
      subject: 'Computer Science',
      totalCards: 30,
      masteredCards: 20,
      lastStudied: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      tags: ['programming', 'javascript', 'web development']
    },
    {
      id: 'set5',
      title: 'Chemistry - Periodic Table',
      subject: 'Chemistry',
      totalCards: 18,
      masteredCards: 5,
      tags: ['science', 'chemistry', 'elements']
    }
  ];
  
  // Mock data for flashcards
  const flashcards: Record<string, Flashcard[]> = {
    'set1': [
      { id: 'card1_1', question: 'What is a cell?', answer: 'The basic structural and functional unit of all living organisms.', mastered: true },
      { id: 'card1_2', question: 'What is the function of mitochondria?', answer: 'Powerhouse of the cell, responsible for cellular respiration and producing energy in the form of ATP.', mastered: true },
      { id: 'card1_3', question: 'What is the function of the nucleus?', answer: 'Control center of the cell, contains genetic material (DNA) and directs cell activities.', mastered: false },
      { id: 'card1_4', question: 'What is the endoplasmic reticulum?', answer: 'A network of membranous tubules within the cytoplasm involved in protein and lipid synthesis.', mastered: false },
      { id: 'card1_5', question: 'What are lysosomes?', answer: 'Membrane-bound vesicles containing digestive enzymes that break down waste materials and cellular debris.', mastered: true }
    ],
    'set2': [
      { id: 'card2_1', question: 'What is a derivative?', answer: 'A rate of change of a function with respect to a variable.', mastered: true },
      { id: 'card2_2', question: 'What is an integral?', answer: 'The area under a curve, representing the accumulation of quantities.', mastered: false },
      { id: 'card2_3', question: 'What is the chain rule?', answer: 'A formula for computing the derivative of a composite function.', mastered: true }
    ],
    'set3': [
      { id: 'card3_1', question: 'When did World War II begin?', answer: 'September 1, 1939, with Germany\'s invasion of Poland.', mastered: true },
      { id: 'card3_2', question: 'When did World War II end?', answer: 'September 2, 1945, with Japan\'s formal surrender.', mastered: true },
      { id: 'card3_3', question: 'Who were the Allied Powers?', answer: 'Primarily the United States, Great Britain, France, and the Soviet Union.', mastered: false }
    ],
    'set4': [
      { id: 'card4_1', question: 'What is a variable in JavaScript?', answer: 'A named storage for data that can be modified during program execution.', mastered: true },
      { id: 'card4_2', question: 'What is the difference between let and const?', answer: 'let declares a block-scoped variable that can be reassigned, while const declares a block-scoped variable that cannot be reassigned.', mastered: false },
      { id: 'card4_3', question: 'What is a function in JavaScript?', answer: 'A reusable block of code designed to perform a particular task.', mastered: true },
      { id: 'card4_4', question: 'What are JavaScript promises?', answer: 'Objects representing the eventual completion or failure of an asynchronous operation.', mastered: false }
    ],
    'set5': [
      { id: 'card5_1', question: 'What is the atomic number?', answer: 'The number of protons in an atom\'s nucleus, which determines the chemical element.', mastered: true },
      { id: 'card5_2', question: 'What are isotopes?', answer: 'Variants of a particular chemical element that have the same number of protons but different numbers of neutrons.', mastered: false },
      { id: 'card5_3', question: 'What is a noble gas?', answer: 'Elements in group 18 of the periodic table that are colorless, odorless, and generally non-reactive.', mastered: false }
    ]
  };
  
  // Initialize mastered cards from mock data
  useEffect(() => {
    if (activeSetId && flashcards[activeSetId]) {
      const initialMastered = new Set<string>();
      flashcards[activeSetId].forEach(card => {
        if (card.mastered) {
          initialMastered.add(card.id);
        }
      });
      setMasteredCards(initialMastered);
    }
  }, [activeSetId]);
  
  // Get all unique tags across all sets
  const allTags = Array.from(new Set(flashcardSets.flatMap(set => set.tags)));
  
  // Filter sets based on search term and tag filter
  const filteredSets = flashcardSets.filter(set => {
    const matchesSearch = searchTerm === '' || 
                        set.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        set.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = filterTag === null || set.tags.includes(filterTag);
    
    return matchesSearch && matchesTag;
  });
  
  // Get current active set
  const activeSet = activeSetId ? flashcardSets.find(set => set.id === activeSetId) : null;
  
  // Get current active set cards
  const activeSetCards = activeSetId ? flashcards[activeSetId] || [] : [];
  
  // Flip card handler
  const handleFlipCard = (cardId: string) => {
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(cardId)) {
        newFlipped.delete(cardId);
      } else {
        newFlipped.add(cardId);
      }
      return newFlipped;
    });
  };
  
  // Toggle card mastery
  const toggleCardMastery = (cardId: string) => {
    setMasteredCards(prev => {
      const newMastered = new Set(prev);
      if (newMastered.has(cardId)) {
        newMastered.delete(cardId);
      } else {
        newMastered.add(cardId);
      }
      return newMastered;
    });
  };
  
  // Start studying a set
  const startStudying = (setId: string) => {
    setActiveSetId(setId);
    setCurrentCardIndex(0);
    setFlippedCards(new Set());
    setActiveView('study');
  };
  
  // Navigate to previous card
  const goToPrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setFlippedCards(new Set());
    }
  };
  
  // Navigate to next card
  const goToNextCard = () => {
    if (currentCardIndex < activeSetCards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setFlippedCards(new Set());
    }
  };
  
  // Back to sets view
  const backToSets = () => {
    setActiveView('sets');
    setActiveSetId(null);
  };
  
  // Format date for last studied
  const formatDate = (date?: Date): string => {
    if (!date) return 'Never';
    
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };
  
  // Get progress percentage
  const getProgressPercentage = (total: number, mastered: number): number => {
    return Math.round((mastered / total) * 100);
  };
  
  return (
    <Container>
      {activeView === 'sets' ? (
        <>
          <PageHeader>
            <h1>Flashcards</h1>
            <p>Review and master your coursework with flashcards</p>
          </PageHeader>
          
          <ControlsRow>
            <SearchWrapper>
              <SearchIcon><FiSearch /></SearchIcon>
              <SearchInput 
                type="text" 
                placeholder="Search sets..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchWrapper>
            
            <FilterWrapper>
              <FiFilter />
              <Select 
                value={filterTag || ''} 
                onChange={(e) => setFilterTag(e.target.value || null)}
              >
                <option value="">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </Select>
            </FilterWrapper>
            
            <NewSetButton>
              <FiPlus />
              <span>Create New Set</span>
            </NewSetButton>
          </ControlsRow>
          
          <CardSetsGrid>
            {filteredSets.length === 0 ? (
              <EmptyState>
                <p>No flashcard sets found matching your criteria.</p>
                <CreateNewButton>
                  <FiPlus />
                  <span>Create your first set</span>
                </CreateNewButton>
              </EmptyState>
            ) : (
              filteredSets.map(set => (
                <CardSetBox key={set.id}>
                  <CardSetTitle>{set.title}</CardSetTitle>
                  <CardSetSubject>{set.subject}</CardSetSubject>
                  
                  <CardSetDetails>
                    <CardCount>
                      <span>{set.totalCards}</span> cards
                    </CardCount>
                    <LastStudied>
                      Last studied: {formatDate(set.lastStudied)}
                    </LastStudied>
                  </CardSetDetails>
                  
                  <ProgressBarWrapper>
                    <ProgressLabel>
                      <span>Progress</span>
                      <span>{set.masteredCards}/{set.totalCards}</span>
                    </ProgressLabel>
                    <ProgressBar>
                      <ProgressFill width={getProgressPercentage(set.totalCards, set.masteredCards)} />
                    </ProgressBar>
                  </ProgressBarWrapper>
                  
                  <TagsContainer>
                    {set.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagsContainer>
                  
                  <ActionButtons>
                    <ActionButton 
                      onClick={() => startStudying(set.id)}
                      $primary
                    >
                      Study Now
                    </ActionButton>
                    <ActionButton>
                      <FiEdit />
                    </ActionButton>
                    <ActionButton>
                      <FiShare2 />
                    </ActionButton>
                  </ActionButtons>
                </CardSetBox>
              ))
            )}
          </CardSetsGrid>
        </>
      ) : (
        <>
          <StudyHeader>
            <BackButton onClick={backToSets}>
              <FiChevronLeft />
              <span>Back to Sets</span>
            </BackButton>
            <StudyTitle>{activeSet?.title}</StudyTitle>
            <StudyProgress>
              Card {currentCardIndex + 1} of {activeSetCards.length}
            </StudyProgress>
          </StudyHeader>
          
          <StudyControlsRow>
            <ProgressText>
              {masteredCards.size} of {activeSetCards.length} mastered 
              ({Math.round((masteredCards.size / activeSetCards.length) * 100)}%)
            </ProgressText>
            <StudyControls>
              <ControlButton 
                onClick={goToPrevCard} 
                disabled={currentCardIndex === 0}
              >
                <FiChevronLeft />
                <span>Previous</span>
              </ControlButton>
              <ControlButton 
                onClick={goToNextCard} 
                disabled={currentCardIndex === activeSetCards.length - 1}
              >
                <span>Next</span>
                <FiChevronRight />
              </ControlButton>
            </StudyControls>
          </StudyControlsRow>
          
          {activeSetCards.length > 0 && (
            <FlashcardContainer>
              <Flashcard
                onClick={() => handleFlipCard(activeSetCards[currentCardIndex].id)}
                layout
              >
                <CardFace
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: flippedCards.has(activeSetCards[currentCardIndex].id) ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <CardContent>
                    <CardText>{activeSetCards[currentCardIndex].question}</CardText>
                    <FlipPrompt>Click to flip</FlipPrompt>
                  </CardContent>
                </CardFace>
                
                <CardFace
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: flippedCards.has(activeSetCards[currentCardIndex].id) ? 360 : 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <CardContent>
                    <CardText>{activeSetCards[currentCardIndex].answer}</CardText>
                    <FlipPrompt>Click to flip</FlipPrompt>
                  </CardContent>
                </CardFace>
              </Flashcard>
              
              <CardActions>
                <ActionButton
                  onClick={() => toggleCardMastery(activeSetCards[currentCardIndex].id)}
                  $primary={masteredCards.has(activeSetCards[currentCardIndex].id)}
                >
                  {masteredCards.has(activeSetCards[currentCardIndex].id) ? (
                    <>
                      <FiX />
                      <span>Unmark as Mastered</span>
                    </>
                  ) : (
                    <>
                      <FiCheck />
                      <span>Mark as Mastered</span>
                    </>
                  )}
                </ActionButton>
                <ActionButton>
                  <FiEdit />
                  <span>Edit Card</span>
                </ActionButton>
              </CardActions>
            </FlashcardContainer>
          )}
        </>
      )}
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

const ControlsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.secondary};
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
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  
  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 12px 0;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  appearance: none;
  outline: none;
  cursor: pointer;
  min-width: 120px;
  width: 100%;
`;

const NewSetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  height: 42px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary}dd;
  }
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const CardSetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const CardSetBox = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardSetTitle = styled.h3`
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CardSetSubject = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CardSetDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CardCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const LastStudied = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ProgressBarWrapper = styled.div`
  margin-bottom: 16px;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ProgressBar = styled.div`
  height: 6px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.hover};
  border-radius: 3px;
  overflow: hidden;
`;

interface ProgressFillProps {
  width: number;
}

const ProgressFill = styled.div<ProgressFillProps>`
  height: 100%;
  width: ${props => props.width}%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  transition: width 0.3s ease;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.background.hover};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: 4px;
  font-size: 12px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

interface ActionButtonProps {
  $primary?: boolean;
}

const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: ${props => props.$primary ? '8px 16px' : '8px'};
  background: ${props => props.$primary ? props.theme.colors.primary : props.theme.colors.background.hover};
  color: ${props => props.$primary ? 'white' : props.theme.colors.text.primary};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: ${props => props.$primary ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s ease;
  flex: ${props => props.$primary ? '1' : 'none'};
  
  &:hover {
    background: ${props => props.$primary ? 
      `${props.theme.colors.primary}dd` : 
      props.theme.colors.border};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  
  p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const CreateNewButton = styled(NewSetButton)`
  margin: 0 auto;
`;

// Study view components
const StudyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StudyTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StudyProgress = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const StudyControlsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const ProgressText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const StudyControls = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.background.hover};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`;

const FlashcardContainer = styled.div`
  margin-bottom: 24px;
`;

const Flashcard = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 24px;
  perspective: 1000px;
  cursor: pointer;
`;

const CardFace = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 24px;
  will-change: transform;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const CardText = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FlipPrompt = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

const CardActions = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Flashcards; 