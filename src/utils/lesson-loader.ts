// src/utils/lesson-loader.ts

//Command: npm run dev

// src/utils/lesson-loader.ts

import { Lesson } from '@/types/lesson';
import { lessonModules, LessonId } from '@/generated/lesson-imports';
import { cache } from 'react';

// Cache for loaded lessons
let lessonsCache: Map<LessonId, Lesson> | null = null;

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

// Get all lessons using generated imports
async function loadLessons(): Promise<Map<LessonId, Lesson>> {
  // Return cached lessons if available
  if (lessonsCache) {
    return lessonsCache;
  }

  const lessons = new Map<LessonId, Lesson>();

  try {
    // Load all modules using the generated import map
    for (const [id, importFn] of Object.entries(lessonModules)) {
      try {
        const module = await importFn();
        const lesson = module.default;

        if (isLesson(lesson)) {
          lessons.set(id as LessonId, lesson);
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
    if (lessonId in lessonModules) {
      const module = await lessonModules[lessonId as LessonId]();
      if (isLesson(module.default)) {
        return module.default;
      }
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
  return id in lessonModules;
}