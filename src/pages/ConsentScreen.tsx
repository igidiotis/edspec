import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';

const ConsentScreen: React.FC = () => {
  const { setCurrentStep, setHasConsented } = useApp();
  const [isChecked, setIsChecked] = useState(false);

  const handleConsent = () => {
    setHasConsented(true);
    setCurrentStep('checkin');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Research Participation Consent</h2>
      
      <div className="prose prose-sm mb-6">
        <p>Thank you for your interest in participating in our research on the future of education. Before proceeding, please read and agree to the following:</p>
        
        <div className="bg-gray-50 p-4 rounded-md my-4 text-sm">
          <h3 className="font-medium mb-2">Study Information</h3>
          <p>This research aims to collect speculative scenarios about the future of education. Your participation will involve:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Answering brief check-in questions</li>
            <li>Selecting scenario prompts</li>
            <li>Writing a short speculative story about the future of education</li>
            <li>Providing feedback on your experience</li>
          </ul>
          
          <h3 className="font-medium mt-4 mb-2">Data Use & Privacy</h3>
          <p>The stories and feedback you provide will be used for research purposes only. All data will be anonymized and kept confidential. You may withdraw your participation at any time.</p>
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
            I have read and agree to participate in this research study. I understand how my data will be used.
          </label>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={handleConsent} 
          disabled={!isChecked}
          className="min-w-[180px]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ConsentScreen;