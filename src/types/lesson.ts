// Path: src\types

// Basic content types that can be used in lessons
export type DiagramType = 'circular-motion' | 'force-diagram' | 'projectile-motion';

export interface DiagramConfig {
  type: DiagramType;
  interactive?: boolean;
  // Add other diagram-specific configuration options here
}

// Different types of content blocks that can appear in a lesson
export type ContentBlock = {
  type: 'text';
  content: string;
} | {
  type: 'diagram';
  diagram: DiagramConfig;
} | {
  type: 'latex';
  content: string;
  display?: boolean; // true for display math, false for inline
};

// Question types
export interface BaseQuestion {
  question: string;
  explanation: string;
  hint?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: string[];
  correctAnswer: string;
}

export interface NumericQuestion extends BaseQuestion {
  type: 'numeric';
  correctAnswer: number;
  tolerance: number;
  units?: string;
}

export type Question = MultipleChoiceQuestion | NumericQuestion;

// Section structure
export interface LessonSection {
  type: 'content' | 'question';
  content?: ContentBlock[];
  question?: Question;
}

// Full lesson structure
export interface Lesson {
  id: string;
  title: string;
  description: string;
  tags: string[];
  estimatedTime: 'short' | 'medium' | 'long';
  sections: LessonSection[];
}

// Course structure
export interface Course {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface AlphanumericQuestion extends BaseQuestion {
  type: 'alphanumeric';
  correctAnswer: string;
  caseSensitive?: boolean;
}

// Update the Question type union
export type Question = MultipleChoiceQuestion | NumericQuestion | AlphanumericQuestion;
