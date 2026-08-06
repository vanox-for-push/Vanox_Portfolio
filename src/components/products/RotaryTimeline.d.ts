import React from 'react';

export interface RotaryTimelineStep {
  step?: string;
  title?: string;
  description?: string;
  points?: string[];
  [key: string]: any;
}

export interface RotaryTimelineProps {
  items?: RotaryTimelineStep[];
  process?: RotaryTimelineStep[];
  [key: string]: any;
}

declare const RotaryTimeline: React.FC<RotaryTimelineProps>;
export default RotaryTimeline;
