import { Icon } from "@/components/common/Icon";
import { cn } from "@/utils/cn";

export default function IconTextButton({
  type,
  isSelected,
  onClick,
}: {
  type: "good" | "bad";
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-start title2 flex gap-2 rounded-lg border border-grey-300 bg-white p-4 text-grey-500 transition-all ease-linear",
        type === "good" &&
          "hover:border-green-500 hover:text-green-500 active:bg-green-50",
        isSelected &&
          type === "good" &&
          "border-green-500 bg-green-50 text-green-500",
        type === "bad" &&
          "hover:border-yellow-500 hover:text-yellow-500 active:bg-yellow-50",
        isSelected &&
          type === "bad" &&
          "border-yellow-500 bg-yellow-50 text-yellow-500",
      )}
    >
      <Icon
        name={type === "good" ? "grass/leaf-fresh" : "grass/leaf-rotten"}
        alt={`${type}-icon`}
        width={24}
        height={24}
      />
      <span>{type === "good" ? "좋아요! 😊" : "아쉬워요...😔"}</span>
    </button>
  );
}
