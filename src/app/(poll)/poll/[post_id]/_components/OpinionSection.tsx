import { GETPollOpinion } from "@/actions/poll.action";
import { OpinionInput } from "./OpinionInput";
import { OpinionItem } from "./OptionItem";

export async function OpinionSection({
  isMine,
  postId,
}: {
  isMine: boolean;
  postId: number;
}) {
  const opinions = await GETPollOpinion(postId);
  if (!opinions) return <>의견이 없습니다</>;
  const { my_opinion, opinion_list } = opinions;

  return (
    <div className="relative -left-4 mt-4 flex w-screen max-w-[500px] flex-col gap-4 bg-white px-4 py-8">
      <div className="title2 text-start">
        <span>한 줄 의견</span>
        <span className="ml-2 text-green-500">{opinion_list.length}</span>
      </div>
      {!my_opinion && !isMine && <OpinionInput />}
      {opinion_list.map((opinion) => (
        <OpinionItem key={opinion.id} {...opinion} />
      ))}
    </div>
  );
}
