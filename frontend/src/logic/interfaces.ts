/**
 * Represents an answer to a quiz question.
 */
export interface Answer {
  text: string;
  is_correct: boolean;
  selected?: boolean;
}

/**
 * Represents a quiz question.
 */
export interface Question {
  id: number;
  content: string;
  category: string;
  xp: number;
  answers: Answer[];
}

export interface Quiz {
  content: Question[];
  current_index: number;
}

export interface CatAnswer {
  category: string;
  is_answered: boolean;
}

export interface Result {
  correct_num: number;
  cat_answered: CatAnswer[];
}

export interface LeaderboardEntry {
  position: number;
  username: string;
  xp: number;
  correct_count: number;
}

export interface Leaderboard {
  entries: LeaderboardEntry[];
}
