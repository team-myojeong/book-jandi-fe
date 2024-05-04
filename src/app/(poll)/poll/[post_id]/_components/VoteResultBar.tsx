import { Icon } from "@/components/common/Icon";
import { cn } from "@/utils/cn";

export default function VoteResultBar({
  type,
  isMyVote,
  percentage,
}: {
  type: "green" | "dried";
  isMyVote: boolean;
  percentage: number;
}) {
  return (
    <div className="flex flex-col gap-[7px]">
      <div className="flex items-center gap-1">
        {isMyVote && (
          <Icon name="check" alt="check-icon" width={16} height={16} />
        )}
        <Icon
          name={type === "green" ? "grass/leaf-fresh" : "grass/leaf-rotten"}
          alt="leaf-icon"
          width={18}
          height={18}
        />
        <span
          className={cn(
            "body1 text-grey-700",
            type === "green" && isMyVote && "body1-emphasis text-green-500",
            type === "dried" && isMyVote && "body1-emphasis text-yellow-500",
          )}
        >
          {type === "green" && "좋아요"}
          {type === "dried" && "아쉬워요"}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-3 w-full rounded bg-grey-100">
          <div
            className={cn(
              "h-full rounded rounded-r-none",
              type === "green" && "bg-green-500",
              type === "dried" && "bg-yellow-500",
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span
          className={cn(
            "text-grey-700",
            isMyVote && "body2-emphasis",
            !isMyVote && "body2-light",
          )}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
}
