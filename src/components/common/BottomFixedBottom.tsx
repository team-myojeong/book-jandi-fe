import Button from "./Button";

interface BottomFixedBottomProps {
  state: "default" | "disabled" | "active";
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BottomFixedBottom({
  state,
  text,
  onClick,
}: BottomFixedBottomProps) {
  return (
    <div className="w-[calc(100vw-2rem)] fixed h-32 pt-4 pb-16 bottom-0">
      <Button onClick={onClick} color="green" state={state} text={text} />
    </div>
  );
}
