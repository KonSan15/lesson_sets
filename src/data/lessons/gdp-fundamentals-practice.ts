import { Lesson } from '@/types/lesson';

const GDPFundamentalsPractice: Lesson = {
  id: "gdp-fundamentals-practice",
  title: "GDP Concepts and Calculations: Comprehensive Practice",
  description: "In-depth practice questions covering GDP calculation approaches, components, and limitations",
  tags: ["macroeconomics", "GDP", "practice", "calculations"],
  estimatedTime: "long",
  sections: [
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 1: GDP Calculation Approaches and Basic Concepts"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A small economy has the following data:\n- Total wages: $500B\n- Corporate profits: $200B\n- Total consumer spending: $600B\n- Government spending: $150B\n- Business investment: $100B\n- Exports: $100B\n- Imports: $150B\nUsing which approach would you calculate GDP as $700B?",
        options: [
          "A. Production approach only",
          "B. Income approach only",
          "C. Expenditure approach only",
          "D. All three approaches would give $700B"
        ],
        correctAnswer: "D",
        explanation: "All three approaches give the same result:\nIncome: $500B + $200B = $700B\nExpenditure: $600B + $100B + $150B + ($100B - $150B) = $700B\nThis demonstrates the circular flow principle - one person's spending is another's income."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which items are counted in GDP calculations?",
        options: [
          "A. Used car sales and new factory equipment",
          "B. New car sales and illegal drug sales",
          "C. New factory equipment and intermediate goods",
          "D. New car sales and new factory equipment"
        ],
        correctAnswer: "D",
        explanation: "GDP only counts final goods and new production. Used items were counted when first produced, illegal activities aren't included, and intermediate goods would result in double-counting."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A Japanese company operates a factory in the United States. The value of its production is counted in:",
        options: [
          "A. U.S. GDP and Japanese GDP",
          "B. U.S. GDP and Japanese GNI",
          "C. Japanese GDP and U.S. GNI",
          "D. Neither country's GDP or GNI"
        ],
        correctAnswer: "B",
        explanation: "Production within U.S. borders counts in U.S. GDP (location-based), while the Japanese ownership means it counts in Japanese GNI (ownership-based)."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 2: GDP Components and Calculations"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "In the expenditure approach (C + I + G + Xn), which component would include the purchase of a new house by a family?",
        options: [
          "A. C (Consumption)",
          "B. I (Investment)",
          "C. G (Government Spending)",
          "D. Xn (Net Exports)"
        ],
        correctAnswer: "B",
        explanation: "New residential housing is considered investment (I) in GDP calculations, even when purchased by households. This is because houses are durable goods that provide services over many years."
      }
    },
    {
      type: "question",
      question: {
        type: "numeric",
        question: "If nominal GDP is $1000 billion and the GDP deflator is 125, what is real GDP (in billions)?",
        correctAnswer: 800,
        tolerance: 0.1,
        units: "billion dollars",
        explanation: "Using GDP Deflator = (Nominal GDP/Real GDP) × 100\n125 = ($1000B/Real GDP) × 100\nReal GDP = $1000B × (100/125) = $800B"
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 3: GDP Limitations and Alternative Measures"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which of the following best explains why GDP per capita might be a better measure of economic well-being than total GDP?",
        options: [
          "A. It includes underground economy activities",
          "B. It accounts for income distribution",
          "C. It shows average output per person",
          "D. It eliminates the effects of inflation"
        ],
        correctAnswer: "C",
        explanation: "GDP per capita shows average output per person, making it more useful for comparing countries of different sizes or tracking a country's progress over time as population changes."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which of these is NOT typically considered a limitation of GDP as a measure of economic health?",
        options: [
          "A. It doesn't account for income distribution",
          "B. It doesn't include illegal activities",
          "C. It doesn't measure environmental damage",
          "D. It doesn't count intermediate goods"
        ],
        correctAnswer: "D",
        explanation: "Not counting intermediate goods is actually a CORRECT feature of GDP, preventing double-counting. The other options are genuine limitations of GDP as a measure of economic well-being."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 4: Applied Understanding"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A country's GDP is $2 trillion and its population is 100 million. If its GDP grows to $2.2 trillion while its population increases to 120 million, what happens to GDP per capita?",
        options: [
          "A. Increases",
          "B. Decreases",
          "C. Stays the same",
          "D. Cannot be determined"
        ],
        correctAnswer: "B",
        explanation: "Initial GDP per capita: $2T/100M = $20,000\nNew GDP per capita: $2.2T/120M = $18,333\nGDP per capita decreased because population grew faster (20%) than GDP (10%)."
      }
    },
    {
      type: "question",
      question: {
        type: "numeric",
        question: "If a country's nominal GDP is $500 billion and real GDP is $400 billion, what is its GDP deflator?",
        correctAnswer: 125,
        tolerance: 0.1,
        units: "none",
        explanation: "GDP Deflator = (Nominal GDP/Real GDP) × 100\n= ($500B/$400B) × 100\n= 1.25 × 100\n= 125"
      }
    }
  ]
}

export default GDPFundamentalsPractice;
