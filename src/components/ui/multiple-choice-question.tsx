'use client';

import { useState } from 'react';

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hint: string;
  onCorrect: () => void;
  isActive: boolean;
}

export function MultipleChoiceQuestion({ 
  question,
  options,
  correctAnswer,
  explanation,
  hint,
  onCorrect,
  isActive
}: MultipleChoiceQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleCheck = () => {
    setIsChecked(true);
    const correct = selected === correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      onCorrect?.();
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg transition-opacity duration-300 ${
      isActive ? 'opacity-100' : 'opacity-60'
    }`}>
      <div className="mb-6 text-lg text-white">{question}</div>
      
      <div className="space-y-3">
        {options.map((option, index) => {
          const letter = String.fromCharCode(65 + index);
          const isSelected = selected === letter;
          
          let bgColor = "bg-gray-800 hover:bg-gray-700";
          if (isChecked) {
            if (letter === correctAnswer) {
              bgColor = "bg-green-900/30 border-green-500/30";
            } else if (isSelected && letter !== correctAnswer) {
              bgColor = "bg-red-900/30 border-red-500/30";
            }
          }
          
          return (
            <button
              key={letter}
              onClick={() => isActive && !isChecked && setSelected(letter)}
              disabled={!isActive}
              className={`w-full p-4 flex items-center text-left rounded-lg border border-gray-700 transition-colors ${bgColor} ${
                isSelected ? "ring-2 ring-blue-500" : ""
              } ${!isActive && !isChecked ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              <div className="mr-3">
                <div className={`w-6 h-6 flex items-center justify-center rounded-full border ${
                  isSelected ? "border-blue-500 bg-blue-500/20" : "border-gray-600"
                }`}>
                  <span className="text-sm">{letter}</span>
                </div>
              </div>
              <span className="text-gray-200">{option}</span>
            </button>
          );
        })}
      </div>
      
      {isActive && (
        <div className="mt-6 flex justify-center gap-4">
          {!isCorrect && (
            <button
              onClick={handleCheck}
              disabled={!selected || (isChecked && !isCorrect)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-white"
            >
              Check
            </button>
          )}
          {isCorrect && (
            <button
              onClick={onCorrect}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white"
            >
              Continue
            </button>
          )}
          {isChecked && !isCorrect && (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white"
            >
              Why? {showExplanation ? "▼" : "▲"}
            </button>
          )}
        </div>
      )}
      
      {isChecked && !isCorrect && (
        <div className="mt-4 p-4 rounded-lg bg-red-900/30 text-red-200">
          Incorrect. Hint: {hint}
        </div>
      )}
      
      {showExplanation && (
        <div className="mt-4 p-4 rounded-lg bg-gray-800 text-gray-200">
          <h3 className="font-semibold mb-2">Explanation</h3>
          {explanation}
        </div>
      )}
    </div>
  );
}