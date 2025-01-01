// THIS FILE IS AUTO-GENERATED - DO NOT EDIT
// Generated on 2025-01-01T09:09:27.187Z

import { Lesson } from '@/types/lesson';

export const lessonModules = {
  'economic-definitions-practice': () => import('@/data/lessons/economic-definitions-practice'),
  'employment-practice-questions': () => import('@/data/lessons/employment-practice-questions'),
  'gdp-fundamentals-practice': () => import('@/data/lessons/gdp-fundamentals-practice'),
  'gdp-practice-questions': () => import('@/data/lessons/gdp-practice-questions'),
  'graphical-practice-questions': () => import('@/data/lessons/graphical-practice-questions'),
  'labor-definitions-practice': () => import('@/data/lessons/labor-definitions-practice'),
  'unemployment-calculations-practice': () => import('@/data/lessons/unemployment-calculations-practice'),
} as const;

export type LessonId = keyof typeof lessonModules;
