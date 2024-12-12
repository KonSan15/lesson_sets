import { Lesson } from '@/types/lesson';

const latinFirstDeclensionBasics: Lesson = {
    "id": "latin-first-declension-basics",
    "title": "Latin First Declension: Building Your Foundation",
    "description": "Master the first declension in Latin through an engaging exploration of noun endings and their uses in sentences. This lesson introduces the fundamental concept of noun cases through the lens of -a stem nouns.",
    "tags": ["latin", "grammar", "nouns", "first-declension", "cases"],
    "estimatedTime": "medium",
    "sections": [
      {
        "type": "content",
        "content": [
          {
            "type": "text",
            "content": "Imagine you're trying to tell a story about a girl (puella) who gives a letter (epistula) to her friend (amica). In English, we use word order to show who's doing what: 'The girl gives the letter to her friend.' But Latin works differently - it uses special endings to show these relationships, no matter where the words appear in the sentence.\n\nThis system of endings is called 'declension,' and we'll start with the first declension - the family of nouns that typically end in -a in their basic form."
          }
        ]
      },
      {
        "type": "content",
        "content": [
          {
            "type": "text",
            "content": "The First Declension Pattern (Singular)\n\nLet's look at how our word 'puella' (girl) changes:\n\nNominative (subject): puella (-a) → The girl\nGenitive (possession): puellae (-ae) → of the girl\nDative (indirect object): puellae (-ae) → to/for the girl\nAccusative (direct object): puellam (-am) → the girl (as object)\nAblative (by/with/from): puellā (-ā) → by/with/from the girl\n\nNotice that most first declension nouns follow this exact pattern - it's just the stem + these endings!"
          }
        ]
      },
      {
        "type": "question",
        "question": {
          "type": "multiple-choice",
          "question": "In the sentence 'The poet gives a rose to the girl', what ending should 'puella' have?",
          "options": [
            "puella (nominative)",
            "puellae (genitive)",
            "puellae (dative)",
            "puellam (accusative)"
          ],
          "correctAnswer": "C",
          "explanation": "Since the girl is receiving the rose, she's the indirect object of the verb 'gives'. In Latin, indirect objects take the dative case, which ends in -ae in the first declension.",
          "hint": "Think about who is receiving something in this sentence."
        }
      },
      {
        "type": "content",
        "content": [
          {
            "type": "text",
            "content": "Let's see how these endings work in a complete sentence:\n\nPoeta puellae rosam dat.\n(The poet gives a rose to the girl.)\n\nHere:\n- poeta is nominative (subject)\n- puellae is dative (to the girl)\n- rosam is accusative (direct object)\n\nThe beauty of Latin is that you could rearrange these words in any order, and the meaning stays the same because the endings tell us who's doing what!"
          }
        ]
      },
      {
        "type": "question",
        "question": {
          "type": "multiple-choice",
          "question": "Which form of 'epistula' (letter) would you use to say 'with the letter'?",
          "options": [
            "epistula",
            "epistulae",
            "epistulam",
            "epistulā"
          ],
          "correctAnswer": "D",
          "explanation": "The ablative case (ending in -ā) is used to express 'with/by/from'. Therefore, 'with the letter' would be 'epistulā'.",
          "hint": "The ablative case is used for expressing 'with', among other things."
        }
      },
      {
        "type": "content",
        "content": [
          {
            "type": "text",
            "content": "Common First Declension Nouns to Practice With:\n\namica (friend)\ntera (earth, land)\nrosa (rose)\nepistula (letter)\nvita (life)\n\nTry making simple sentences with these words, paying attention to their role in the sentence to choose the right ending!"
          }
        ]
      },
      {
        "type": "question",
        "question": {
          "type": "multiple-choice",
          "question": "Translate: 'The life of the friend' - Which endings would you use?",
          "options": [
            "vita amicae",
            "vitam amica",
            "vita amica",
            "vitae amicam"
          ],
          "correctAnswer": "A",
          "explanation": "When showing possession ('of the friend'), we use the genitive case (-ae). The word 'life' is the main noun here, so it stays in the nominative case (-a). Therefore, 'vita amicae' is correct.",
          "hint": "One word shows possession (uses 'of'), and the other is the main noun."
        }
      }
    ]
  }

export default latinFirstDeclensionBasics;