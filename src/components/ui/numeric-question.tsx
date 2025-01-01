// Path: src\components\ui

import { useState } from 'react';
import { renderLatexContent } from '@/utils/latex-renderer';

interface NumericQuestionProps {
  question: string;
  correctAnswer: number;
  tolerance: number;
  explanation: string;
  hint: string;
  onCorrect: () => void;
  isActive: boolean;
}

export function NumericQuestion({
  question,
  correctAnswer,
  tolerance,
  explanation,
  hint,
  onCorrect,
  isActive
}: NumericQuestionProps) {
  const [value, setValue] = useState<string>('');
  const [hasCheckedOnce, setHasCheckedOnce] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [lastCheckState, setLastCheckState] = useState<string>('border-gray-700 bg-gray-800');

  const handleCheck = () => {
    const numericValue = parseFloat(value);
    const isWithinTolerance = Math.abs(numericValue - correctAnswer) <= tolerance;
    setHasCheckedOnce(true);
    setIsCorrect(isWithinTolerance);
    
    const newState = isWithinTolerance 
      ? 'border-green-500/30 bg-green-900/30'
      : 'border-yellow-500/30 bg-yellow-900/30';
    setLastCheckState(newState);
    
    if (isWithinTolerance) {
      onCorrect?.();
    }
  };

  const handleExplanation = () => {
    setShowExplanation(!showExplanation);
    if (!showExplanation && !isCorrect) {
      setIsCorrect(true);
      onCorrect?.();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers, decimal point, and minus sign
    const value = e.target.value.replace(/[^0-9.-]/g, '');
    // Prevent multiple decimal points
    const decimalCount = (value.match(/\./g) || []).length;
    if (decimalCount <= 1) {
      setValue(value);
    }
  };

  const handleInputFocus = () => {
    // Reset background color if answer was incorrect and not showing explanation
    if (hasCheckedOnce && !isCorrect && !showExplanation) {
      setLastCheckState('border-gray-700 bg-gray-800');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg">
      <div className="mb-6 text-lg text-white">{renderLatexContent(question)}</div>
      
      <div className="space-y-4">
        <div className={`p-4 rounded-lg border ${
          !hasCheckedOnce ? 'border-gray-700 bg-gray-800' : lastCheckState
        }`}>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            disabled={!isActive || showExplanation || isCorrect}
            placeholder="Enter your answer..."
            className="w-full bg-transparent border-none outline-none text-white placeholder-gray-500 text-lg"
          />
        </div>
      </div>
      
      <div className="mt-6 flex justify-center gap-4">
        {!isCorrect && isActive && (
          <button
            onClick={handleCheck}
            disabled={!value}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-white"
          >
            Check
          </button>
        )}
        {hasCheckedOnce && (
          <>
            {isCorrect && isActive && (
              <button
                onClick={onCorrect}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white"
              >
                Continue
              </button>
            )}
            <button
              onClick={handleExplanation}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white"
            >
              Why? {showExplanation ? "▼" : "▲"}
            </button>
          </>
        )}
      </div>
      
      {showExplanation && (
        <div className="mt-4 p-4 rounded-lg bg-gray-800 text-gray-200">
          {renderLatexContent(explanation)}
        </div>
      )}
    </div>
  );
}