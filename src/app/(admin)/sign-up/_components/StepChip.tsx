interface StepChipProps {
  stepIndex: number;
  isActive?: boolean;
}
function StepChip({ stepIndex, isActive = false }: StepChipProps) {
  return (
    <button
      className={`flex justify-center items-center rounded-lg w-6 h-5 caption ${
        isActive ? "bg-green-500 text-white" : "bg-grey-300 text-grey-500"
      } `}
    >
      {stepIndex}
    </button>
  );
}

export default function StepChips({
  totalChips = 2,
  activeIndex,
}: {
  totalChips?: number;
  activeIndex: number;
}) {
  return (
    <div className="flex justify-center gap-4 mt-4 mb-8">
      {Array(totalChips)
        .fill(0)
        .map((_, idx) => {
          return (
            <StepChip
              key={`chip-${idx}`}
              stepIndex={idx + 1}
              isActive={idx + 1 === activeIndex}
            />
          );
        })}
    </div>
  );
}
