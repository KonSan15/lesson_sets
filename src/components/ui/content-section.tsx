// src/components/ui/content-section.tsx
'use client';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import CircularMotionDiagram from './diagrams/circular-motion-diagram';

interface ContentSectionProps {
  content: string;
  onContinue: () => void;
  showContinue: boolean;
}

export function ContentSection({ content, onContinue, showContinue }: ContentSectionProps) {
  const renderContent = (text: string) => {
    // Split by LaTeX delimiters
    const parts = text.split(/(\$\$.*?\$\$|\$.*?\$|\[DIAGRAM\])/s);
    
    return parts.map((part, index) => {
      // Handle display math ($$...$$)
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const math = part.slice(2, -2);
        return <BlockMath key={index} math={math} />;
      } 
      // Handle inline math ($...$)
      else if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1);
        return <InlineMath key={index} math={math} />;
      }
      // Handle diagrams
      else if (part === '[DIAGRAM]') {
        return <CircularMotionDiagram key={index} />;
      }
      // Regular text
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="prose prose-invert max-w-none">
      <div className="mb-6 text-gray-200 whitespace-pre-line">
        {renderContent(content)}
      </div>
      {showContinue && (
        <button
          onClick={onContinue}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
        >
          Continue
        </button>
      )}
    </div>
  );
}