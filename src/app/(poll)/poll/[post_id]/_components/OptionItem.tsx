"use client";

import Avatar from "@/components/common/Avatar";
import { OpinionItem as IOpinionItem } from "@/actions/poll.action";
import IconButton from "@/components/common/IconButton";

export function OpinionItem(data: IOpinionItem) {
  return (
    <div className="mb-4 flex w-full flex-col gap-4 p-4">
      <div className="flex w-full justify-between gap-4">
        <Avatar src={data.profile} size={36} />
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-2 text-start">
            <div className="body2">{data.name}</div>
            <div className="caption text-grey-700">
              {data.job} / {data.career}
            </div>
          </div>
          <div className="caption text-start text-grey-500">
            {data.created_at}
          </div>
        </div>
        <IconButton
          name="menu-dots"
          alt="menu-dots"
          onClick={() => console.log("clicked menu button")}
        />
      </div>
      <div className="body2 text-start text-black">{data.contents}</div>
    </div>
  );
}
