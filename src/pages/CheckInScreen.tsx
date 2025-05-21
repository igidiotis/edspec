import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';

interface Problem {
  id: string;
  label: string;
}

const problems: Problem[] = [
  { id: 'aesthetics', label: 'Aesthetics and Good Design' },
  { id: 'education', label: 'Education' },
  { id: 'energy', label: 'Energy' },
  { id: 'freedom', label: 'Freedom and Independence' },
  { id: 'community', label: 'Community and Family' },
  { id: 'justice', label: 'Justice, Equality, and Equity' },
  { id: 'health', label: 'Health' },
  { id: 'industry', label: 'Industry and Economy' },
  { id: 'mobility', label: 'Mobility' },
  { id: 'safety', label: 'Safety and Security' },
  { id: 'environment', label: 'Environment and Climate' },
  { id: 'living', label: 'Living Space' }
];

const CheckInScreen: React.FC = () => {
  const { setCurrentStep, checkInData, setCheckInData } = useApp();
  
  const [formData, setFormData] = useState({
    mood: checkInData.mood || '',
    workplace: checkInData.workplace || '',
    country: checkInData.country || '',
    selectedProblems: checkInData.selectedProblems || []
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleProblemChange = (problemId: string) => {
    setFormData(prev => {
      const currentProblems = prev.selectedProblems;
      if (currentProblems.includes(problemId)) {
        return {
          ...prev,
          selectedProblems: currentProblems.filter(id => id !== problemId)
        };
      }
      if (currentProblems.length < 3) {
        return {
          ...prev,
          selectedProblems: [...currentProblems, problemId]
        };
      }
      return prev;
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckInData(formData);
    setCurrentStep('cards');
  };
  
  const isComplete = formData.mood && formData.workplace && formData.country && formData.selectedProblems.length > 0;
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-2">Check-in</h2>
      <p className="text-gray-600 mb-6">Let's start with a quick check-in before we begin.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="mood" className="block text-sm font-medium text-gray-700 mb-1">
            How are you feeling today?
          </label>
          <select
            id="mood"
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Excited">Excited</option>
            <option value="Curious">Curious</option>
            <option value="Neutral">Neutral</option>
            <option value="Tired">Tired</option>
            <option value="Anxious">Anxious</option>
          </select>
        </div>

        <div>
          <label htmlFor="workplace" className="block text-sm font-medium text-gray-700 mb-1">
            What type of workplace are you from?
          </label>
          <input
            type="text"
            id="workplace"
            name="workplace"
            value={formData.workplace}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., University, High School, Research Institute"
            required
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Which country do you work in?
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., United States, Germany, Japan"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Which problems are most important to address today? (Select up to 3)
          </label>
          <div className="grid grid-cols-2 gap-3">
            {problems.map(problem => (
              <label
                key={problem.id}
                className="flex items-start space-x-2 p-2 rounded hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={formData.selectedProblems.includes(problem.id)}
                  onChange={() => handleProblemChange(problem.id)}
                  className="mt-1 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{problem.label}</span>
              </label>
            ))}
          </div>
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