// src/components/ui/file-upload.tsx
'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Lesson } from '@/types/lesson';
import { useRouter } from 'next/navigation';
import { useLessons } from '@/contexts/lesson-context';

export function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const { addLesson } = useLessons();
  const router = useRouter();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    for (const file of files) {
      if (!file.name.endsWith('.json')) {
        alert('Please upload JSON files only');
        continue;
      }

      try {
        const text = await file.text();
        const lesson = JSON.parse(text) as Lesson;
        
        // Basic validation
        if (!lesson.id || !lesson.title || !lesson.sections) {
          throw new Error('Invalid lesson format');
        }

        addLesson(lesson);
        // Navigate directly to the lesson
        router.push(`/lessons/${lesson.id}`);
      } catch (error) {
        alert('Error parsing lesson file: ' + (error instanceof Error ? error.message : 'Unknown error'));
      }
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`w-full p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
        isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-gray-700 hover:border-gray-600'
      }`}
    >
      <label className="flex flex-col items-center cursor-pointer">
        <Upload className="w-8 h-8 mb-2 text-gray-400" />
        <span className="text-gray-300">
          Drag & drop lesson file or click to upload
        </span>
        <input
          type="file"
          accept=".json"
          onChange={handleFileInput}
          className="hidden"
        />
      </label>
    </div>
  );
}