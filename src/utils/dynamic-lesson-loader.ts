// src/utils/dynamic-lesson-loader.ts
/*
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Lesson, Question, ContentBlock } from '@/types/lesson';
import { z } from 'zod';

// Updated validation schema with optional fields
const lessonSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  prerequisites: z.array(z.string()).optional(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  estimatedMinutes: z.number().optional(),
  sections: z.array(z.object({
    type: z.enum(['content', 'question']),
    content: z.array(z.object({
      type: z.enum(['text', 'diagram', 'latex']),
      content: z.string().optional(),
      diagram: z.object({
        type: z.string(),
        interactive: z.boolean().optional()
      }).optional(),
      display: z.boolean().optional()
    })).optional(),
    question: z.object({
      type: z.enum(['multiple-choice', 'numeric']),
      question: z.string(),
      options: z.array(z.string()).optional(),
      correctAnswer: z.union([z.string(), z.number()]),
      explanation: z.string(),
      hint: z.string().optional(),
      tolerance: z.number().optional(),
      units: z.string().optional()
    }).optional()
  }))
});

function parseMarkdownLesson(content: string): Lesson {
  const sections: any[] = [];
  let currentSection: any = {
    type: 'content',
    content: []
  };

  // Split content by lines
  const lines = content.split('\n');
  let inQuestion = false;
  let questionData: any = {};
  let questionContent = '';

  for (let line of lines) {
    // Handle question blocks
    if (line.startsWith(':::question')) {
      inQuestion = true;
      const [, questionType] = line.split(':::question ');
      questionData = { type: questionType.trim() };
      continue;
    }

    if (line.startsWith(':::continue')) {
      // Save current content section and start a new one
      if (currentSection.content.length > 0) {
        sections.push({ ...currentSection });
        currentSection = {
          type: 'content',
          content: []
        };
      }
      continue;
    }

    if (line.startsWith(':::') && inQuestion) {
      // End of question block
      inQuestion = false;
      
      // Format question based on type
      const question: Question = {
        type: questionData.type,
        question: questionContent.trim(),
        ...(questionData.type === 'multiple-choice' && {
          options: questionData.options
        }),
        correctAnswer: questionData.correct,
        explanation: questionData.explanation,
        hint: questionData.hint,
        ...(questionData.type === 'numeric' && {
          tolerance: parseFloat(questionData.tolerance)
        })
      };

      sections.push({
        type: 'question',
        question
      });

      questionData = {};
      questionContent = '';
      continue;
    }

    if (inQuestion) {
      // Parse question properties
      if (line.startsWith('correct:')) {
        questionData.correct = line.split('correct:')[1].trim();
      } else if (line.startsWith('explanation:')) {
        questionData.explanation = line.split('explanation:')[1].trim();
      } else if (line.startsWith('hint:')) {
        questionData.hint = line.split('hint:')[1].trim();
      } else if (line.startsWith('tolerance:')) {
        questionData.tolerance = line.split('tolerance:')[1].trim();
      } else if (line.trim().match(/^[A-D]\)/)) {
        // Parse multiple choice options
        if (!questionData.options) questionData.options = [];
        questionData.options.push(line.split(')')[1].trim());
      } else if (line.trim()) {
        questionContent += line + '\n';
      }
    } else {
      // Handle regular content
      if (line.includes('$')) {
        // Handle LaTeX
        const isDisplay = line.includes('$$');
        currentSection.content.push({
          type: 'latex',
          content: line.replace(/\$/g, ''),
          display: isDisplay
        });
      } else if (line.trim()) {
        currentSection.content.push({
          type: 'text',
          content: line
        });
      }
    }
  }

  // Add final content section if not empty
  if (currentSection.content.length > 0) {
    sections.push(currentSection);
  }

  // Parse frontmatter
  const { data: frontmatter } = matter(content);

  // Extract title from first heading if not in frontmatter
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = frontmatter.title || (titleMatch ? titleMatch[1] : 'Untitled Lesson');

  // Parse tags and prerequisites
  const tags = frontmatter.tags ? 
    (typeof frontmatter.tags === 'string' ? 
      frontmatter.tags.split(',').map(t => t.trim()) : 
      frontmatter.tags) :
    [];

  const prerequisites = frontmatter.prerequisites ?
    (typeof frontmatter.prerequisites === 'string' ?
      frontmatter.prerequisites.split(',').map(p => p.trim()) :
      frontmatter.prerequisites) :
    [];

  return {
    id: frontmatter.id || path.basename(content, '.md'),
    title,
    description: frontmatter.description,
    tags,
    prerequisites,
    difficulty: frontmatter.difficulty,
    estimatedMinutes: frontmatter.estimatedMinutes,
    sections
  };
}

export async function loadAllLessons(): Promise<Lesson[]> {
  const lessonsDir = path.join(process.cwd(), 'src/data/lessons');
  const lessons: Lesson[] = [];
  
  try {
    const files = await fs.readdir(lessonsDir);
    
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      
      try {
        const filePath = path.join(lessonsDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        
        const lessonData = parseMarkdownLesson(content);
        const validatedLesson = lessonSchema.parse(lessonData);
        lessons.push(validatedLesson);
        
      } catch (error) {
        console.error(`Error loading lesson from ${file}:`, error);
      }
    }
    
    return lessons;
    
  } catch (error) {
    console.error('Error reading lessons directory:', error);
    return [];
  }
}

export async function loadLesson(lessonId: string): Promise<Lesson | null> {
  try {
    const lessons = await loadAllLessons();
    return lessons.find(lesson => lesson.id === lessonId) || null;
  } catch (error) {
    console.error(`Error loading lesson ${lessonId}:`, error);
    return null;
  }
}
  */