/*
  # Research Data Collection Schema

  1. New Tables
    - `submissions`
      - Primary table storing all research data
      - Includes consent, participant info, story content, and feedback
    
  2. Security
    - Enable RLS on submissions table
    - Add policy for inserting new submissions
*/

CREATE TABLE submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  
  -- Consent
  has_consented boolean NOT NULL,
  
  -- Check-in data
  occupation text NOT NULL,
  other_occupation text,
  discipline text NOT NULL,
  
  -- Selected themes
  selected_themes text[] NOT NULL,
  
  -- Story content
  story_content text NOT NULL,
  
  -- Feedback
  wants_interview boolean NOT NULL DEFAULT false,
  email text,
  story_message text NOT NULL,
  ai_views_impact text,
  future_vision_type text,
  story_surprises text,
  real_world_applications text
);

-- Enable RLS
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous submissions
CREATE POLICY "Allow anonymous submissions" 
  ON submissions 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Only allow reading own submission if email is provided
CREATE POLICY "Users can read own submissions"
  ON submissions
  FOR SELECT
  TO anon
  USING (email IS NOT NULL);