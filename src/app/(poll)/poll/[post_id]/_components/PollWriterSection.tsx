import { GETPollPostResponse } from "@/app/actions/post.action";
import Avatar from "@/components/common/Avatar";
import Link from "next/link";

export default function PollWriterSection({
  writerInfo,
}: {
  writerInfo: GETPollPostResponse["writer_info"];
}) {
  return (
    <div className="flex items-center gap-[10px] py-4">
      <Link href={`/profile/${writerInfo.id}`}>
        <Avatar src={writerInfo.profile} size={40} />
      </Link>
      <div className="flex flex-col gap-1 text-start">
        <span className="body1-emphasis">{writerInfo.name}</span>
        <span className="caption">
          {writerInfo.job}
          {" / "}
          {writerInfo.career}
        </span>
      </div>
    </div>
  );
}
