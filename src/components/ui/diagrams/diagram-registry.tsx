// Path: src\components\ui\diagrams

import { CircularMotionDiagram } from './circular-motion-diagram';
import { DiagramType, DiagramProps } from './types';

const diagramComponents: Record<DiagramType, React.ComponentType<DiagramProps>> = {
  'circular-motion': CircularMotionDiagram,
  'force-diagram': CircularMotionDiagram, // Placeholder - implement actual component
  'projectile-motion': CircularMotionDiagram, // Placeholder - implement actual component
};

export function DiagramRenderer({ type, ...props }: DiagramProps) {
  const Component = diagramComponents[type];
  if (!Component) {
    console.warn(`Diagram type "${type}" not found`);
    return null;
  }
  
  return <Component type={type} {...props} />;
}