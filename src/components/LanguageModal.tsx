import React from 'react';

interface LanguageModalProps {
  open: boolean;
  onSelect: (lang: 'en' | 'sv') => void;
}

const gradients = {
  en: 'bg-gradient-to-br from-blue-400 to-blue-600',
  sv: 'bg-gradient-to-br from-yellow-300 to-blue-500',
};

const flags = {
  en: '🇬🇧',
  sv: '🇸🇪',
};

const labels = {
  en: 'English',
  sv: 'Svenska',
};

const LanguageModal: React.FC<LanguageModalProps> = ({ open, onSelect }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose your language</h2>
        <div className="flex flex-col gap-6">
          <button
            className={`flex items-center justify-center gap-3 py-4 rounded-xl text-xl font-semibold text-white shadow-lg transition-transform hover:scale-105 ${gradients.en}`}
            onClick={() => onSelect('en')}
          >
            <span className="text-3xl">{flags.en}</span> {labels.en}
          </button>
          <button
            className={`flex items-center justify-center gap-3 py-4 rounded-xl text-xl font-semibold text-white shadow-lg transition-transform hover:scale-105 ${gradients.sv}`}
            onClick={() => onSelect('sv')}
          >
            <span className="text-3xl">{flags.sv}</span> {labels.sv}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal; 