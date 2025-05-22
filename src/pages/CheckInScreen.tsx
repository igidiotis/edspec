import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

const CheckInScreen: React.FC = () => {
  const { setCurrentStep, checkInData, setCheckInData } = useApp();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    occupation: checkInData.occupation || '',
    otherOccupation: checkInData.otherOccupation || '',
    discipline: checkInData.discipline || ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckInData(formData);
    setCurrentStep('cards');
  };
  
  const isComplete = 
    formData.occupation && 
    (formData.occupation !== 'Other' || formData.otherOccupation) &&
    formData.discipline;
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-2">{t('checkin.title')}</h2>
      <p className="text-gray-600 mb-6">{t('checkin.intro')}</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
            {t('checkin.occupation')}
          </label>
          <select
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="" disabled>{t('checkin.occupationPlaceholder')}</option>
            <option value="Teacher">{t('checkin.teacher')}</option>
            <option value="Student">{t('checkin.student')}</option>
            <option value="Researcher">{t('checkin.researcher')}</option>
            <option value="Other">{t('checkin.other')}</option>
          </select>
        </div>

        {formData.occupation === 'Other' && (
          <div>
            <label htmlFor="otherOccupation" className="block text-sm font-medium text-gray-700 mb-1">
              {t('checkin.otherOccupation')}
            </label>
            <input
              type="text"
              id="otherOccupation"
              name="otherOccupation"
              value={formData.otherOccupation}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        )}

        <div>
          <label htmlFor="discipline" className="block text-sm font-medium text-gray-700 mb-1">
            {t('checkin.discipline')}
          </label>
          <input
            type="text"
            id="discipline"
            name="discipline"
            value={formData.discipline}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder={t('checkin.disciplinePlaceholder')}
            required
          />
        </div>
        
        <div className="flex justify-between mt-8">
          <Button 
            onClick={() => setCurrentStep('consent')} 
            variant="outline"
          >
            {t('back')}
          </Button>
          <Button 
            type="submit" 
            disabled={!isComplete}
          >
            {t('continue')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckInScreen;