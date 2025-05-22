import React from 'react';
import { ScenarioCard as ScenarioCardType } from '../data/scenarioCards';
import { useTranslation } from 'react-i18next';

interface ScenarioCardProps {
  card: ScenarioCardType;
  isSelected: boolean;
  onClick: () => void;
  isDisabled?: boolean;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ 
  card, 
  isSelected, 
  onClick,
  isDisabled = false
}) => {
  const { t } = useTranslation();
  return (
    <div 
      className={`
        border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-200
        ${card.color}
        ${isSelected ? 'ring-2 ring-blue-500 scale-[1.02]' : 'hover:scale-[1.01]'}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      onClick={isDisabled ? undefined : onClick}
      aria-selected={isSelected}
      tabIndex={isDisabled ? -1 : 0}
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={card.image} 
          alt={t(`cards.${card.id}.title`)}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2">{t(`cards.${card.id}.title`)}</h3>
        <p className="text-sm text-gray-700">{t(`cards.${card.id}.description`)}</p>
        <div className="mt-3 text-right">
          {isSelected ? (
            <span className="inline-flex items-center text-sm font-medium text-blue-500">
              {t('cards.selected')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
          ) : (
            <span className="text-sm text-gray-500">
              {t('cards.selectCard')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScenarioCard;