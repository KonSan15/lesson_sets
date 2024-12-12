'use client';

import { useState } from 'react';
import { MultipleChoiceQuestion } from '../ui/multiple-choice-question';
import { ContentSection } from '../ui/content-section';

interface LessonSection {
  type: 'content' | 'question';
  content?: string;
  questionType?: 'multiple-choice' | 'numeric';
  question?: string;
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
  hint?: string;
}

interface Lesson {
  title: string;
  sections: LessonSection[];
}

export function LessonViewer() {
  const [maxVisibleSection, setMaxVisibleSection] = useState(0);
  
  // Sample lesson data - later this will come from your API or files
  const lesson: Lesson = {
    title: "Introduction to Circular Motion",
    sections: [
      {
        type: "content",
        content: "When an object moves in a circular path, it experiences a centripetal acceleration directed toward the center of the circle."
      },
      {
        type: "content",
        content: "The magnitude of centripetal acceleration is given by:\n\n$a_c = \\frac{v^2}{r}$\n\nwhere $v$ is the velocity and $r$ is the radius of the circle."
      },
      {
        type: "question",
        questionType: "multiple-choice",
        question: "Which way does centripetal acceleration point?",
        options: [
          "Away from the center",
          "Toward the center",
          "Tangent to the circle",
          "In the direction of motion"
        ],
        correctAnswer: "B",
        explanation: "Centripetal acceleration must point toward the center to keep the object in circular motion.",
        hint: "Think about what force is needed to keep an object moving in a circle"
      }
    ]
  };

  const handleContinue = () => {
    setMaxVisibleSection(prev => Math.min(prev + 1, lesson.sections.length - 1));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{lesson.title}</h1>
        
        {/* Render all sections up to maxVisibleSection */}
        <div className="space-y-8">
          {lesson.sections.slice(0, maxVisibleSection + 1).map((section, index) => (
            <div key={index} className="fade-in">
              {section.type === "content" && (
                <ContentSection 
                  content={section.content!}
                  onContinue={handleContinue}
                  showContinue={index === maxVisibleSection}
                />
              )}
              
              {section.type === "question" && section.questionType === "multiple-choice" && (
                <MultipleChoiceQuestion 
                  question={section.question!}
                  options={section.options!}
                  correctAnswer={section.correctAnswer!}
                  explanation={section.explanation!}
                  hint={section.hint!}
                  onCorrect={handleContinue}
                  isActive={index === maxVisibleSection}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 sticky bottom-8 w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-blue-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${(maxVisibleSection + 1) / lesson.sections.length * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}