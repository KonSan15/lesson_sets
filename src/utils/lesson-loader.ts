// src/utils/lesson-loader.ts

//Command: npm run dev

import { Lesson } from '@/types/lesson';
import { cache } from 'react';

// Cache for loaded lessons
let lessonsCache: Map<string, Lesson> | null = null;

// Type guard to verify if an object is a Lesson
function isLesson(obj: any): obj is Lesson {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.description === 'string' &&
    Array.isArray(obj.tags) &&
    Array.isArray(obj.sections) &&
    ['short', 'medium', 'long'].includes(obj.estimatedTime)
  );
}

// Get all lessons using static imports
async function loadLessons(): Promise<Map<string, Lesson>> {
  // Return cached lessons if available
  if (lessonsCache) {
    return lessonsCache;
  }

  const lessons = new Map<string, Lesson>();

  try {
    // Import all lessons statically
    // You'll need to manually update this list when adding new lessons
    const modules = {
      'circular-motion': () => import('@/data/lessons/circular-motion'),
      'newton-laws': () => import('@/data/lessons/newton-laws'),
      'richard-aoki-lesson': () => import('@/data/lessons/richard-aoki-lesson'),
      'richard-aoki-comprehensive-study': () => import('@/data/lessons/richard-aoki-comprehensive-study'),
      'aoki-asian-american-activism': () => import('@/data/lessons/aoki-asian-american-activism'),
      'latin-first-declension-basics': () => import('@/data/lessons/latin-first-declension-basics'),
      'cell-signaling-protein-kinase-cascade': () => import('@/data/lessons/cell-signaling-protein-kinase-cascade'),
      'python-classes-basics': () => import('@/data/lessons/python-classes-basics'),
      'latin-first-declension-ngd': () => import('@/data/lessons/latin-first-declension-ngd'),
      'catullus-seven-vocabulary': () => import('@/data/lessons/catullus-seven-vocabulary'),
      'triangle-types-mini': () => import('@/data/lessons/triangle-types-mini')

      // Add new lessons here
    };

    // Load all modules
    for (const [id, importFn] of Object.entries(modules)) {
      try {
        const module = await importFn();
        const lesson = module.default;

        if (isLesson(lesson)) {
          lessons.set(id, lesson);
        } else {
          console.warn(`Warning: Invalid lesson format in ${id}`);
        }
      } catch (error) {
        console.error(`Error loading lesson ${id}:`, error);
      }
    }
  } catch (error) {
    console.error('Error loading lessons:', error);
  }

  // Cache the results
  lessonsCache = lessons;
  return lessons;
}

// Load a specific lesson by ID
export const loadLesson = cache(async (lessonId: string): Promise<Lesson | null> => {
  try {
    // Try to load the lesson directly if we know its path
    const module = await import(`@/data/lessons/${lessonId}`).catch(() => null);
    if (module && isLesson(module.default)) {
      return module.default;
    }
    return null;
  } catch (error) {
    console.error(`Failed to load lesson ${lessonId}:`, error);
    return null;
  }
});

// Get all available lessons
export async function getAllLessons(): Promise<Lesson[]> {
  const lessons = await loadLessons();
  return Array.from(lessons.values());
}

// Get all lesson IDs
export async function getAllLessonIds(): Promise<string[]> {
  const lessons = await loadLessons();
  return Array.from(lessons.keys());
}

// Validate if a lesson ID exists
export async function isValidLessonId(id: string): Promise<boolean> {
  const lessons = await loadLessons();
  return lessons.has(id);
}