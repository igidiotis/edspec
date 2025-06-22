import React, { useState } from 'react';
import { CheckCircle, Share2 } from 'lucide-react';
import Button from '../components/Button';
import Toast from '../components/Toast';
import { useTranslation } from 'react-i18next';

const ThankYouScreen: React.FC = () => {
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: t('appTitle'),
      text: t('thankyou.shareDescription'),
      url: window.location.origin
    };

    if (navigator.share) {
      // Use native share on mobile devices
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Share was cancelled or failed
        console.log('Share cancelled or failed:', err);
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.origin);
        setShowToast(true);
      } catch (err) {
        // Fallback for older browsers
        console.log('Clipboard API failed, using fallback:', err);
        const textArea = document.createElement('textarea');
        textArea.value = window.location.origin;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setShowToast(true);
      }
    }
  };

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
      <div className="mt-10 space-y-4">
        <Button 
          onClick={handleShare}
          variant="primary"
        >
          <Share2 size={16} className="mr-2" />
          {t('thankyou.share')}
        </Button>
        <Button 
          onClick={() => window.location.reload()}
          variant="secondary"
        >
          {t('thankyou.startOver')}
        </Button>
      </div>
      <Toast 
        message={t('thankyou.urlCopied')}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default ThankYouScreen;