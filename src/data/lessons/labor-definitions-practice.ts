import { Lesson } from '@/types/lesson';

const laborDefinitionsPractice: Lesson = {
  id: "labor-definitions-practice",
  title: "Labor Market Concepts and Definitions",
  description: "Practice questions covering key labor market terminology and unemployment concepts",
  tags: ["macroeconomics", "labor market", "unemployment", "definitions"],
  estimatedTime: "medium",
  sections: [
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 1: Labor Force Classifications"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A city has the following adult population statistics:\n- Total adults (16+): 100,000\n- Military personnel: 5,000\n- Employed civilians: 60,000\n- Actively job seeking: 4,000\nWhat is the civilian labor force?",
        options: [
          "A. 100,000",
          "B. 95,000",
          "C. 64,000",
          "D. 60,000"
        ],
        correctAnswer: "C",
        explanation: "The civilian labor force includes employed civilians (60,000) plus those actively seeking work (4,000) = 64,000. It excludes military personnel and those not seeking work."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which of these individuals is considered part of the working age population but NOT part of the labor force?",
        options: [
          "A. A part-time cashier",
          "B. A full-time student who isn't looking for work",
          "C. An unemployed person actively sending out resumes",
          "D. A work-from-home consultant"
        ],
        correctAnswer: "B",
        explanation: "The full-time student is part of the working age population (16+) but not the labor force because they aren't employed or seeking work. The others are all in the labor force either as employed or actively job seeking."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 2: Understanding Different Worker Classifications"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "What distinguishes a discouraged worker from a marginally attached worker?",
        options: [
          "A. Discouraged workers are employed part-time, marginally attached are not employed at all",
          "B. Discouraged workers have given up looking due to believing no jobs are available, while marginally attached workers may have other reasons",
          "C. Discouraged workers are counted in unemployment statistics, marginally attached workers are not",
          "D. Discouraged workers receive unemployment benefits, marginally attached workers do not"
        ],
        correctAnswer: "B",
        explanation: "Discouraged workers are a subset of marginally attached workers who have specifically given up looking for work because they believe no jobs are available. Other marginally attached workers may be out of the labor force for different reasons (school, family responsibilities, etc.)."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 3: Types of Unemployment"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which type of unemployment would a coal miner who lost their job due to increased automation most likely experience?",
        options: [
          "A. Frictional unemployment",
          "B. Structural unemployment",
          "C. Cyclical unemployment",
          "D. Seasonal unemployment"
        ],
        correctAnswer: "B",
        explanation: "This is structural unemployment, caused by a mismatch between workers' skills and job requirements due to technological change or industry shifts. The coal miner's skills no longer match available jobs due to automation."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A recent college graduate spending two months searching for their first job represents which type of unemployment?",
        options: [
          "A. Structural unemployment",
          "B. Cyclical unemployment",
          "C. Frictional unemployment",
          "D. Natural unemployment"
        ],
        correctAnswer: "C",
        explanation: "This is frictional unemployment, which occurs during normal job search periods. It's considered natural and even healthy for the economy as people transition between jobs or enter the workforce."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 4: Complex Understanding"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "The natural rate of unemployment is:",
        options: [
          "A. Zero unemployment in a perfect economy",
          "B. The sum of frictional and structural unemployment",
          "C. The unemployment rate during economic booms",
          "D. The highest unemployment rate in a business cycle"
        ],
        correctAnswer: "B",
        explanation: "The natural rate of unemployment is the sum of frictional and structural unemployment. It represents the 'normal' level of unemployment in a healthy economy, even when operating at full capacity."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "During an economic recession, which type of unemployment would most likely increase?",
        options: [
          "A. Frictional unemployment",
          "B. Structural unemployment",
          "C. Cyclical unemployment",
          "D. The natural rate of unemployment"
        ],
        correctAnswer: "C",
        explanation: "Cyclical unemployment increases during economic downturns (recessions) as businesses lay off workers due to decreased demand. This type of unemployment is above and beyond the natural rate of unemployment."
      }
    }
  ]
}

export default laborDefinitionsPractice;
