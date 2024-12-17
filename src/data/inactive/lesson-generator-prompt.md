# Interactive Lesson Generator Prompt

Generate an engaging, interactive lesson following this structure. The lesson should progressively build understanding through clear explanations and interactive questions.

## Required Format

```typescript
{
  id: string;           // Kebab-case identifier
  title: string;        // Clear, concise title
  description: string;  // 1-2 sentence overview
  tags: string[];       // Related topics/concepts
  estimatedTime: "short" | "medium" | "long";  // Lesson duration (short: <15min, medium: 15-30min, long: >30min)
  sections: [
    // Each section is either content or question
    {
      type: "content" | "question";
      content?: [
        {
          type: "text" | "latex";
          content: string;         // The actual content
          display?: boolean;       // For latex type (true for display math, false for inline)
        }
      ];
      question?: {
        type: "multiple-choice" | "numeric";
        question: string;
        explanation: string;       // Detailed explanation of the answer
        hint?: string;            // Optional hint for struggling students
        // For multiple-choice:
        options?: string[];        // Array of possible answers
        correctAnswer?: string;    // Letter corresponding to correct option (A, B, C, D)
        // For numeric:
        correctAnswer?: number;    // The correct numerical answer
        tolerance?: number;        // Acceptable margin of error
        units?: string;           // Units for the answer (if applicable)
      }
    }
  ]
}
```

## Lesson Structure Guidelines

1. OPENING SECTION
- Hook students with an engaging introduction
- Connect to real-world applications or familiar concepts
- Clearly state learning objectives
- Set context and relevance

2. CONTENT ORGANIZATION
- Present information in logical, digestible chunks
- Progress from basic to advanced concepts
- Use clear, concise language
- Include relevant examples
- For math/science: include equations with proper context
- For humanities: include relevant quotes, dates, or key terms
- Link concepts to prior knowledge

3. QUESTION DESIGN
- Place questions strategically to:
  * Check understanding of key concepts
  * Challenge common misconceptions
  * Apply concepts to new situations
  * Reinforce critical points
- Mix question types:
  * Multiple-choice for concept checking
  * Numeric for calculation/quantitative skills (where applicable)
- Ensure questions:
  * Test understanding, not just memorization
  * Include plausible distractors for multiple-choice
  * Have clear, detailed explanations
  * Provide helpful hints when appropriate

4. MATHEMATICAL CONTENT (When Applicable)
- Format all equations using LaTeX
- Use inline math ($...$) for simple expressions
- Use display math ($$...$$) for important equations
- Include proper variable definitions
- Show example calculations

## Example Input

"Generate a lesson about [TOPIC] for [SUBJECT]. Target audience is [LEVEL] students. Cover [SPECIFIC CONCEPTS] and include at least [NUMBER] practice questions. Prerequisites: [PRIOR KNOWLEDGE]."

## Quality Checklist

Content:
✓ Accurate and current information
✓ Grade-level appropriate language
✓ Clear learning progression
✓ Relevant examples and applications

Questions:
✓ Test different cognitive levels
✓ Clear and unambiguous wording
✓ Meaningful distractors
✓ Thorough explanations
✓ Helpful hints

Structure:
✓ Logical flow between sections
✓ Appropriate difficulty progression
✓ Balance of content and questions
✓ Clear connections between concepts

## Subject-Specific Considerations

Math:
- Include step-by-step problem solutions
- Progress from simple to complex calculations
- Use visual representations when helpful

Science:
- Connect theory to observable phenomena
- Include experimental context
- Emphasize cause-and-effect relationships

Language/Literature:
- Include relevant textual evidence
- Focus on analysis and interpretation
- Address context and meaning

History/Social Studies:
- Establish chronological context
- Consider multiple perspectives
- Connect past events to present implications

## Example Output Structure

```typescript
{
  id: "subject-topic-specific",
  title: "Clear Topic Title",
  description: "Brief, engaging description of lesson content and goals",
  tags: ["subject", "topic", "subtopic"],
  estimatedTime: "medium",
  sections: [
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Opening hook and introduction..."
        }
      ]
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "First key concept explanation..."
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Application question about first concept",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "B",
        explanation: "Detailed explanation of why B is correct...",
        hint: "Think about..."
      }
    }
    // Additional sections following similar pattern
  ]
}
```
