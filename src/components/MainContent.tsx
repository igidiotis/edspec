import React from 'react';
import { useApp } from '../context/AppContext';
import ConsentScreen from '../pages/ConsentScreen';
import CheckInScreen from '../pages/CheckInScreen';
import CardSelectionScreen from '../pages/CardSelectionScreen';
import StoryWritingScreen from '../pages/StoryWritingScreen';
import FeedbackScreen from '../pages/FeedbackScreen';
import ThankYouScreen from '../pages/ThankYouScreen';
import ProgressBar from './ProgressBar';
import { useTranslation, Trans } from 'react-i18next';

const MainContent: React.FC = () => {
  const { currentStep } = useApp();
  const { t, i18n } = useTranslation();
  
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

  const handleLanguageSwitch = () => {
    i18n.changeLanguage(i18n.language === 'sv' ? 'en' : 'sv');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <header className="mb-8 pt-4">
        <h1 className="text-2xl font-medium text-center text-gray-800">
          {t('appTitle')}
        </h1>
        <div className="flex justify-center mt-2">
          <button
            className="text-blue-600 underline text-sm focus:outline-none"
            onClick={handleLanguageSwitch}
          >
            {t('swedishVersion')}
          </button>
        </div>
        <ProgressBar percentage={getProgressPercentage()} />
      </header>
      <main>
        {renderCurrentStep()}
      </main>
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>
          <Trans i18nKey="footer">
            2025 Created by <a href="mailto:gidiotis@kth.se" target="_blank">Iosif Gidiotis</a>
          </Trans>
        </p>
      </footer>
    </div>
  );
};

export default MainContent;