// src/components/ui/progress-pie.tsx

'use client';

interface ProgressPieProps {
  progress: number; // 0 to 1
  size?: number;
  className?: string;
}

export function ProgressPie({ progress, size = 40, className = '' }: ProgressPieProps) {
  // Ensure progress is between 0 and 1
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  // Calculate the circle's parameters
  const radius = size / 2;
  const strokeWidth = size / 10;
  const adjustedRadius = radius - strokeWidth / 2;
  
  // Calculate circumference
  const circumference = 2 * Math.PI * adjustedRadius;
  
  // Calculate the stroke dash offset based on progress
  const dashOffset = circumference * (1 - clampedProgress);
  
  // Calculate the displayed percentage
  const percentage = Math.round(clampedProgress * 100);
  
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Background circle */}
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          className="stroke-gray-800"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={adjustedRadius}
          cx={radius}
          cy={radius}
        />
        
        {/* Progress circle */}
        <circle
          className="stroke-blue-500 transition-all duration-300"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          r={adjustedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center text-xs">
        {percentage}%
      </div>
    </div>
  );
}