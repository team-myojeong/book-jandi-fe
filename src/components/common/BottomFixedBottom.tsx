import Button from "./Button";

interface BottomFixedBottomProps {
  text: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BottomFixedBottom({
  text,
  disabled,
  onClick,
}: BottomFixedBottomProps) {
  return (
    <div className="fixed bottom-0 h-32 w-[calc(100vw-2rem)] max-w-[calc(500px-2rem)] pb-16 pt-4">
      <Button
        text={text}
        color="green"
        state={disabled ? "disabled" : "default"}
        isDisabled={disabled}
        onClick={onClick}
      />
    </div>
  );
}
