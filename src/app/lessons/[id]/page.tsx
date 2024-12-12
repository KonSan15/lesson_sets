// src/app/lessons/[id]/page.tsx

import { loadLesson, getAllLessonIds } from '@/utils/lesson-loader';
import { LessonViewer } from '@/components/lessons/lesson-viewer';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string }
}

export const dynamic = 'force-dynamic'; // or 'force-static' if your lessons don't change often
export const revalidate = 3600; // Revalidate every hour if using force-static

export default async function LessonPage({ params }: PageProps) {
  const lesson = await loadLesson(params.id);
  
  if (!lesson) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-950">
      <LessonViewer lessonId={params.id} />
    </div>
  );
}

// Generate static params for known lessons
export async function generateStaticParams() {
  const lessonIds = await getAllLessonIds();
  return lessonIds.map(id => ({ id }));
}