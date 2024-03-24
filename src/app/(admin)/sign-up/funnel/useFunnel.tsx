import { useState } from "react";
import { FunnelProps, Funnel, StepProps, Step } from "./Funnel";

export const useFunnel = <T extends readonly string[]>(
  steps: T,
  defaultStep: T[number]
) => {
  const [step, setStep] = useState(defaultStep);

  const FunnelElement = Object.assign(
    (props: Omit<FunnelProps<T>, "step" | "steps">) => {
      return <Funnel<T> step={step} steps={steps} {...props} />;
    },
    { Step: (props: StepProps<T>) => <Step<T> {...props} /> }
  );
  return [FunnelElement, step, setStep] as const;
};
