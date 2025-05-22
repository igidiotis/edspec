import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

const ThankYouScreen: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center animate-fadeIn">
      <div className="flex justify-center mb-6">
        <CheckCircle size={56} className="text-green-500" />
      </div>
      <h2 className="text-2xl font-semibold mb-4">{t('thankyou.title')}</h2>
      <div className="text-gray-600 space-y-4 mb-8">
        <p>{t('thankyou.appreciation')}</p>
        <p>{t('thankyou.recorded')}</p>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 max-w-md mx-auto">
        <h3 className="font-medium text-blue-800 mb-2">{t('thankyou.nextTitle')}</h3>
        <p className="text-sm text-blue-700">
          {t('thankyou.nextText')}
        </p>
      </div>
      <div className="mt-10">
        <Button 
          onClick={() => window.location.reload()}
          variant="secondary"
        >
          {t('thankyou.startOver')}
        </Button>
      </div>
    </div>
  );
};

export default ThankYouScreen;