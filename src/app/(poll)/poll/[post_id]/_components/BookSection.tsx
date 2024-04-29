import { GETPollPostResponse } from "@/app/actions/post.action";
import Image from "next/image";

export default function BookSection({
  poll,
}: {
  poll: GETPollPostResponse["poll"];
}) {
  return (
    <div className="flex gap-2 py-8">
      <Image
        src={poll.cover}
        alt={`${poll.title}-cover`}
        width={120}
        height={160}
        className="rounded-r-lg border border-grey-300"
      />
      <div className="flex flex-col gap-1 pt-2 text-start">
        <span className="title2">{poll.title}</span>
        <span className="body2 text-grey-700">
          {poll.author_list.reduce((prev, ele) => {
            return `${prev}, ${ele}`;
          })}
          {" ∙ "}
          {poll.translator_list.reduce((prev, ele) => {
            return `${prev}, ${ele}`;
          })}
        </span>
        <span className="body2 text-grey-700">{poll.publisher}</span>
      </div>
    </div>
  );
}
