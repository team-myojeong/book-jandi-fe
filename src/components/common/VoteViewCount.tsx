import { cn } from "@/utils/cn";
import { Icon } from "./Icon";

export default function VoteViewCount({
  votePercentage,
  viewCount,
}: {
  votePercentage: number;
  viewCount: number;
}) {
  const voteState =
    votePercentage > 50 ? "good" : votePercentage > 0 ? "bad" : "unknown";
  return (
    <div className="mt-2 flex items-center gap-3 align-middle text-grey-500">
      <div className="flex items-center gap-[2px] align-middle">
        {voteState === "good" && (
          <Icon
            name="grass/leaf-fresh"
            alt="leaf-fresh-icon"
            width={12}
            height={12}
          />
        )}
        {voteState === "bad" && (
          <Icon
            name="grass/leaf-rotten"
            alt="leaf-rotten-icon"
            width={12}
            height={12}
          />
        )}
        {voteState === "unknown" && (
          <Icon
            name="grass/leaf-gray"
            alt="leaf-rotten-icon"
            width={12}
            height={12}
          />
        )}
        <div
          className={cn(
            "caption text-center align-middle",
            voteState === "good" && "text-green-500",
            voteState === "bad" && "text-yellow-500",
          )}
        >
          {votePercentage > 0 ? votePercentage : `??`}%
        </div>
      </div>
      <div className="flex items-center gap-[2px]">
        <Icon name="eye-gray" alt="eye-icon" width={12} height={12} />
        <div className="caption table-cell align-middle">{viewCount}</div>
      </div>
    </div>
  );
}
