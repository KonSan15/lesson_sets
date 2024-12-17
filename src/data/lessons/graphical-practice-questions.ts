import { Lesson } from '@/types/lesson';

const GraphicalPracticeQuestions: Lesson = {
  id: "graphical-practice-questions",
  title: "Economic Graphical Analysis Practice Questions",
  description: "Practice questions focusing on business cycles, labor markets, and economic gaps.",
  tags: ["macroeconomics", "graphs", "analysis", "practice"],
  estimatedTime: "long",
  sections: [
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "In a business cycle graph, when real GDP is above potential GDP, this creates:",
        options: [
          "A. A recessionary gap",
          "B. An inflationary gap",
          "C. A production gap",
          "D. A deflationary gap"
        ],
        correctAnswer: "B",
        explanation: "When real GDP exceeds potential GDP, it creates an inflationary gap. This situation typically leads to upward pressure on prices and wages as the economy is operating above its sustainable capacity."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "If the minimum wage is set above the equilibrium wage in a labor market, what will result?",
        options: [
          "A. A shortage of workers",
          "B. A surplus of workers (unemployment)",
          "C. An increase in labor demand",
          "D. A decrease in the minimum wage"
        ],
        correctAnswer: "B",
        explanation: "When minimum wage is set above equilibrium, quantity of labor supplied exceeds quantity of labor demanded, creating a surplus of workers (unemployment). This is shown graphically where the horizontal minimum wage line intersects supply and demand curves."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "During which phase of the business cycle is cyclical unemployment typically highest?",
        options: [
          "A. Peak",
          "B. Trough",
          "C. Recovery",
          "D. Expansion"
        ],
        correctAnswer: "B",
        explanation: "Cyclical unemployment is typically highest at the trough of the business cycle, when the economy is at its lowest point in the recession. This is when real GDP is furthest below potential GDP, creating the largest recessionary gap."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "In a labor market graph, a decrease in labor demand would most likely be caused by:",
        options: [
          "A. Technological advancement replacing workers",
          "B. An increase in worker productivity",
          "C. Population growth",
          "D. Immigration of skilled workers"
        ],
        correctAnswer: "A",
        explanation: "A technological advancement that replaces workers would shift the labor demand curve leftward, as firms need fewer workers to produce the same output. This represents a decrease in labor demand at every wage level."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A recessionary gap in the business cycle graph indicates that:",
        options: [
          "A. Actual GDP is greater than potential GDP",
          "B. Actual GDP equals potential GDP",
          "C. Actual GDP is less than potential GDP",
          "D. Potential GDP is falling"
        ],
        correctAnswer: "C",
        explanation: "A recessionary gap occurs when actual GDP is below potential GDP, indicating the economy is operating below its full capacity. This gap represents unused resources in the economy, including unemployed workers."
      }
    }
  ]
}

export default GraphicalPracticeQuestions;
