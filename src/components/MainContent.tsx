import React from 'react';
import { useApp } from '../context/AppContext';
import ConsentScreen from '../pages/ConsentScreen';
import CheckInScreen from '../pages/CheckInScreen';
import CardSelectionScreen from '../pages/CardSelectionScreen';
import StoryWritingScreen from '../pages/StoryWritingScreen';
import FeedbackScreen from '../pages/FeedbackScreen';
import ThankYouScreen from '../pages/ThankYouScreen';
import ProgressBar from './ProgressBar';

const MainContent: React.FC = () => {
  const { currentStep } = useApp();
  
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'consent':
        return <ConsentScreen />;
      case 'checkin':
        return <CheckInScreen />;
      case 'cards':
        return <CardSelectionScreen />;
      case 'writing':
        return <StoryWritingScreen />;
      case 'feedback':
        return <FeedbackScreen />;
      case 'thanks':
        return <ThankYouScreen />;
      default:
        return <ConsentScreen />;
    }
  };

  // Calculate progress percentage based on current step
  const getProgressPercentage = () => {
    const steps: Record<string, number> = {
      'consent': 0,
      'checkin': 20,
      'cards': 40,
      'writing': 60,
      'feedback': 80,
      'thanks': 100
    };
    
    return steps[currentStep] || 0;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <header className="mb-8 pt-4">
        <h1 className="text-2xl font-medium text-center text-gray-800">
          Future of Education Research
        </h1>
        <ProgressBar percentage={getProgressPercentage()} />
      </header>
      <main>
        {renderCurrentStep()}
      </main>
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>© 2025 Education Research Initiative</p>
      </footer>
    </div>
  );
};

export default MainContent;