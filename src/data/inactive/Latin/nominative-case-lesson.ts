import { Lesson } from '@/types/lesson';

const NominativeCaseLesson: Lesson = {
  "id": "nominative-case-lesson",
  "title": "The Nominative Case: Your Entry to Latin",
  "description": "Master the nominative case through focused examples and regular practice, building a strong foundation for Latin noun usage.",
  "tags": ["latin", "grammar", "nominative", "first-declension"],
  "estimatedTime": "short",
  "sections": [
    {
      "type": "content",
      "content": [
        {
          "type": "text",
          "content": "The Nominative Case: Basic Function\n\nIn Latin, the nominative case is used for the subject of a sentence - the person or thing doing the action. For first declension nouns, it ends in -a:\n\npuella (the girl)\nterra (the land)\namica (the friend)"
        }
      ]
    },
    {
      "type": "question",
      "question": {
        "type": "multiple-choice",
        "question": "In the sentence 'The girl walks', which form is correct?",
        "options": [
          "puellae ambulat",
          "puella ambulat",
          "puellam ambulat",
          "puellā ambulat"
        ],
        "correctAnswer": "B",
        "explanation": "Since 'the girl' is doing the action (walking), we use the nominative case ending -a: puella ambulat.",
        "hint": "Who is performing the action of walking?"
      }
    },
    {
      "type": "content",
      "content": [
        {
          "type": "text",
          "content": "The Predicate Nominative\n\nWhen using forms of 'to be' (esse), both nouns refer to the same thing and use the nominative:\n\npuella est amica (the girl is a friend)\nterra est patria (the land is the homeland)"
        }
      ]
    },
    {
      "type": "question",
      "question": {
        "type": "multiple-choice",
        "question": "Complete the sentence: 'Regina est _____' (The queen is a friend)",
        "options": [
          "amica",
          "amicae",
          "amicam",
          "amicā"
        ],
        "correctAnswer": "A",
        "explanation": "With the verb 'est' (is), both nouns must be in the nominative case. Therefore, we use 'amica' to match 'regina'.",
        "hint": "After forms of 'to be', both nouns should match cases."
      }
    },
    {
      "type": "content",
      "content": [
        {
          "type": "text",
          "content": "Multiple Subjects\n\nWhen you have multiple subjects, all use the nominative:\n\npuella et amica cantant (the girl and friend sing)\nregina et ancilla laborant (the queen and servant work)"
        }
      ]
    },
    {
      "type": "question",
      "question": {
        "type": "multiple-choice",
        "question": "Which is correct for 'The poet and friend write'?",
        "options": [
          "poeta et amicae scribunt",
          "poetae et amica scribunt",
          "poeta et amica scribunt",
          "poeta et amicam scribunt"
        ],
        "correctAnswer": "C",
        "explanation": "Both subjects need the nominative case: 'poeta' (nom.) et 'amica' (nom.) scribunt",
        "hint": "Both people are doing the writing, so both need to be subjects."
      }
    },
    {
      "type": "content",
      "content": [
        {
          "type": "text",
          "content": "Subject-Verb Agreement\n\nThe nominative subject must agree with its verb in number:\n\npuella cantat (the girl sings) - singular\npuellae cantant (the girls sing) - plural\n\nNote: We'll learn plural forms in detail later!"
        }
      ]
    },
    {
      "type": "question",
      "question": {
        "type": "multiple-choice",
        "question": "Which matches 'The friend works'?",
        "options": [
          "amica laborant",
          "amicae laborat",
          "amica laborat",
          "amicae laborant"
        ],
        "correctAnswer": "C",
        "explanation": "For a single friend working, we need:\n- singular nominative (amica)\n- singular verb (laborat)",
        "hint": "Match the number (singular/plural) of the subject and verb."
      }
    },
    {
      "type": "content",
      "content": [
        {
          "type": "text",
          "content": "Nominative for Description\n\nThe nominative can be used with adjectives to describe the subject:\n\npuella bona (the good girl)\nterra magna (the great land)\n\nThe adjective must match the noun's case!"
        }
      ]
    },
    {
      "type": "question",
      "question": {
        "type": "multiple-choice",
        "question": "How do you say 'the good queen'?",
        "options": [
          "regina bona",
          "reginae bonae",
          "regina bonam",
          "regina bonae"
        ],
        "correctAnswer": "A",
        "explanation": "Both the noun and its describing adjective must be in the nominative case: regina (nom.) bona (nom.)",
        "hint": "The adjective must match the case of the noun it describes."
      }
    },
    {
      "type": "question",
      "question": {
        "type": "multiple-choice",
        "question": "Practice: Which sentence means 'The land is beautiful'?",
        "options": [
          "terrae pulchra est",
          "terra pulchram est",
          "terra pulchra est",
          "terram pulchra est"
        ],
        "correctAnswer": "C",
        "explanation": "We need both the subject and predicate adjective in nominative: terra (nom.) pulchra (nom.) est",
        "hint": "With 'est', both the noun and adjective should be nominative."
      }
    },
    {
      "type": "question",
      "question": {
        "type": "multiple-choice",
        "question": "Practice: Translate 'The girl and the queen are friends'",
        "options": [
          "puella et regina amicae sunt",
          "puellae et regina amica sunt",
          "puella et reginam amicae sunt",
          "puella et reginae amica sunt"
        ],
        "correctAnswer": "A",
        "explanation": "All nouns must be nominative:\n- puella (nom.)\n- regina (nom.)\n- amicae (nom. plural - because it refers to multiple people)",
        "hint": "Everyone mentioned should be in nominative, and the predicate nominative should be plural."
      }
    },
    {
      "type": "question",
      "question": {
        "type": "multiple-choice",
        "question": "Practice: Complete 'The good servant works' in Latin",
        "options": [
          "ancillae bona laborat",
          "ancilla bonam laborat",
          "ancilla bona laborat",
          "ancillam bona laborat"
        ],
        "correctAnswer": "C",
        "explanation": "We need:\n- ancilla (nom. - subject)\n- bona (nom. - matching adjective)\n- laborat (3rd person singular verb)",
        "hint": "Both the noun and its adjective should be in nominative case as the subject."
      }
    }
  ]
}

export default NominativeCaseLesson;