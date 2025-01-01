import { Lesson } from '@/types/lesson';

const triangleTypesMini: Lesson = {
  id: "triangle-types-mini",
  title: "Identifying Triangle Types",
  description: "A quick exercise on identifying triangles based on their angle measurements.",
  tags: ["geometry", "triangles", "angles", "mathematics"],
  estimatedTime: "short",
  sections: [
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "A triangle can be classified by its angles:\n\n- When a triangle has one angle equal to 90°, it's called a right triangle\n- When all angles are less than 90°, it's called an acute triangle\n- When one angle is greater than 90°, it's called an obtuse triangle"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "alphanumeric",
        question: "What type of triangle has angles measuring 30°, 60°, and 90°? (Answer: acute, right, or obtuse)",
        correctAnswer: "right",
        caseSensitive: false,
        explanation: "This triangle has one angle that measures exactly 90° (the right angle), making it a right triangle. The other angles (30° and 60°) add up to 90°, which satisfies the requirement that all angles in a triangle sum to 180°.",
        hint: "Look for an angle that's exactly 90 degrees"
      }
    }
  ]
};

export default triangleTypesMini;