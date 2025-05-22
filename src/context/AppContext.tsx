import React, { createContext, useContext, useState } from 'react';

export type Step = 'consent' | 'checkin' | 'cards' | 'writing' | 'feedback' | 'thanks';

interface CheckInData {
  occupation: string;
  otherOccupation: string;
  discipline: string;
}

interface FeedbackData {
  overallExperience: number;
  futureThinking: number;
  cardSelection: string;
  storyInfluences: string;
  personalBackground: string;
  futureChallenges: string;
  additionalComments: string;
}

interface AppContextType {
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
  hasConsented: boolean;
  setHasConsented: (hasConsented: boolean) => void;
  checkInData: CheckInData;
  setCheckInData: (data: CheckInData) => void;
  selectedCards: string[];
  setSelectedCards: (cards: string[]) => void;
  storyContent: string;
  setStoryContent: (content: string) => void;
  feedbackData: FeedbackData;
  setFeedbackData: (data: FeedbackData) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<Step>('consent');
  const [hasConsented, setHasConsented] = useState(false);
  const [checkInData, setCheckInData] = useState<CheckInData>({
    occupation: '',
    otherOccupation: '',
    discipline: ''
  });
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [storyContent, setStoryContent] = useState('');
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    overallExperience: 3,
    futureThinking: 3,
    cardSelection: '',
    storyInfluences: '',
    personalBackground: '',
    futureChallenges: '',
    additionalComments: '',
  });

  const value = {
    currentStep,
    setCurrentStep,
    hasConsented,
    setHasConsented,
    checkInData,
    setCheckInData,
    selectedCards,
    setSelectedCards,
    storyContent,
    setStoryContent,
    feedbackData,
    setFeedbackData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};