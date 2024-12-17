import { Lesson } from '@/types/lesson';

const GDPPracticeQuestions: Lesson = {
  id: "gdp-practice-questions",
  title: "GDP and Economic Indicators Practice Questions",
  description: "Comprehensive practice questions covering GDP calculations, economic indicators, and related concepts.",
  tags: ["macroeconomics", "GDP", "practice", "calculations"],
  estimatedTime: "long",
  sections: [
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A U.S. company opens a factory in Mexico. The value of its production is counted in:",
        options: [
          "A. U.S. GDP and Mexican GNI",
          "B. Mexican GDP and U.S. GNI",
          "C. Both U.S. GDP and GNI",
          "D. Both Mexican GDP and GNI"
        ],
        correctAnswer: "B",
        explanation: "The production occurs within Mexico's borders (so it's part of Mexican GDP) but is owned by a U.S. company (so it contributes to U.S. GNI). This illustrates the key difference between GDP (location-based) and GNI (ownership-based)."
      }
    },
    {
      type: "question",
      question: {
        type: "numeric",
        question: "If nominal GDP is $850 billion and the GDP deflator is 120, what is real GDP (in billions)?",
        correctAnswer: 708.33,
        tolerance: 0.5,
        units: "billion dollars",
        explanation: "Using the GDP deflator formula: 120 = (850/Real GDP) × 100\nSolving for Real GDP: Real GDP = (850 × 100)/120 = 708.33 billion"
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which of the following would NOT be included in this year's GDP calculation?",
        options: [
          "A. The sale of a newly constructed house",
          "B. The resale of a vintage car",
          "C. Services provided by a lawyer",
          "D. The value of vegetables grown and sold by farmers"
        ],
        correctAnswer: "B",
        explanation: "Used or second-hand goods are not included in GDP as they were counted when first produced. Including them would result in double-counting."
      }
    },
    {
      type: "question",
      question: {
        type: "numeric",
        question: "Given: C = $300B, I = $200B, G = $250B, Exports = $100B, Imports = $150B. Calculate GDP using the expenditure approach (in billions).",
        correctAnswer: 700,
        tolerance: 0.1,
        units: "billion dollars",
        explanation: "Using GDP = C + I + G + (X - M)\n= 300 + 200 + 250 + (100 - 150)\n= 300 + 200 + 250 - 50\n= 700 billion"
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "If a country's real GDP increases but its population increases at a faster rate, what happens to GDP per capita?",
        options: [
          "A. GDP per capita increases",
          "B. GDP per capita decreases",
          "C. GDP per capita stays the same",
          "D. Cannot be determined without exact numbers"
        ],
        correctAnswer: "B",
        explanation: "When population grows faster than real GDP, GDP per capita decreases because the total output is being divided among more people. This shows why population growth must be considered when evaluating economic growth."
      }
    }
  ]
}

export default GDPPracticeQuestions;
