import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  title: string;
  message: string;
  onClose: () => void;
  delay?: number;
}

const Notification: React.FC<NotificationProps> = ({ 
  title, 
  message, 
  onClose,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay the appearance for staggered effect
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg border border-gray-200 p-4 mb-3 max-w-xs w-full transition-all duration-300 transform ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-10 opacity-0'
      }`}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-1">{message}</p>
    </div>
  );
};

export default Notification;