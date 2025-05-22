export interface WritingPrompt {
  id: string;
  triggerWordCount: number;
  cardIds?: string[];
}

const writingPrompts: WritingPrompt[] = [
  { id: 'start', triggerWordCount: 0 },
  { id: 'character', triggerWordCount: 40 },
  { id: 'challenge', triggerWordCount: 100 },
  { id: 'solution', triggerWordCount: 150 },
  { id: 'tech_detail', triggerWordCount: 80, cardIds: ['technology', 'personalization'] },
  { id: 'equity_detail', triggerWordCount: 80, cardIds: ['equity', 'global'] },
  { id: 'environment_detail', triggerWordCount: 80, cardIds: ['environment', 'community'] },
  { id: 'skills_detail', triggerWordCount: 80, cardIds: ['skills', 'assessment'] },
  { id: 'reflection', triggerWordCount: 220 },
];

export default writingPrompts;