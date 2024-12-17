import { Lesson } from '@/types/lesson';

const unemploymentCalculationsPractice: Lesson = {
  id: "unemployment-calculations-practice",
  title: "Unemployment: Calculations and Economic Impact",
  description: "Practice with unemployment rate calculations and understanding unemployment's broader economic effects",
  tags: ["macroeconomics", "unemployment", "calculations", "economic impact"],
  estimatedTime: "medium",
  sections: [
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 1: Basic Labor Market Calculations"
        },
        {
          "type": "latex",
          "content": "Labor\\ Force\\ Participation\\ Rate = \\frac{Labor\\ Force}{Working\\ Age\\ Population} × 100",
          "display": true
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "numeric",
        question: "In a city with a working age population of 200,000 and a labor force of 120,000, what is the labor force participation rate?",
        correctAnswer: 60,
        tolerance: 0.1,
        units: "percent",
        explanation: "Labor Force Participation Rate = (Labor Force ÷ Working Age Population) × 100\n= (120,000 ÷ 200,000) × 100\n= 0.60 × 100\n= 60%"
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 2: Unemployment Rate Calculations"
        },
        {
          "type": "latex",
          "content": "Unemployment\\ Rate = \\frac{Unemployed}{Labor\\ Force} × 100",
          "display": true
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "numeric",
        question: "If a labor force of 150,000 has 9,000 unemployed workers, what is the unemployment rate?",
        correctAnswer: 6,
        tolerance: 0.1,
        units: "percent",
        explanation: "Unemployment Rate = (Unemployed ÷ Labor Force) × 100\n= (9,000 ÷ 150,000) × 100\n= 0.06 × 100\n= 6%"
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 3: Natural and Cyclical Unemployment"
        },
        {
          "type": "latex",
          "content": "Natural\\ Rate = Frictional\\ Unemployment + Structural\\ Unemployment",
          "display": true
        },
        {
          "type": "latex",
          "content": "Cyclical\\ Unemployment = Actual\\ Rate - Natural\\ Rate",
          "display": true
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "numeric",
        question: "If the actual unemployment rate is 8% and the natural rate is 5%, what is the cyclical unemployment rate?",
        correctAnswer: 3,
        tolerance: 0.1,
        units: "percent",
        explanation: "Cyclical Unemployment = Actual Rate - Natural Rate\n= 8% - 5%\n= 3%"
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Section 4: Costs of Unemployment"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which of these combinations correctly matches personal, social, and economic costs of unemployment?",
        options: [
          "A. Lost wages, increased crime, higher GDP",
          "B. New job skills, community support, decreased tax revenue",
          "C. Lost income, increased poverty rates, decreased tax revenue",
          "D. Better work-life balance, social unity, economic growth"
        ],
        correctAnswer: "C",
        explanation: "This combination correctly identifies:\nPersonal cost: Lost income\nSocial cost: Increased poverty rates\nEconomic cost: Decreased tax revenue\nThe other options either mix up categories or list benefits rather than costs."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "How does the unemployment rate differ from a measure of joblessness?",
        options: [
          "A. They are exactly the same thing",
          "B. Unemployment rate only counts active job seekers, while joblessness includes everyone without a job",
          "C. Unemployment rate includes part-time workers, while joblessness doesn't",
          "D. Unemployment rate is a percentage, while joblessness is a total number"
        ],
        correctAnswer: "B",
        explanation: "The unemployment rate only counts people actively seeking work (part of the labor force), while joblessness would include everyone without a job, including those not seeking work (discouraged workers, students, retirees, etc.). This is why the unemployment rate can be misleading as a measure of total joblessness."
      }
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which combination best represents the three types of unemployment costs?",
        options: [
          "A. Personal: Loss of skills; Social: Higher crime rates; Economic: Lower GDP",
          "B. Personal: More free time; Social: Community support; Economic: Government savings",
          "C. Personal: New job opportunities; Social: Family unity; Economic: Market efficiency",
          "D. Personal: Higher income; Social: Better education; Economic: Increased spending"
        ],
        correctAnswer: "A",
        explanation: "The correct combination shows:\nPersonal Costs: Loss of skills, which affects future employability\nSocial Costs: Higher crime rates, which affect community well-being\nEconomic Costs: Lower GDP, which affects the entire economy\nThe other options list potential benefits or unrelated factors."
      }
    }
  ]
}

export default unemploymentCalculationsPractice;
