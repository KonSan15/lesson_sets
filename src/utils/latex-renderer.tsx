// src/utils/latex-renderer.tsx
import { InlineMath, BlockMath } from 'react-katex';

export function renderLatexContent(text: string) {
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/s);
  
  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const math = part.slice(2, -2);
      return <BlockMath key={index} math={math} />;
    } 
    if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1);
      return <InlineMath key={index} math={math} />;
    }
    return <span key={index}>{part}</span>;
  });
}