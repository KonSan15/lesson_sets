// src/hooks/useLessonProgress.ts

import { useState, useEffect } from 'react';
import { Lesson } from '@/types/lesson';
import { loadLesson } from '@/utils/lesson-loader';

interface UseLessonProgressState {
  lesson: Lesson | null;
  loading: boolean;
  error: string | null;
  currentSectionIndex: number;
  maxVisibleSection: number;
  isComplete: boolean;
  completedSections: Set<number>;
}

interface UseLessonProgressActions {
  proceedToNext: () => void;
  completeSection: (index: number) => void;
  jumpToSection: (index: number) => void;
  resetProgress: () => void;
  completeLesson: () => void;  // Added this action
}

export function useLessonProgress(lessonId: string): [UseLessonProgressState, UseLessonProgressActions] {
  const [state, setState] = useState<UseLessonProgressState>({
    lesson: null,
    loading: true,
    error: null,
    currentSectionIndex: 0,
    maxVisibleSection: 0,
    isComplete: false,
    completedSections: new Set()
  });

  useEffect(() => {
    async function fetchLesson() {
      setState(prev => ({ ...prev, loading: true }));
      try {
        const loadedLesson = await loadLesson(lessonId);
        if (!loadedLesson) {
          throw new Error('Lesson not found');
        }
        setState(prev => ({
          ...prev,
          lesson: loadedLesson,
          loading: false,
          error: null,
          isComplete: false,
          completedSections: new Set()
        }));
      } catch (err) {
        setState(prev => ({
          ...prev,
          error: err instanceof Error ? err.message : 'Failed to load lesson',
          lesson: null,
          loading: false
        }));
      }
    }

    fetchLesson();
  }, [lessonId]);

  const actions: UseLessonProgressActions = {
    proceedToNext: () => {
      setState(prev => {
        if (!prev.lesson) return prev;

        const totalSections = prev.lesson.sections.length;
        const newIndex = Math.min(prev.maxVisibleSection + 1, totalSections - 1);

        // If it's a content section that we're moving past, mark it as completed
        const currentSection = prev.lesson.sections[prev.maxVisibleSection];
        if (currentSection.type === 'content') {
          prev.completedSections.add(prev.maxVisibleSection);
        }

        return {
          ...prev,
          maxVisibleSection: newIndex,
          currentSectionIndex: newIndex,
          completedSections: prev.completedSections
        };
      });
    },

    completeSection: (index: number) => {
      setState(prev => {
        if (!prev.lesson) return prev;

        const newCompletedSections = new Set(prev.completedSections);
        newCompletedSections.add(index);

        const allSectionsCompleted = newCompletedSections.size === prev.lesson.sections.length;

        return {
          ...prev,
          completedSections: newCompletedSections,
          isComplete: allSectionsCompleted
        };
      });
    },

    completeLesson: () => {  // Added this action implementation
      setState(prev => {
        if (!prev.lesson) return prev;

        // Create a set with all section indices
        const allSections = new Set(
          Array.from({ length: prev.lesson.sections.length }, (_, i) => i)
        );

        return {
          ...prev,
          completedSections: allSections,
          isComplete: true
        };
      });
    },

    jumpToSection: (index: number) => {
      setState(prev => {
        if (!prev.lesson) return prev;
        
        const totalSections = prev.lesson.sections.length;
        if (index < 0 || index >= totalSections || index > prev.maxVisibleSection) {
          return prev;
        }

        return {
          ...prev,
          currentSectionIndex: index
        };
      });
    },

    resetProgress: () => {
      setState(prev => ({
        ...prev,
        currentSectionIndex: 0,
        maxVisibleSection: 0,
        isComplete: false,
        completedSections: new Set()
      }));
    }
  };

  return [state, actions];
}