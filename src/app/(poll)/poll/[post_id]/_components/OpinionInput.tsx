"use client";

import { POSTPollOpinion } from "@/actions/poll.action";
import Button from "@/components/common/Button";
import { revalidatePath } from "next/cache";
import { useParams } from "next/navigation";

import { useState } from "react";

export function OpinionInput() {
  const [opinion, setOpinion] = useState("");
  const onChangeInputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOpinion(e.target.value);
  };

  const { post_id } = useParams<{ post_id: string }>();

  const onClickUpload = async () => {
    const opinionBody = { id: +post_id, contents: opinion };
    await POSTPollOpinion(opinionBody);
    setOpinion("");
  };

  const isDisabled = opinion.length === 0;

  return (
    <div
      className={"flex flex-col gap-2 rounded-2xl bg-grey-50 p-4 text-start"}
    >
      <div className="body2 text-grey-500">한 줄 의견을 작성할 수 있어요!</div>
      <textarea
        className="body2 resize-none rounded-lg border border-grey-300 px-2 py-3 text-grey-900 placeholder-grey-500 outline-green-500 active:outline-green-500"
        placeholder="한 줄 의견을 입력해주세요."
        rows={3}
        value={opinion}
        onChange={onChangeInputValue}
      />
      <Button
        isDisabled={isDisabled}
        className="caption ml-auto w-[25%]"
        text="업로드"
        size="S"
        color={"green"}
        state={!isDisabled ? "default" : "disabled"}
        onClick={onClickUpload}
      />
    </div>
  );
}
