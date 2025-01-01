// src/components/lessons/lesson-viewer.tsx

'use client';

import { useRef, useEffect } from 'react';
import { ContentBlock, Question } from '@/types/lesson';
import { MultipleChoiceQuestion } from '../ui/multiple-choice-question';
import { NumericQuestion } from '../ui/numeric-question';
import { ContentSection } from '../ui/content-section';
import { useLessonProgress } from '@/hooks/useLessonProgress';
import { ProgressPie } from '../ui/progress-pie';
import { AlphanumericQuestion } from '../ui/alphanumeric-question';

interface LessonViewerProps {
  lessonId: string;
}

export function LessonViewer({ lessonId }: LessonViewerProps) {
    const [
      { lesson, loading, error, maxVisibleSection, isComplete, completedSections },
      { proceedToNext, completeSection, completeLesson }
    ] = useLessonProgress(lessonId);
  
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
    const scrollToSection = (index: number) => {
      const sectionElement = sectionRefs.current[index];
      if (sectionElement && lesson) {
        // Always treat it as a question if the section is a question type
        const isQuestion = lesson.sections[index-1].type === 'question';
        
        if (isQuestion) {
          // Position the top of the question near the top of the viewport
          // leaving just enough space for context
          const targetPosition = sectionElement.offsetTop - 190;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        } else {
          // For content sections, use normal offset
          const offset = 100;
          const targetPosition = sectionElement.offsetTop - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
  
    // Handle section completion and scrolling
    const handleSectionComplete = (index: number) => {
      completeSection(index);
      const isLastSection = lesson && index === lesson.sections.length - 1;
      
      if (isLastSection) {
        completeLesson();
      } else {
        proceedToNext();
        // Add a small delay to ensure the new section is rendered before scrolling
        setTimeout(() => {
          scrollToSection(index + 1);
        }, 100);
      }
    };  

  // Calculate progress based on completed sections
  const calculateProgress = () => {
    if (!lesson) return 0;
    const numCompleted = completedSections.size;
    const totalSections = lesson.sections.length;
    return totalSections > 0 ? numCompleted / totalSections : 0;
  };

  // Helper function to convert content blocks to string
  const contentBlocksToString = (blocks: ContentBlock[]): string => {
    return blocks.map(block => {
      switch (block.type) {
        case 'text':
          return block.content;
        case 'diagram':
          return '[DIAGRAM]';
        default:
          return '';
      }
    }).join('\n\n');
  };

  // Render question based on type
  // In your LessonViewer component

  // Inside the renderQuestion function, add the new case:
  const renderQuestion = (question: Question, index: number, isActive: boolean) => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoiceQuestion
            question={question.question}
            options={question.options}
            correctAnswer={question.correctAnswer}
            explanation={question.explanation}
            hint={question.hint || ''}
            onCorrect={() => handleSectionComplete(index)}
            isActive={isActive}
          />
        );
      case 'numeric':
        return (
          <NumericQuestion
            question={question.question}
            correctAnswer={question.correctAnswer}
            tolerance={question.tolerance}
            explanation={question.explanation}
            hint={question.hint || ''}
            onCorrect={() => handleSectionComplete(index)}
            isActive={isActive}
          />
        );
      case 'alphanumeric':
        return (
          <AlphanumericQuestion
            question={question.question}
            correctAnswer={question.correctAnswer}
            caseSensitive={question.caseSensitive}
            explanation={question.explanation}
            hint={question.hint || ''}
            onCorrect={() => handleSectionComplete(index)}
            isActive={isActive}
          />
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8 flex items-center justify-center">
        <div className="text-xl">Loading lesson...</div>
      </div>
    );
  }

  if (error || !lesson) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8 flex items-center justify-center">
        <div className="text-xl text-red-400">
          {error || 'Failed to load lesson'}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Lesson header */}
            <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
            <p className="text-gray-400 mb-2">{lesson.description}</p>
            <div className="flex gap-4 text-sm">
                <span className="px-2 py-1 bg-blue-900 rounded-full capitalize">
                {lesson.estimatedTime}
                </span>
                {lesson.tags?.map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-900/50 rounded-full">
                    {tag}
                </span>
                ))}
            </div>
            </div>

        {/* Lesson sections */}
        <div className="space-y-8">
          {lesson.sections.slice(0, maxVisibleSection + 1).map((section, index) => (
            <div 
              key={index} 
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[index] = el;
              }}
              className="fade-in"
            >
              {section.type === 'content' && section.content && (
                <ContentSection
                  content={contentBlocksToString(section.content)}
                  onContinue={() => handleSectionComplete(index)}
                  showContinue={index === maxVisibleSection && !isComplete}
                />
              )}

              {section.type === 'question' && section.question && (
                renderQuestion(
                  section.question,
                  index,
                  index === maxVisibleSection && !isComplete
                )
              )}
            </div>
          ))}
        </div>

        {/* Bottom spacer */}
        <div className="h-screen" />

        {/* Fixed position container for progress pie and completion message */}
        <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4">
          {/* Completion message */}
          {isComplete && (
            <div className="bg-gray-900 border border-green-500/20 rounded-lg p-4 shadow-lg backdrop-blur-sm">
              <div className="text-xl font-semibold text-green-400 mb-1">
                Lesson Complete!
              </div>
              <p className="text-gray-400 text-sm">
                You've completed all sections of this lesson.
              </p>
            </div>
          )}

          {/* Progress pie */}
          <div className="bg-gray-900 rounded-full p-2 shadow-lg">
            <ProgressPie 
              progress={calculateProgress()}
              size={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}