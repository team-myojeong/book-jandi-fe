import { Children, isValidElement } from "react";

export interface StepProps<T extends readonly string[]> {
  name: T[number];
  children: React.ReactNode;
}

export const Step = <T extends readonly string[]>({
  children,
}: StepProps<T>) => {
  return <>{children}</>;
};

export interface FunnelProps<T extends readonly string[]> {
  steps: T;
  step: T[number];
  children: React.ReactNode;
}

export const Funnel = <T extends readonly string[]>({
  steps,
  step,
  children,
}: FunnelProps<T>) => {
  const validElement = Children.toArray(children)
    .filter(isValidElement)
    .filter((i) =>
      steps.includes((i.props as Partial<StepProps<T>>).name ?? "")
    ) as Array<React.ReactElement<StepProps<T>>>;

  const targetElement = validElement.find(
    (child) => (child.props as StepProps<T>)?.name === step
  );

  if (!targetElement) {
    return null;
  }

  return <>{targetElement}</>;
};
