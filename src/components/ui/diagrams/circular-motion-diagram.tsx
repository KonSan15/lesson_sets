import { useState, useEffect } from 'react';

const CircularMotionDiagram = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const animate = () => {
      setRotation(prev => (prev + 0.5) % 360);
      requestAnimationFrame(animate);
    };
    
    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, [isPaused]);

  // Constants
  const centerX = 100;
  const centerY = 100;
  const radius = 60;
  const vectorScale = 0.75;
  
  // Calculate positions and vectors
  const angle = (rotation * Math.PI) / 180;
  const objectX = centerX + radius * Math.cos(angle);
  const objectY = centerY + radius * Math.sin(angle);

  // Velocity vector (tangent to circle)
  const velocityMagnitude = 40 * vectorScale;
  const velocityAngle = angle + Math.PI / 2;
  const velocityX = velocityMagnitude * Math.cos(velocityAngle);
  const velocityY = velocityMagnitude * Math.sin(velocityAngle);

  // Centripetal acceleration vector (pointing to center)
  const accelerationMagnitude = 30 * vectorScale;
  const accelerationX = -accelerationMagnitude * Math.cos(angle);
  const accelerationY = -accelerationMagnitude * Math.sin(angle);

  // Calculate label positions at vector tips with small offset
  const labelOffset = 10;
  
  // Position both labels at vector tips
  const velocityLabelX = objectX + velocityX + (labelOffset * Math.cos(velocityAngle));
  const velocityLabelY = objectY + velocityY + (labelOffset * Math.sin(velocityAngle));
  
  const accelerationLabelX = objectX + accelerationX + (labelOffset * Math.cos(angle + Math.PI));
  const accelerationLabelY = objectY + accelerationY + (labelOffset * Math.sin(angle + Math.PI));

  return (
    <div className="relative w-full max-w-md mx-auto">
      
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <marker
            id="velocityArrow"
            markerWidth="10"
            markerHeight="6"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon 
              points="0 0, 10 3, 0 6"
              className="fill-emerald-500"
            />
          </marker>

          <marker
            id="accelerationArrow"
            markerWidth="10"
            markerHeight="6"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon 
              points="0 0, 10 3, 0 6"
              className="fill-red-500"
            />
          </marker>
        </defs>

        {/* Circular path */}
        <circle 
          cx={centerX}
          cy={centerY}
          r={radius}
          className="stroke-blue-500/30 fill-none"
          strokeWidth="1"
          strokeDasharray="4 2"
        />

        {/* Center point */}
        <circle 
          cx={centerX}
          cy={centerY}
          r="1.5"
          className="fill-gray-500"
        />

        {/* Vectors and moving object */}
        <g filter="url(#glow)">
          {/* Velocity vector */}
          <line 
            x1={objectX}
            y1={objectY}
            x2={objectX + velocityX}
            y2={objectY + velocityY}
            className="stroke-emerald-500"
            strokeWidth="1.5"
            markerEnd="url(#velocityArrow)"
          />
          
          {/* Acceleration vector */}
          <line 
            x1={objectX}
            y1={objectY}
            x2={objectX + accelerationX}
            y2={objectY + accelerationY}
            className="stroke-red-500"
            strokeWidth="1.5"
            markerEnd="url(#accelerationArrow)"
          />

          {/* Moving object */}
          <circle 
            cx={objectX}
            cy={objectY}
            r="3"
            className="fill-blue-500"
          />
        </g>

        {/* Vector labels - now both at tips */}
        <g className="text-xs">
          <text 
            x={velocityLabelX}
            y={velocityLabelY}
            className="fill-emerald-500 font-semibold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            v
          </text>
          <text 
            x={accelerationLabelX}
            y={accelerationLabelY}
            className="fill-red-500 font-semibold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            a
          </text>
        </g>
      </svg>
    </div>
  );
};

export default CircularMotionDiagram;