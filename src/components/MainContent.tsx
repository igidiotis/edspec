import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import ConsentScreen from '../pages/ConsentScreen';
import CheckInScreen from '../pages/CheckInScreen';
import CardSelectionScreen from '../pages/CardSelectionScreen';
import StoryWritingScreen from '../pages/StoryWritingScreen';
import FeedbackScreen from '../pages/FeedbackScreen';
import ThankYouScreen from '../pages/ThankYouScreen';
import ProgressBar from './ProgressBar';
import { useTranslation, Trans } from 'react-i18next';
import LanguageModal from './LanguageModal';
import SwitchLanguageButton from './SwitchLanguageButton';

const MainContent: React.FC = () => {
  const { currentStep } = useApp();
  const { t, i18n } = useTranslation();
  const [showLangModal, setShowLangModal] = useState(false);
  const [showDualButtons, setShowDualButtons] = useState(false);
  
  useEffect(() => {
    // Show modal if no language is set in localStorage
    const storedLang = localStorage.getItem('i18nextLng');
    if (!storedLang || (storedLang !== 'en' && storedLang !== 'sv')) {
      setShowLangModal(true);
    }
  }, []);

  const handleSelectLanguage = (lang: 'en' | 'sv') => {
    i18n.changeLanguage(lang);
    setShowLangModal(false);
    localStorage.setItem('i18nextLng', lang);
  };

  const handleSwitchLanguage = () => {
    setShowLangModal(true);
  };

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
      <LanguageModal open={showLangModal} onSelect={handleSelectLanguage} />
      <SwitchLanguageButton onClick={handleSwitchLanguage} currentLang={i18n.language === 'sv' ? 'sv' : 'en'} />
      <header className="mb-8 pt-4">
        <h1 className="text-2xl font-medium text-center text-gray-800">
          {t('appTitle')}
        </h1>
        <ProgressBar percentage={getProgressPercentage()} />
      </header>
      <main style={{ filter: showLangModal ? 'blur(2px)' : undefined, pointerEvents: showLangModal ? 'none' : undefined }}>
        {renderCurrentStep()}
      </main>
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>
          <Trans i18nKey="footer">
            components={[
      <a href="https://www.kth.se/profile/gidiotis" target="_blank" rel="noopener noreferrer" />
    ]}
          </Trans>
        </p>
      </footer>
      {/* Floating Dual Help Button */}
      <div
        className="fixed bottom-4 right-4 z-50 flex flex-col items-end"
        onMouseEnter={() => setShowDualButtons(true)}
        onMouseLeave={() => setShowDualButtons(false)}
      >
        {showDualButtons ? (
          <div className="flex flex-col items-end gap-3 animate-fadeIn">
            <a
              href="https://www.kth.se/profile/gidiotis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-3xl shadow-lg transition-transform hover:scale-110 focus:outline-none mb-1"
              aria-label="Visit my website"
            >
              <span role="img" aria-label="website">🌐</span>
            </a>
            <a
              href="mailto:gidiotis@kth.se"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-3xl shadow-lg transition-transform hover:scale-110 focus:outline-none"
              aria-label={t('helpButton.label')}
            >
              <span role="img" aria-label="help">❓</span>
            </a>
          </div>
        ) : (
          <button
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-3xl shadow-lg transition-transform hover:scale-110 focus:outline-none"
            aria-label="More info"
            tabIndex={0}
            type="button"
          >
            <span role="img" aria-label="info">ℹ️</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MainContent;