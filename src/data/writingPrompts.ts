export interface WritingPrompt {
  id: string;
  title: string;
  message: string;
  triggerWordCount: number;
  cardIds?: string[];
}

const writingPrompts: WritingPrompt[] = [
  {
    id: 'start',
    title: 'Getting Started',
    message: 'Consider starting with a specific time period or setting for your future scenario.',
    triggerWordCount: 0
  },
  {
    id: 'character',
    title: 'Add Characters',
    message: 'Consider introducing a student, teacher, or other stakeholder experiencing this future.',
    triggerWordCount: 40
  },
  {
    id: 'challenge',
    title: 'Introduce a Challenge',
    message: 'What obstacles or tensions exist in this educational future?',
    triggerWordCount: 100
  },
  {
    id: 'solution',
    title: 'Explore Solutions',
    message: 'How might stakeholders navigate or resolve these challenges?',
    triggerWordCount: 150
  },
  {
    id: 'tech_detail',
    title: 'Technology Details',
    message: 'What specific technologies are used in this future classroom?',
    triggerWordCount: 80,
    cardIds: ['technology', 'personalization']
  },
  {
    id: 'equity_detail',
    title: 'Equity Considerations',
    message: 'How does this future address issues of access and opportunity?',
    triggerWordCount: 80,
    cardIds: ['equity', 'global']
  },
  {
    id: 'environment_detail',
    title: 'Environmental Impact',
    message: 'How does education connect to sustainability in this future?',
    triggerWordCount: 80,
    cardIds: ['environment', 'community']
  },
  {
    id: 'skills_detail',
    title: 'Future Skills',
    message: 'What specific skills are valued and taught in this future?',
    triggerWordCount: 80,
    cardIds: ['skills', 'assessment']
  },
  {
    id: 'reflection',
    title: 'Wrap Up',
    message: 'Consider ending with a reflection on what this future means for education.',
    triggerWordCount: 220
  }
];

export default writingPrompts;