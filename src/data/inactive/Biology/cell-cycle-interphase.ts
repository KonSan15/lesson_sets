import { Lesson } from '@/types/lesson';

const interphaseLesson: Lesson = {
  id: "cell-cycle-interphase",
  title: "Understanding Interphase: The Cell's Busy Preparation Phase",
  description: "Learn about interphase, the longest phase of the cell cycle where cells grow, replicate DNA, and prepare for division. Explore the three sub-phases (G1, S, and G2) and their critical roles in cell preparation.",
  tags: ["biology", "cell cycle", "interphase", "DNA replication", "cell growth"],
  estimatedTime: "medium",
  sections: [
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Interphase is often misunderstood as the 'resting phase' of the cell cycle. In reality, it's the busiest time in a cell's life! During this phase, cells grow, replicate their DNA, and prepare for division. Let's explore the three main sub-phases of interphase: G1, S, and G2."
        }
      ]
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "G1 (First Gap) Phase:\n\nDuring G1, the cell grows in size and synthesizes new proteins and organelles. This is when the cell performs its normal functions and evaluates internal and external conditions to determine if it should proceed with division. The cell must pass through the G1 checkpoint before moving to the S phase."
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which of the following best describes the main purpose of the G1 phase?",
        options: [
          "DNA replication and chromosome duplication",
          "Cell growth and protein synthesis",
          "Preparation for mitosis and organelle duplication",
          "Nuclear envelope breakdown and spindle formation"
        ],
        correctAnswer: "B",
        explanation: "G1 (First Gap) phase is primarily focused on cell growth and protein synthesis. During this time, the cell increases in size and produces the proteins it needs for normal function. DNA replication occurs later in S phase, while preparation for mitosis happens in G2 phase.",
        hint: "Think about what a cell needs to do before it can copy its DNA."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "S (Synthesis) Phase:\n\nDuring S phase, the cell replicates its DNA. Each chromosome is duplicated to form sister chromatids, which remain connected at the centromere. This process ensures that each daughter cell will receive a complete set of genetic information after division. DNA replication must be extremely accurate, with multiple checkpoints to prevent errors."
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "What is the main event that occurs during S phase?",
        options: [
          "Cell growth and protein synthesis",
          "DNA replication and chromosome duplication",
          "Preparation for cytokinesis",
          "Nuclear membrane dissolution"
        ],
        correctAnswer: "B",
        explanation: "S (Synthesis) phase is when DNA replication occurs. During this phase, each chromosome is duplicated to form identical sister chromatids. This is essential for ensuring that each daughter cell will receive a complete copy of the genetic material during cell division.",
        hint: "The 'S' in S phase stands for Synthesis - but synthesis of what?"
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "G2 (Second Gap) Phase:\n\nDuring G2, the cell continues to grow and synthesizes proteins needed for cell division. The cell also duplicates many of its organelles and begins to reorganize its contents in preparation for mitosis. The G2 checkpoint ensures that DNA replication is complete and that the cell is ready to divide."
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "A cell discovers DNA damage during the G2 phase. What is the most likely outcome?",
        options: [
          "The cell will immediately begin mitosis",
          "The cell will return to G1 phase",
          "The cell will pause at the G2 checkpoint until repairs are made",
          "The cell will skip mitosis entirely"
        ],
        correctAnswer: "C",
        explanation: "The G2 checkpoint is a critical quality control point that ensures DNA has been properly replicated and is undamaged before allowing the cell to enter mitosis. If DNA damage is detected, the cell will pause at the G2 checkpoint until repairs can be made. This prevents the transmission of damaged genetic material to daughter cells.",
        hint: "Think about the purpose of cell cycle checkpoints."
      }
    },
    {
      type: "content",
      content: [
        {
          type: "text",
          content: "Cell Cycle Regulation:\n\nThe progression through interphase is carefully regulated by proteins called cyclins and cyclin-dependent kinases (CDKs). These proteins work together to control the cell cycle checkpoints and ensure that each phase is completed properly before the next begins. Environmental conditions, growth factors, and cell size all influence whether a cell will complete interphase and divide."
        }
      ]
    },
    {
      type: "question",
      question: {
        type: "multiple-choice",
        question: "Which statement best describes the relationship between the phases of interphase?",
        options: [
          "They can occur in any order as long as all phases are completed",
          "They must occur in the specific order of G1 → S → G2",
          "They occur simultaneously throughout interphase",
          "Their order depends on the cell type"
        ],
        correctAnswer: "B",
        explanation: "The phases of interphase must occur in the specific order of G1 → S → G2. This sequence is crucial because each phase builds upon the preparations made in the previous phase. G1 allows the cell to grow and prepare for DNA replication, S phase is when DNA replication occurs, and G2 provides final preparations for mitosis. The order is strictly controlled by cell cycle checkpoints.",
        hint: "Consider how each phase prepares the cell for the next phase."
      }
    }
  ]
};

export default interphaseLesson;
