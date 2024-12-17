import { Lesson } from '@/types/lesson';

const economicDefinitionsPractice: Lesson = {
  id: "economic-definitions-practice",
  title: "Economic Indicators and Measurements: Key Definitions",
  description: "Practice questions testing understanding of GDP, GNI, and related economic measurements",
  tags: ["macroeconomics", "definitions", "economic indicators", "practice"],
  estimatedTime: "medium",
  sections: [
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 1: Basic GDP and GNI Concepts"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which statement most accurately defines GDP?",
        options: [
          "A. The total value of all goods and services produced within a country, including by foreign companies",
          "B. The total value of all goods and services produced by a country's citizens, regardless of location",
          "C. The monetary value of all finished goods and services produced within a country's borders in a specific time period",
          "D. The total income earned by a country's citizens from both domestic and foreign sources"
        ],
        correctAnswer: "C",
        explanation: "GDP (Gross Domestic Product) specifically measures the total monetary value of all final goods and services produced within a country's borders during a specific time period, regardless of who owns the means of production."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "What is the key difference between GDP and GNI?",
        options: [
          "A. GDP measures production while GNI measures consumption",
          "B. GDP is based on location of production while GNI is based on ownership",
          "C. GDP includes inflation while GNI is always adjusted for inflation",
          "D. GDP measures final goods while GNI includes intermediate goods"
        ],
        correctAnswer: "B",
        explanation: "The key difference is that GDP measures all production within a country's borders (location-based), while GNI measures production by a country's citizens and companies (ownership-based), regardless of where that production occurs."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 2: Nominal vs. Real Measurements"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "What is the main difference between nominal and real GDP?",
        options: [
          "A. Nominal GDP includes imports while real GDP doesn't",
          "B. Nominal GDP is measured in current prices while real GDP is adjusted for inflation",
          "C. Nominal GDP includes services while real GDP only includes goods",
          "D. Nominal GDP is measured annually while real GDP is measured quarterly"
        ],
        correctAnswer: "B",
        explanation: "Nominal GDP measures production at current market prices, while real GDP adjusts for inflation by measuring production at the prices of a base year. This adjustment allows for meaningful comparisons of GDP across different time periods."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "GDP per capita is calculated by:",
        options: [
          "A. Dividing GDP by the working population",
          "B. Dividing GDP by the total population",
          "C. Dividing GDP by the number of households",
          "D. Dividing GDP by the number of employed people"
        ],
        correctAnswer: "B",
        explanation: "GDP per capita is calculated by dividing a country's GDP by its total population. This provides a measure of the average economic output or standard of living per person in the country."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 3: Alternative Economic Indicators"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "The OECD Better Life Index differs from GDP because it:",
        options: [
          "A. Only measures economic production",
          "B. Focuses solely on environmental factors",
          "C. Considers multiple dimensions of well-being including housing, health, and education",
          "D. Measures only household income"
        ],
        correctAnswer: "C",
        explanation: "The OECD Better Life Index is a multidimensional measure that considers various aspects of well-being beyond economic production, including housing, health, education, environment, and life satisfaction."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "The Happy Planet Index is unique because it measures:",
        options: [
          "A. Only economic growth",
          "B. Sustainable well-being, combining happiness with environmental impact",
          "C. Just environmental factors",
          "D. Only life satisfaction scores"
        ],
        correctAnswer: "B",
        explanation: "The Happy Planet Index is distinctive because it combines measures of well-being with environmental impact, specifically looking at how efficiently countries convert natural resources into long and happy lives for their citizens."
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
        question: "If a country's GDP Deflator increases from 100 to 110, this indicates that:",
        options: [
          "A. Real GDP has increased by 10%",
          "B. The overall price level has increased by 10%",
          "C. Nominal GDP has decreased by 10%",
          "D. The country's population has increased by 10%"
        ],
        correctAnswer: "B",
        explanation: "The GDP Deflator is a measure of the overall price level in an economy. An increase from 100 to 110 indicates that the average price level has increased by 10% compared to the base year."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "The Happiness Index differs from GDP by measuring:",
        options: [
          "A. Only economic factors",
          "B. Subjective well-being and quality of life factors",
          "C. Just government policies",
          "D. Only employment rates"
        ],
        correctAnswer: "B",
        explanation: "The Happiness Index goes beyond economic measures to include subjective well-being, considering factors like life satisfaction, social support, freedom to make life choices, and perceptions of corruption."
      }
    }
  ]
}

export default economicDefinitionsPractice;
