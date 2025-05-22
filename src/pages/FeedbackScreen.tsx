import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import { Download } from 'lucide-react';

const FeedbackScreen: React.FC = () => {
  const { setCurrentStep, storyContent } = useApp();
  
  const [formData, setFormData] = useState({
    wantsInterview: false,
    email: '',
    storyMessage: '',
    aiViewsImpact: '',
    futureVisionType: '',
    storySurprises: '',
    realWorldApplications: ''
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      wantsInterview: e.target.checked
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDownloadStory = () => {
    const blob = new Blob([storyContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-story-future-of-ai-in-education.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.storyMessage) {
      alert('Please provide a message or insight about your story.');
      return;
    }

    if (formData.wantsInterview && !formData.email) {
      alert('Email is required if you want to participate in interviews.');
      return;
    }

    setCurrentStep('thanks');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-2">Share Your Feedback</h2>
      <p className="text-gray-600 mb-6">
        Help us understand your perspective on the future of AI in education.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-2 p-4 bg-gray-50 rounded-lg">
            <input
              type="checkbox"
              id="wantsInterview"
              checked={formData.wantsInterview}
              onChange={handleCheckboxChange}
              className="mt-1 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="wantsInterview" className="text-sm">
              I want to be further contacted to participate in short interviews or focus group discussions related to the topic of AI and education
            </label>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required={formData.wantsInterview}
            />
            {!formData.wantsInterview && (
              <p className="mt-1 text-sm text-gray-500">
                Providing your email address will only be used for communications related to this research and will not undermine the anonymity of the data collected through the tool.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="storyMessage" className="block text-sm font-medium text-gray-700 mb-1">
              In one sentence: What message or insight do you think your story sends about the future of education? *
            </label>
            <textarea
              id="storyMessage"
              name="storyMessage"
              value={formData.storyMessage}
              onChange={handleInputChange}
              rows={2}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="aiViewsImpact" className="block text-sm font-medium text-gray-700 mb-1">
              How did writing a fictional scenario shape or shift your views about AI in education?
            </label>
            <textarea
              id="aiViewsImpact"
              name="aiViewsImpact"
              value={formData.aiViewsImpact}
              onChange={handleInputChange}
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="futureVisionType" className="block text-sm font-medium text-gray-700 mb-1">
              Did your story reflect a utopian, dystopian, or hybrid vision of the future? Why do you think that is?
            </label>
            <textarea
              id="futureVisionType"
              name="futureVisionType"
              value={formData.futureVisionType}
              onChange={handleInputChange}
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="storySurprises" className="block text-sm font-medium text-gray-700 mb-1">
              What surprised you about the story you created or the direction it took?
            </label>
            <textarea
              id="storySurprises"
              name="storySurprises"
              value={formData.storySurprises}
              onChange={handleInputChange}
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="realWorldApplications" className="block text-sm font-medium text-gray-700 mb-1">
              How might fictional scenarios like the one you created be used in real-world educational planning or policy-making?
            </label>
            <textarea
              id="realWorldApplications"
              name="realWorldApplications"
              value={formData.realWorldApplications}
              onChange={handleInputChange}
              rows={3}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
          <Button 
            onClick={handleDownloadStory}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            <Download size={16} className="mr-2" />
            Download Your Story
          </Button>
          
          <div className="flex gap-4 w-full sm:w-auto">
            <Button 
              onClick={() => setCurrentStep('writing')} 
              variant="outline"
              className="flex-1 sm:flex-initial"
            >
              Back
            </Button>
            <Button 
              type="submit"
              className="flex-1 sm:flex-initial"
            >
              Submit Feedback
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackScreen;