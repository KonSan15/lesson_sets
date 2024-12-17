'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function DiagnosticInfo() {
  const pathname = usePathname();
  const [cssLoaded, setCssLoaded] = useState(false);
  const [baseElement, setBaseElement] = useState<string | null>(null);

  useEffect(() => {
    // Check if Tailwind styles are applied
    const testElement = document.createElement('div');
    testElement.className = 'bg-blue-500';
    document.body.appendChild(testElement);
    const styles = window.getComputedStyle(testElement);
    setCssLoaded(styles.backgroundColor !== '');
    document.body.removeChild(testElement);

    // Check base element
    const base = document.querySelector('base');
    setBaseElement(base?.getAttribute('href') || null);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return (
      <div className="fixed bottom-4 right-4 p-4 bg-gray-800 rounded-lg shadow-lg text-white text-sm">
        <h3 className="font-bold mb-2">Diagnostic Info:</h3>
        <ul className="space-y-1">
          <li>Current Path: {pathname}</li>
          <li>CSS Loaded: {cssLoaded ? '✅' : '❌'}</li>
          <li>Base HREF: {baseElement || 'Not set'}</li>
          <li>Window Location: {typeof window !== 'undefined' ? window.location.href : ''}</li>
        </ul>
      </div>
    );
  }
  return null;
}