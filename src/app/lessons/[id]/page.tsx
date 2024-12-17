// src/app/lessons/[id]/page.tsx
import { Metadata } from 'next';
import { LessonViewer } from '@/components/lessons/lesson-viewer';
import { loadLesson, getAllLessonIds } from '@/utils/lesson-loader';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const revalidate = false;

interface PageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lesson = await loadLesson(params.id);
  
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

export async function generateStaticParams() {
  const lessonIds = await getAllLessonIds();
  return lessonIds.map(id => ({
    id: id
  }));
}