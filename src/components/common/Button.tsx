import { cn } from "@/utils/cn";
import { HTMLProps } from "react";

const CSS_CONFIG = {
  green: {
    primary: {
      default: "bg-green-500 text-white hover:bg-green-300",
      active: "",
      disabled: "bg-grey-300 text-grey-500",
    },
    outline: {
      default:
        "bg-white text-grey-500 border border-grey-300 active:bg-green-50 hover:border-green-500 hover:text-green-500",
      active: "bg-green-50 border border-green-500 text-green-500",
      disabled: "bg-grey-100 border border-grey-300 text-grey-500",
    },
  },
  grey: {
    primary: {
      default: "bg-grey-200 text-grey-900 hover:bg-grey-300",
      active: "",
      disabled: "bg-grey-100 text-grey-400",
    },
    outline: {
      default: "",
      active: "",
      disabled: "",
    },
  },
  yellow: {
    primary: {
      default: "bg-yellow-500 text-white hover:bg-yellow-300",
      active: "",
      disabled: "bg-grey-300 text-grey-500",
    },
    outline: {
      default:
        "bg-white text-grey-500 border border-grey-300 active:bg-yellow-50 hover:border-yellow-500 hover:text-yellow-500",
      active: "bg-yellow-50 border border-yellow-500 text-yellow-500",
      disabled: "bg-grey-100 border border-grey-300 text-grey-500",
    },
  },
};

export default function Button({
  text,
  color,
  state,
  type = "primary",
  size = "L",
  isDisabled,
  className,
  onClick,
}: {
  text: string;
  color: "green" | "grey" | "yellow";
  state: "default" | "disabled" | "active";
  type?: "primary" | "outline";
  size?: "L" | "M" | "S";
  isDisabled?: boolean;
  className?: HTMLProps<HTMLButtonElement>["className"];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      disabled={isDisabled}
      className={cn(
        `w-full whitespace-pre rounded-lg align-middle transition ease-linear ${CSS_CONFIG[color][type][state]}`,
        size === "L" && "title2 px-4 py-3",
        size === "M" && "body1-emphasis px-4 py-2",
        size === "S" && "body2 px-4 py-[10px]",
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
