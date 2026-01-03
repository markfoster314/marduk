import { ReactNode } from "react";

export interface CarouselProps {
  items: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}
