// Path: src\components\ui

import Link from 'next/link';
import { Lesson } from '@/types/lesson';

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link href={`/lessons/${lesson.id}`} className="block">
      <div className="group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
        <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">
          {lesson.title}
        </h2>
        
        <p className="text-gray-400 mb-4 line-clamp-2">
          {lesson.description}
        </p>
        
        <div className="flex gap-4 text-sm">
          <span className="px-2 py-1 bg-blue-900/50 rounded-full capitalize">
            {lesson.estimatedTime}
          </span>
        </div>
        
        {lesson.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {lesson.tags.map(tag => (
              <span 
                key={tag}
                className="text-xs px-2 py-1 bg-gray-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}