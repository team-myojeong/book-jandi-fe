"use client";

import Button from "@/components/common/Button";
import IconTextButton from "./IconTextButton";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { POSTPollVote } from "@/actions/vote.action";
import { useParams } from "next/navigation";

export default function VoteSection() {
  const { post_id } = useParams();
  const [selected, setSelected] = useState<"good" | "bad" | null>(null);
  const [contents, setContents] = useState<string>("");

  const onSubmitVote = async () => {
    await POSTPollVote({
      id: +post_id,
      grass: selected === "good" ? "green" : "dried",
      contents,
    });
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white px-4 py-8">
      <div className="flex justify-between">
        <span className="title2">당신의 의견은?</span>
        <Button
          text="투표 현황보기"
          color="green"
          state="default"
          type="outline"
          size="S"
          className="w-fit px-2 py-1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <IconTextButton
          isSelected={selected === "good"}
          type="good"
          onClick={() => setSelected("good")}
        />
        <IconTextButton
          isSelected={selected === "bad"}
          type="bad"
          onClick={() => setSelected("bad")}
        />
      </div>

      <span className="body1-emphasis text-start">
        한줄 의견을 함께 작성해주세요(선택)
      </span>
      <textarea
        rows={6}
        className={cn(
          "body1 w-full resize-none rounded-lg border border-grey-300 px-2 py-3 ",
          selected === "good" && "outline-green-500",
          selected === "bad" && "outline-yellow-500",
        )}
        placeholder="선택사항이지만 당신의 더 상세한 의견을 입력해주신다면 작성자에게 큰 도움이 될 거에요!"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <Button
        color="green"
        state="default"
        text="투표하기"
        onClick={onSubmitVote}
      />
    </div>
  );
}
