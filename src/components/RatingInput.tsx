import React from 'react';

interface RatingInputProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
  max?: number;
  label?: string;
  descriptions?: string[];
}

const RatingInput: React.FC<RatingInputProps> = ({
  name,
  value,
  onChange,
  max = 5,
  label,
  descriptions
}) => {
  const ratings = Array.from({ length: max }, (_, i) => i + 1);
  
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      
      <div className="flex items-center justify-between">
        {ratings.map(rating => (
          <div key={rating} className="flex flex-col items-center">
            <button
              type="button"
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                transition-all duration-200 focus:outline-none
                ${value >= rating 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}
              `}
              onClick={() => onChange(rating)}
              aria-label={`Rate ${rating} out of ${max}`}
            >
              {rating}
            </button>
            
            {descriptions && descriptions.length === max && (
              <span className={`text-xs mt-1 text-center transition-opacity duration-200 ${value === rating ? 'opacity-100' : 'opacity-50'}`}>
                {descriptions[rating - 1]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingInput;