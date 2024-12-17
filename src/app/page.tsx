// src/app/page.tsx



import { getAllLessons } from '@/utils/lesson-loader';
import { LessonCard } from '@/components/ui/lesson-card';

//export const dynamic = 'force-dynamic'; // or 'force-static' if your lessons don't change often
//export const revalidate = 3600; // Revalidate every hour if using force-static

export default async function Home() {
  const lessons = await getAllLessons();
  
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Lessons</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </div>
  );
}

