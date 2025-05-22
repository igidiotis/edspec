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
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">{t('consent.title')}</h2>
      
      <div className="prose prose-sm mb-6">
        <p>{t('consent.intro')}</p>
        
        <div className="bg-gray-50 p-4 rounded-md my-4 text-sm">
          <h3 className="font-medium mb-2">{t('consent.studyInfoTitle')}</h3>
          <p>{t('consent.studyInfo')}</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('consent.studyInfo1')}</li>
            <li>{t('consent.studyInfo2')}</li>
            <li>{t('consent.studyInfo3')}</li>
            <li>{t('consent.studyInfo4')}</li>
          </ul>
          
          <h3 className="font-medium mt-4 mb-2">{t('consent.privacyTitle')}</h3>
          <p>{t('consent.privacy')}</p>
        </div>
        
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