import { TextStyle } from "@/types/text-style";

const CSS_CONFIG = {
  green: {
    primary: {
      default: "bg-green-500 text-white hover:bg-green-300",
      active: "",
      disabled: "bg-grey-300 text-grey-500",
    },
    secondary: {
      default: "text-green-500 border border-green-500 hover:bg-green-50",
      active: "bg-green-50 border border-green-500 text-green-500",
      disabled: "bg-white border border-grey-300 text-grey-500",
    },
  },
  grey: {
    primary: {
      default: "bg-grey-200 text-grey-900 hover:bg-grey-300",
      active: "",
      disabled: "bg-grey-100 text-grey-400",
    },
    secondary: {
      default: "bg-grey-200 text-grey-900 hover:bg-grey-300",
      active: "",
      disabled: "bg-grey-100 text-grey-400",
    },
  },
  yellow: {
    primary: {
      default: "bg-yellow-500 text-white hover:bg-yellow-300",
      active: "",
      disabled: "bg-grey-300 text-grey-500",
    },
    secondary: {
      default:
        "bg-yellow-50 border border-yellow-500 text-yellow-500 hover:bg-yellow-50",
      active: "",
      disabled: "bg-white border border-grey-300 text-grey-500",
    },
  },
};

export default function Button({
  color,
  type = "primary",
  state,
  onClick,
  text,
  textStyle = "body2",
  isDisabled = false,
}: {
  color: "green" | "grey" | "yellow";
  type?: "primary" | "secondary";
  state: "default" | "disabled" | "active";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  textStyle?: TextStyle;
  isDisabled?: boolean;
}) {
  return (
    <button
      disabled={isDisabled}
      className={`rounded-lg w-full h-full ${CSS_CONFIG[color][type][state]} ${textStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
