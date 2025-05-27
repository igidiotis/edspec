import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

const ConsentScreen: React.FC = () => {
  const { setCurrentStep, setHasConsented } = useApp();
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation();

  const handleConsent = () => {
    setHasConsented(true);
    setCurrentStep('checkin');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">{t('consent.title')}</h2>
      <div className="mb-2">
        <div className="bg-blue-50 text-blue-900 rounded px-3 py-2 text-sm font-medium mb-2 text-center">
          {t('consent.scrollToConsent')}
        </div>
      </div>
      <div className="mb-6">
        <div className="bg-gray-50 p-8 rounded-md my-4 text-base text-justify prose prose-base prose-ul:pl-6 prose-li:marker:text-blue-500" style={{ fontSize: '1.08rem', lineHeight: '2.1', textAlign: 'justify' }}
          dangerouslySetInnerHTML={{ __html: `${t('consent.intro')}<br/><br/>${t('consent.fullText')}` }}
        />
        <div className="flex items-start mt-6">
          <div className="flex items-center h-5">
            <input
              id="consent"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
          </div>
          <label htmlFor="consent" className="ml-3 text-sm font-medium text-gray-700">
            {t('consent.checkbox')}
          </label>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button 
          onClick={handleConsent} 
          disabled={!isChecked}
          className="min-w-[180px]"
        >
          {t('continue')}
        </Button>
      </div>
    </div>
  );
};

export default ConsentScreen;