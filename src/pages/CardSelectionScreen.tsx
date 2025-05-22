import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import ScenarioCard from '../components/ScenarioCard';
import scenarioCards from '../data/scenarioCards';

const CardSelectionScreen: React.FC = () => {
  const { setCurrentStep, selectedCards, setSelectedCards } = useApp();
  const [error, setError] = useState('');
  
  // Reset error when selection changes
  useEffect(() => {
    if (selectedCards.length > 0) {
      setError('');
    }
  }, [selectedCards]);
  
  const handleCardSelection = (cardId: string) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter(id => id !== cardId));
      return;
    }
    setSelectedCards([...selectedCards, cardId]);
  };

  const handleContinue = () => {
    if (selectedCards.length === 0) {
      setError('Please select at least one theme');
      return;
    }
    setCurrentStep('writing');
  };

  // Separate "Write freely" card from theme cards
  const writeFreely = scenarioCards.find(card => card.id === 'wildcard');
  const themeCards = scenarioCards.filter(card => card.id !== 'wildcard');
  
  // Split theme cards into two groups of 4
  const firstRowCards = themeCards.slice(0, 4);
  const secondRowCards = themeCards.slice(4, 8);
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-2">Select Themes</h2>
      <p className="text-gray-600 mb-6">
        Select one or more themes that you are interested in and will inspire your story about the future of education.
      </p>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}
      
      {writeFreely && (
        <div className="max-w-md mx-auto mb-8">
          <ScenarioCard
            key={writeFreely.id}
            card={writeFreely}
            isSelected={selectedCards.includes(writeFreely.id)}
            onClick={() => handleCardSelection(writeFreely.id)}
          />
        </div>
      )}
      
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {firstRowCards.map(card => (
            <ScenarioCard
              key={card.id}
              card={card}
              isSelected={selectedCards.includes(card.id)}
              onClick={() => handleCardSelection(card.id)}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondRowCards.map(card => (
            <ScenarioCard
              key={card.id}
              card={card}
              isSelected={selectedCards.includes(card.id)}
              onClick={() => handleCardSelection(card.id)}
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          onClick={() => setCurrentStep('checkin')} 
          variant="outline"
        >
          Back
        </Button>
        <Button 
          onClick={handleContinue}
          disabled={selectedCards.length === 0}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CardSelectionScreen;