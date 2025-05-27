export interface WritingPrompt {
  id: string;
  triggerWordCount: number;
  cardIds?: string[];
}

const writingPrompts: WritingPrompt[] = [
  { id: 'start', triggerWordCount: 0 },
  { id: 'character', triggerWordCount: 15 },
  { id: 'challenge', triggerWordCount: 40 },
  { id: 'solution', triggerWordCount: 90 },
  { id: 'tech_detail', triggerWordCount: 60, cardIds: ['technology', 'personalization'] },
  { id: 'equity_detail', triggerWordCount: 60, cardIds: ['equity', 'global'] },
  { id: 'environment_detail', triggerWordCount: 60, cardIds: ['environment', 'community'] },
  { id: 'skills_detail', triggerWordCount: 60, cardIds: ['skills', 'assessment'] },
  { id: 'reflection', triggerWordCount: 100 },
];

export default writingPrompts;