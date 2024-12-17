import { Lesson } from '@/types/lesson';

const cyclinsAndCdks: Lesson = {
  id: "cyclins-and-cdks",
  title: "Cyclins and CDKs: The Cell Cycle's Control System",
  description: "Explore how cyclins and cyclin-dependent kinases (CDKs) work together to regulate the cell cycle. Learn about their roles in cell cycle checkpoints, their periodic expression patterns, and how they control cell division.",
  tags: ["biology", "cell cycle", "cyclins", "CDKs", "cell division", "regulation"],
  estimatedTime: "medium",
  sections: [
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "The cell cycle is precisely controlled by proteins called cyclins and cyclin-dependent kinases (CDKs). Think of cyclins as the regulatory switches and CDKs as the engines that drive the cell cycle forward. Together, they form complexes that control when and how cells progress through different phases of the cell cycle."
        }
      ]
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Cyclin-Dependent Kinases (CDKs):\n\nCDKs are protein kinases that must bind to cyclins to become active. Key features of CDKs include:\n- They are constantly present in cells but remain inactive without cyclins\n- They phosphorylate target proteins when active\n- Different CDKs control different cell cycle transitions\n- Their activity is regulated by both cyclins and inhibitory proteins"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Why do CDKs require cyclins to function?",
        options: [
          "CDKs are naturally too active and need cyclins to reduce their activity",
          "CDKs are inactive without cyclins and need them for activation",
          "Cyclins provide the ATP needed for CDK function",
          "CDKs work independently but are enhanced by cyclins"
        ],
        correctAnswer: "B",
        explanation: "CDKs are inactive proteins without their cyclin partners. They require cyclin binding to become activated and perform their kinase functions. This requirement ensures that CDK activity is tightly controlled and only occurs when specific cyclins are present at the appropriate times in the cell cycle.",
        hint: "Think about the meaning of 'cyclin-dependent' in the name CDK."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Cyclins:\n\nCyclins are proteins whose levels rise and fall throughout the cell cycle, hence their name. Important characteristics include:\n- Different types of cyclins are produced at different phases of the cell cycle\n- They are rapidly synthesized and degraded\n- Each type of cyclin partners with specific CDKs\n- Their periodic presence/absence helps control cell cycle timing"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "What happens to cyclin levels during the cell cycle?",
        options: [
          "They remain constant throughout the cell cycle",
          "They gradually decrease but never increase",
          "They rise and fall in a periodic pattern",
          "They increase continuously without dropping"
        ],
        correctAnswer: "C",
        explanation: "Cyclin levels rise and fall in a periodic pattern throughout the cell cycle - this is actually how they got their name. Different cyclins peak at different points in the cell cycle. For example, G1 cyclins peak in G1 phase, while mitotic cyclins peak during M phase. This periodic pattern helps ensure that cell cycle events occur in the correct order.",
        hint: "Consider why these proteins are called 'cyclins.'"
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Types of Cyclin-CDK Complexes:\n\nDifferent cyclin-CDK complexes control different cell cycle transitions:\n1. G1 cyclins and CDKs control entry into the cell cycle\n2. G1/S cyclins and CDKs trigger DNA replication\n3. S cyclins and CDKs regulate DNA replication\n4. M cyclins and CDKs control mitotic events"
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A cell has high levels of M cyclin and active M-CDKs. In which phase is this cell most likely to be?",
        options: [
          "G1 phase",
          "S phase",
          "G2 phase or early M phase",
          "Late G1 phase"
        ],
        correctAnswer: "C",
        explanation: "High levels of M cyclin and active M-CDKs indicate that the cell is either in G2 phase or early M phase. M cyclin levels begin rising in G2 and peak during M phase to trigger and regulate mitotic events. These complexes are responsible for initiating chromosome condensation, nuclear envelope breakdown, and other mitotic processes.",
        hint: "Think about when M cyclin-CDK complexes need to be active during the cell cycle."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Regulation of Cyclin-CDK Activity:\n\nCyclin-CDK activity is controlled at multiple levels:\n1. Cyclin synthesis and degradation\n2. CDK phosphorylation and dephosphorylation\n3. Binding of inhibitory proteins (CKIs)\n4. Cell cycle checkpoints that monitor conditions\n\nThis multiple-level regulation ensures that cell cycle events occur in the correct order and only under appropriate conditions."
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "What would happen if cells couldn't degrade cyclins?",
        options: [
          "The cell cycle would stop completely",
          "Cells would progress through the cycle faster",
          "Cells would get stuck in specific phases",
          "Cell division would become more efficient"
        ],
        correctAnswer: "C",
        explanation: "If cells couldn't degrade cyclins, they would get stuck in specific phases of the cell cycle. Cyclin degradation is essential for transitioning between different phases. For example, cells must degrade M cyclins to exit mitosis. Without cyclin degradation, cells couldn't properly transition between phases, leading to cell cycle arrest at specific points.",
        hint: "Consider why the periodic rise and fall of cyclin levels is important."
      }
    }
  ]
};

export default cyclinsAndCdks;
