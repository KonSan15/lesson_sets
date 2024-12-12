// Path: src\components\ui\diagrams

export type DiagramType = 'circular-motion' | 'force-diagram' | 'projectile-motion';

export interface DiagramProps {
  type: DiagramType;
  interactive?: boolean;
  width?: number;
  height?: number;
  className?: string;
}