// src/app/lessons/[id]/page.tsx

import { Metadata } from 'next';
import { LessonViewer } from '@/components/lessons/lesson-viewer';
import { loadLesson } from '@/utils/lesson-loader';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }> | { id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const lesson = await loadLesson(resolvedParams.id);
  
  if (!lesson) {
    return {
      title: 'Lesson Not Found'
    };
  }

  return {
    title: lesson.title,
    description: lesson.description
  };
}

export default async function LessonPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const lesson = await loadLesson(resolvedParams.id);
  
  if (!lesson) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-950">
      <LessonViewer lessonId={resolvedParams.id} />
    </div>
  );
}

// Generate static params for known lessons
export async function generateStaticParams() {
  const lessons = await loadLesson('newton-laws'); // Load one lesson to test
  if (!lessons) return [];
  
  return [{ id: 'newton-laws' }];
}