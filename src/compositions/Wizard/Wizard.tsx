import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";
import { Button } from "@/components/Button/Button";
import { CSSProperties, useState } from "react";
import { WizardProps } from "./Wizard.types";
import "./Wizard.css";

export interface WizardComponentProps extends WizardProps {
  style?: CSSProperties;
}

export const Wizard = ({
  steps,
  currentStep: controlledStep,
  onStepChange,
  onComplete,
  ...props
}: WizardComponentProps) => {
  const [internalStep, setInternalStep] = useState(0);
  const currentStep = controlledStep !== undefined ? controlledStep : internalStep;
  const isControlled = controlledStep !== undefined;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      if (isControlled) {
        onStepChange?.(nextStep);
      } else {
        setInternalStep(nextStep);
      }
    } else {
      onComplete?.();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      if (isControlled) {
        onStepChange?.(prevStep);
      } else {
        setInternalStep(prevStep);
      }
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <Box className="marduk-wizard" {...props}>
      <Box className="marduk-wizard-steps">
        {steps.map((step, index) => (
          <Box
            key={step.id}
            className={`marduk-wizard-step ${index === currentStep ? "marduk-wizard-step--active" : ""} ${
              index < currentStep ? "marduk-wizard-step--completed" : ""
            }`}
          >
            <Box className="marduk-wizard-step-number">{index + 1}</Box>
            <Text className="marduk-wizard-step-title">{step.title}</Text>
          </Box>
        ))}
      </Box>
      <Box className="marduk-wizard-content">{currentStepData?.content}</Box>
      <Box className="marduk-wizard-actions">
        <Button onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} appearance="filled">
          {currentStep === steps.length - 1 ? "Complete" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};
