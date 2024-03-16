import { TextStyle } from "@/types/text-style";

const CSS_CONFIG = {
  green: {
    default: "bg-green-500 text-white hover:bg-green-300",
    disabled: "bg-grey-300 text-grey-500",
  },
  grey: {
    default: "bg-grey-200 text-grey-900 hover:bg-grey-300",
    disabled: "bg-grey-100 text-grey-400",
  },
  yellow: {
    default: "bg-yellow-500 text-white hover:bg-yellow-300",
    disabled: "bg-grey-300 text-grey-500",
  },
};

export default function Button({
  color,
  type,
  onClick,
  text,
  textStyle = "body2",
}: {
  color: "green" | "grey" | "yellow";
  type: "default" | "disabled";
  onClick: () => void;
  text: string;
  textStyle?: TextStyle;
}) {
  return (
    <button
      disabled={type === "disabled"}
      className={`rounded-lg px-4 h-full ${CSS_CONFIG[color][type]} ${textStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
