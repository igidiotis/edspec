import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import RatingInput from '../components/RatingInput';

const FeedbackScreen: React.FC = () => {
  const { setCurrentStep, feedbackData, setFeedbackData, selectedCards, storyContent } = useApp();
  
  const [formData, setFormData] = useState({
    overallExperience: feedbackData.overallExperience || 3,
    futureThinking: feedbackData.futureThinking || 3,
    cardSelection: feedbackData.cardSelection || '',
    storyInfluences: feedbackData.storyInfluences || '',
    personalBackground: feedbackData.personalBackground || '',
    futureChallenges: feedbackData.futureChallenges || '',
    additionalComments: feedbackData.additionalComments || ''
  });
  
  const handleRatingChange = (field: 'overallExperience' | 'futureThinking', value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackData(formData);
    setCurrentStep('thanks');
  };
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-2">Share Your Feedback</h2>
      <p className="text-gray-600 mb-6">
        Help us understand your experience and perspective on the future of education.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <RatingInput
            name="overallExperience"
            value={formData.overallExperience}
            onChange={(value) => handleRatingChange('overallExperience', value)}
            label="How would you rate your overall experience with this tool?"
            descriptions={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
          />
          
          <RatingInput
            name="futureThinking"
            value={formData.futureThinking}
            onChange={(value) => handleRatingChange('futureThinking', value)}
            label="How effective was this exercise in helping you think about the future of education?"
            descriptions={["Not Effective", "Slightly", "Moderately", "Very", "Extremely"]}
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What influenced your choice of scenario cards?
            </label>
            <textarea
              name="cardSelection"
              value={formData.cardSelection}
              onChange={handleTextChange}
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Please explain what drew you to your chosen scenarios..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What personal experiences or background knowledge influenced your story?
            </label>
            <textarea
              name="personalBackground"
              value={formData.personalBackground}
              onChange={handleTextChange}
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Tell us about the experiences that shaped your vision..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What do you see as the main challenges in achieving the future you described?
            </label>
            <textarea
              name="futureChallenges"
              value={formData.futureChallenges}
              onChange={handleTextChange}
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="What obstacles might need to be overcome..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Any additional thoughts or feedback about this experience?
            </label>
            <textarea
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleTextChange}
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Share any other thoughts or suggestions..."
            ></textarea>
          </div>
        </div>
        
        <div className="flex justify-between pt-4">
          <Button 
            onClick={() => setCurrentStep('writing')} 
            variant="outline"
          >
            Back
          </Button>
          <Button type="submit">
            Submit Feedback
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackScreen;