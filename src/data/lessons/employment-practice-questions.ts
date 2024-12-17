import { Lesson } from '@/types/lesson';

const EmploymentPracticeQuestions: Lesson = {
  id: "employment-practice-questions",
  title: "Employment and Labor Markets Practice Questions",
  description: "Comprehensive practice questions covering employment calculations, unemployment types, and labor market concepts.",
  tags: ["macroeconomics", "employment", "unemployment", "practice"],
  estimatedTime: "long",
  sections: [
    {
      type: "question",
      question: {
        type: "numeric",
        question: "In a city with working age population of 200,000, if the labor force participation rate is 65% and unemployment rate is 5%, how many people are unemployed?",
        correctAnswer: 6500,
        tolerance: 1,
        units: "people",
        explanation: "Step 1: Calculate labor force\nLabor force = 200,000 × 0.65 = 130,000\nStep 2: Calculate unemployed\nUnemployed = 130,000 × 0.05 = 6,500 people"
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which of the following workers would be classified as structurally unemployed?",
        options: [
          "A. A retail worker temporarily laid off during a recession",
          "B. A coal miner whose job was eliminated due to automation",
          "C. A recent graduate looking for their first job",
          "D. A seasonal worker between jobs"
        ],
        correctAnswer: "B",
        explanation: "Structural unemployment occurs when workers' skills no longer match available jobs, often due to technological change or industry shifts. The coal miner's situation represents structural unemployment as their job was eliminated due to technological change (automation)."
      }
    },
    {
      type: "question",
      question: {
        type: "numeric",
        question: "If the actual unemployment rate is 8% and the natural rate of unemployment is 5%, what is the cyclical unemployment rate?",
        correctAnswer: 3,
        tolerance: 0.1,
        units: "percent",
        explanation: "Cyclical unemployment = Actual unemployment rate - Natural rate\n= 8% - 5%\n= 3%"
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A worker who has stopped looking for work because they believe no jobs are available would be classified as:",
        options: [
          "A. Unemployed",
          "B. Employed part-time",
          "C. A discouraged worker (not in labor force)",
          "D. Structurally unemployed"
        ],
        correctAnswer: "C",
        explanation: "Discouraged workers are those who have stopped looking for work because they believe no jobs are available. They are not counted in the labor force or unemployment statistics, which is one criticism of how unemployment is measured."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which type of unemployment would likely increase the MOST during an economic recession?",
        options: [
          "A. Frictional unemployment",
          "B. Structural unemployment",
          "C. Cyclical unemployment",
          "D. Seasonal unemployment"
        ],
        correctAnswer: "C",
        explanation: "Cyclical unemployment is directly related to the business cycle and increases significantly during recessions as businesses lay off workers due to decreased demand. This is the primary type of unemployment that fiscal and monetary policy aim to address."
      }
    }
  ]
}

export default EmploymentPracticeQuestions;
