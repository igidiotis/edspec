import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import Notification from '../components/Notification';
import writingPrompts from '../data/writingPrompts';
import scenarioCards from '../data/scenarioCards';
import { useTranslation } from 'react-i18next';

const StoryWritingScreen: React.FC = () => {
  const { 
    setCurrentStep, 
    selectedCards, 
    storyContent, 
    setStoryContent 
  } = useApp();
  const { t } = useTranslation();
  const [wordCount, setWordCount] = useState(0);
  const [activePrompts, setActivePrompts] = useState<string[]>([]);
  const [dismissedPrompts, setDismissedPrompts] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    const count = storyContent.trim() 
      ? storyContent.trim().split(/\s+/).length 
      : 0;
    setWordCount(count);
  }, [storyContent]);
  
  useEffect(() => {
    const promptsToShow = writingPrompts
      .filter(prompt => {
        const isRelevantForCards = !prompt.cardIds || 
          prompt.cardIds.some(cardId => selectedCards.includes(cardId));
          
        return wordCount >= prompt.triggerWordCount && 
               isRelevantForCards &&
               !activePrompts.includes(prompt.id) &&
               !dismissedPrompts.includes(prompt.id);
      })
      .map(prompt => prompt.id);
    
    if (promptsToShow.length > 0) {
      setActivePrompts(prev => [...prev, ...promptsToShow]);
    }
  }, [wordCount, selectedCards, activePrompts, dismissedPrompts]);
  
  const handleDismissPrompt = (promptId: string) => {
    setActivePrompts(prev => prev.filter(id => id !== promptId));
    setDismissedPrompts(prev => [...prev, promptId]);
  };
  
  const getSelectedThemes = () => {
    return selectedCards
      .map(cardId => t(`cards.${cardId}.title`))
      .filter(Boolean)
      .join(` ${t('and')} `);
  };
  
  const handleSubmit = () => {
    if (wordCount < 50) {
      alert(t('writing.error'));
      return;
    }
    setCurrentStep('feedback');
  };
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-2">{t('writing.title')}</h2>
      <p className="text-gray-600 mb-6">
        {t('writing.intro', {
          inspiration: selectedCards.includes('wildcard') ? t('writing.ownVision') : getSelectedThemes()
        })}
      </p>
      
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="flex-grow">
          <div className="mb-4">
            <textarea
              ref={textareaRef}
              value={storyContent}
              onChange={(e) => setStoryContent(e.target.value)}
              className="w-full h-64 p-4 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder={t('writing.placeholder')}
            ></textarea>
            <div className="text-sm text-gray-500 mt-2 flex justify-between">
              <span>{t('writing.wordCount', { count: wordCount })}</span>
              <span>{t('writing.minWords')}</span>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              onClick={() => setCurrentStep('cards')} 
              variant="outline"
            >
              {t('back')}
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={wordCount < 50}
            >
              {t('writing.submit')}
            </Button>
          </div>
        </div>
        
        <div className="lg:w-72">
          <div className="sticky top-4 space-y-2">
            {activePrompts.map((promptId, index) => {
              return (
                <Notification
                  key={promptId}
                  title={t(`prompt.${promptId}.title`)}
                  message={t(`prompt.${promptId}.message`)}
                  onClose={() => handleDismissPrompt(promptId)}
                  delay={index * 300}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryWritingScreen;