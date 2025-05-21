export interface ScenarioCard {
  id: string;
  title: string;
  description: string;
  color: string;
  image: string;
}

const scenarioCards: ScenarioCard[] = [
  {
    id: 'technology',
    title: 'Technology Integration',
    description: 'Imagine a future where technology has transformed how students learn and interact with educational content.',
    color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'equity',
    title: 'Educational Equity',
    description: 'Envision a future educational system designed to address and eliminate disparities in access and outcomes.',
    color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'environment',
    title: 'Environmental Education',
    description: 'Consider a world where education is deeply connected to environmental stewardship and sustainability.',
    color: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'personalization',
    title: 'Personalized Learning',
    description: 'Picture education tailored to each student\'s unique needs, interests, pace, and learning style.',
    color: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'global',
    title: 'Global Classrooms',
    description: 'Imagine learning environments that transcend geographical boundaries and connect students worldwide.',
    color: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'skills',
    title: 'Future Skills Focus',
    description: 'Consider education centered around developing skills for jobs and challenges that don\'t yet exist.',
    color: 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'community',
    title: 'Community-Based Learning',
    description: 'Envision education deeply integrated with local communities, problems, and opportunities.',
    color: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200',
    image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'assessment',
    title: 'Alternative Assessment',
    description: 'Picture a world where traditional tests are replaced by new ways of measuring learning and growth.',
    color: 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200',
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'wildcard',
    title: 'Create Your Own',
    description: 'Design your own future education scenario based on an aspect that interests you.',
    color: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=300',
  }
];

export default scenarioCards;