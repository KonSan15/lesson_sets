// scripts/generate-lesson-imports.js

const fs = require('fs');
const path = require('path');

// Correct paths starting from project root
const LESSONS_DIR = path.join(__dirname, '../src/data/lessons');
const OUTPUT_FILE = path.join(__dirname, '../src/generated/lesson-imports.ts');

// Ensure the generated directory exists
const generatedDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(generatedDir)) {
  fs.mkdirSync(generatedDir, { recursive: true });
}

// Read the lessons directory
const files = fs.readdirSync(LESSONS_DIR);
const lessonFiles = files.filter(file => 
  file.endsWith('.ts') || 
  file.endsWith('.tsx')
).map(file => path.basename(file, path.extname(file)));

// Generate the import statements
const importStatements = lessonFiles
  .map(lesson => `  '${lesson}': () => import('@/data/lessons/${lesson}'),`)
  .join('\n');

// Create the output content
const content = `// THIS FILE IS AUTO-GENERATED - DO NOT EDIT
// Generated on ${new Date().toISOString()}

import { Lesson } from '@/types/lesson';

export const lessonModules = {
${importStatements}
} as const;

export type LessonId = keyof typeof lessonModules;
`;

// Write the file
fs.writeFileSync(OUTPUT_FILE, content);

console.log(`Generated lesson imports for ${lessonFiles.length} lessons`);