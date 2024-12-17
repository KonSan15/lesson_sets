// src/data/lessons/newton-laws.ts

import { Lesson } from '@/types/lesson';

const newtonLawsLesson: Lesson = {
  id: 'newton-laws',
  title: "Newton's Laws of Motion",
  description: "Learn about the fundamental principles that govern motion and forces in classical mechanics.",
  tags: ['physics', 'mechanics', 'forces'],
  estimatedTime: 'medium',
  sections: [
    {
      type: 'content',
      content: [
        {
          type: 'text',
          content: "Newton's First Law states that an object will remain at rest or in uniform motion unless acted upon by an external force. This property is also known as inertia."
        },
        {
          type: 'diagram',
          diagram: {
            type: 'force-diagram',
            interactive: true
          }
        }
      ]
    },
    {
      type: 'question',
      question: {
        type: 'multiple-choice',
        question: "A ball is rolling on a frictionless surface. What happens to its motion if no forces act on it?",
        options: [
          "It gradually slows down",
          "It continues at constant velocity",
          "It speeds up",
          "It stops immediately"
        ],
        correctAnswer: "B",
        explanation: "According to Newton's First Law, without any external forces (including friction), an object in motion stays in motion with the same speed and direction.",
        hint: "Think about what happens in the complete absence of forces"
      }
    },
    {
      type: 'content',
      content: [
        {
          type: 'text',
          content: "Newton's Second Law relates force, mass, and acceleration: F = ma"
        },
        {
          type: 'latex',
          content: "\\vec{F} = m\\vec{a}",
          display: true
        }
        
      ]
    },
    {
      type: 'question',
      question: {
        type: 'numeric',
        question: "If a 2 kg mass experiences a force of 10 N, what is its acceleration in m/s²?",
        correctAnswer: 5,
        tolerance: 0.1,
        units: "m/s²",
        explanation: "Using F = ma, we can solve for a: a = F/m = 10 N / 2 kg = 5 m/s²",
        hint: "Use F = ma and solve for acceleration"
      }
    }
  ]
};

export default newtonLawsLesson;