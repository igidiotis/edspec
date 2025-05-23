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
    id: 'assessment',
    color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    image: 'https://images.pexels.com/photos/7092398/pexels-photo-7092398.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'epistemology',
    color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    image: 'https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'personalization',
    color: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'bias',
    color: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200',
    image: 'https://images.pexels.com/photos/17151677/pexels-photo-17151677/free-photo-of-pink-and-blue-background-divided-diagonally-with-two-matching-colored-pencils-placed-on-opposite-colors-top-down-view-flat-lay-with-empty-space-for-text.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'surveillance',
    color: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'blurredboundaries',
    color: 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'humanrelationships',
    color: 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200',
    image: 'https://images.pexels.com/photos/18943748/pexels-photo-18943748/free-photo-of-best-friend-moments.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'sustainability',
    color: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=300',
  }
];

export default scenarioCards;