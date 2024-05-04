import { GETPollPost } from "@/app/actions/post.action";
import Header from "./_components/Header";
import Divider from "@/components/common/Divider";
import VoteSection from "./_components/VoteSection";
import BookSection from "./_components/BookSection";
import PollWriterSection from "./_components/PollWriterSection";
import PollDetailSection from "./_components/PollDetailSection";
import VoteResult from "./_components/VoteResult";

export default async function Page({
  params,
}: {
  params: { post_id: number };
}) {
  const postId = params.post_id;
  const { poll, writer_info, vote, is_mine, is_bookmark } =
    await GETPollPost(postId);

  return (
    <>
      <Header id={postId} isBookmarked={is_bookmark} isMine={is_mine} />
      <BookSection poll={poll} />
      <Divider />
      <PollWriterSection writerInfo={writer_info} />
      <PollDetailSection poll={poll} />
      {vote === "none" && <VoteSection />}
      {vote !== "none" && <VoteResult id={postId} myVote={vote} />}
    </>
  );
}
