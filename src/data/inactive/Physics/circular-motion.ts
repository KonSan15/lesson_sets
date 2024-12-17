// Path: src\data\lessons

import { Lesson } from '@/types/lesson';

const circularMotionLesson: Lesson = {
  id: 'circular-motion',
  title: 'Introduction to Circular Motion',
  description: 'Learn about the fundamental concepts of circular motion, including velocity and acceleration.',
  tags: ['physics', 'mechanics', 'motion'],
  estimatedTime: 'short',
  sections: [
    {
      type: 'content',
      content: [
        {
          type: 'text',
          content: 'When an object moves in a circular path, it experiences a centripetal acceleration directed toward the center of the circle.'
        },
        {
          type: 'diagram',
          diagram: {
            type: 'circular-motion',
            interactive: true
          }
        },
        {
          type: 'text',
          content: 'In this diagram, you can see:\n- The blue dot represents the moving object\n- The green arrow shows the velocity vector (tangent to the circle)\n- The red arrow shows the acceleration vector (pointing to center)'
        }
      ]
    },
    {
      type: 'content',
      content: [
        {
          type: 'text',
          content: 'The magnitude of centripetal acceleration is given by:'
        },
        {
          type: 'latex',
          content: 'a_c = \\frac{v^2}{r}',
          display: true
        },
        {
          type: 'text',
          content: 'where $v$ is the velocity and $r$ is the radius of the circle.'
        }
      ]
    },
    {
      type: 'question',
      question: {
        type: 'multiple-choice',
        question: 'Which way does centripetal acceleration point?',
        options: [
          'Away from the center',
          'Toward the center',
          'Tangent to the circle',
          'In the direction of motion'
        ],
        correctAnswer: 'B',
        explanation: 'Centripetal acceleration must point toward the center to keep the object in circular motion.',
        hint: 'Think about what force is needed to keep an object moving in a circle'
      }
    }
  ]
};

export default circularMotionLesson;