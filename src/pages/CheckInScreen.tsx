import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';

const CheckInScreen: React.FC = () => {
  const { setCurrentStep, checkInData, setCheckInData } = useApp();
  
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
      <h2 className="text-xl font-semibold mb-2">Check-in</h2>
      <p className="text-gray-600 mb-6">Let's start with a quick check-in before we begin.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
            Occupation
          </label>
          <select
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select your occupation</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Researcher">Researcher</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {formData.occupation === 'Other' && (
          <div>
            <label htmlFor="otherOccupation" className="block text-sm font-medium text-gray-700 mb-1">
              Please specify your occupation
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
            Subject discipline
          </label>
          <input
            type="text"
            id="discipline"
            name="discipline"
            value={formData.discipline}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g. Education, engineering, mathematics"
            required
          />
        </div>
        
        <div className="flex justify-between mt-8">
          <Button 
            onClick={() => setCurrentStep('consent')} 
            variant="outline"
          >
            Back
          </Button>
          <Button 
            type="submit" 
            disabled={!isComplete}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckInScreen;