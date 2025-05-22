export interface ScenarioCard {
  id: string;
  color: string;
  image: string;
}

const scenarioCards: ScenarioCard[] = [
  {
    id: 'wildcard',
    color: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'technology',
    color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'equity',
    color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'environment',
    color: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'personalization',
    color: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'global',
    color: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'skills',
    color: 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'assessment',
    color: 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200',
    image: 'https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'community',
    color: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200',
    image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=300',
  }
];

export default scenarioCards;