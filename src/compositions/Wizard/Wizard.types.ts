import { ReactNode } from "react";

export interface WizardStep {
  id: string;
  title: string;
  content: ReactNode;
  optional?: boolean;
}

export interface WizardProps {
  steps: WizardStep[];
  currentStep?: number;
  onStepChange?: (step: number) => void;
  onComplete?: () => void;
}
