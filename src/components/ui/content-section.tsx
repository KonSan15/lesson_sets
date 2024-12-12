'use client';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface ContentSectionProps {
  content: string;
  onContinue: () => void;
  showContinue: boolean;
}

export function ContentSection({ content, onContinue, showContinue }: ContentSectionProps) {
  // Function to render content with LaTeX
  const renderContent = (text: string) => {
    // Split the text by LaTeX delimiters
    const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        // Display math mode (centered equation)
        const math = part.slice(2, -2);
        return <BlockMath key={index} math={math} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        // Inline math mode
        const math = part.slice(1, -1);
        return <InlineMath key={index} math={math} />;
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