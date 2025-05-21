import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const ThankYouScreen: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center animate-fadeIn">
      <div className="flex justify-center mb-6">
        <CheckCircle size={56} className="text-green-500" />
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
      
      <div className="text-gray-600 space-y-4 mb-8">
        <p>
          Your contribution to this research on the future of education is greatly appreciated. 
          Your story and feedback will help us better understand perspectives on educational futures.
        </p>
        <p>
          Your responses have been recorded successfully.
        </p>
      </div>
      
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 max-w-md mx-auto">
        <h3 className="font-medium text-blue-800 mb-2">What happens next?</h3>
        <p className="text-sm text-blue-700">
          The research team will analyze the collected stories and feedback to identify emerging themes and insights about desired futures for education.
        </p>
      </div>
      
      <div className="mt-10">
        <Button 
          onClick={() => window.location.reload()}
          variant="secondary"
        >
          Start Over
        </Button>
      </div>
    </div>
  );
};

export default ThankYouScreen;