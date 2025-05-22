import React from 'react';

interface SwitchLanguageButtonProps {
  onClick: () => void;
  currentLang: 'en' | 'sv';
}

const gradients = {
  en: 'bg-gradient-to-br from-blue-400 to-blue-600',
  sv: 'bg-gradient-to-br from-yellow-300 to-blue-500',
};

const flags = {
  en: '🇬🇧',
  sv: '🇸🇪',
};

const SwitchLanguageButton: React.FC<SwitchLanguageButtonProps> = ({ onClick, currentLang }) => {
  return (
    <button
      className={`fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 ${gradients[currentLang]}`}
      onClick={onClick}
      aria-label="Switch language"
    >
      <span className="text-2xl">{flags[currentLang]}</span>
      <span className="hidden sm:inline">{currentLang === 'en' ? 'English' : 'Svenska'}</span>
    </button>
  );
};

export default SwitchLanguageButton; 