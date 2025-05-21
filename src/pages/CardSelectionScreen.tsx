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
    // If card is already selected, remove it
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter(id => id !== cardId));
      return;
    }
    
    // Enforce maximum of 2 cards
    if (selectedCards.length >= 2) {
      setError('Please select a maximum of 2 cards');
      return;
    }
    
    // Add the card to selected cards
    setSelectedCards([...selectedCards, cardId]);
  };

  const handleContinue = () => {
    // Validate selection
    if (selectedCards.length === 0) {
      setError('Please select at least one card');
      return;
    }
    
    // Continue to next step
    setCurrentStep('writing');
  };
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-2">Select Scenario Cards</h2>
      <p className="text-gray-600 mb-6">
        Select one or two cards that will inspire your story about the future of education.
      </p>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {scenarioCards.map(card => (
          <ScenarioCard
            key={card.id}
            card={card}
            isSelected={selectedCards.includes(card.id)}
            onClick={() => handleCardSelection(card.id)}
          />
        ))}
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