import { GETPollPostResponse } from "@/app/actions/post.action";

export default function PollDetailSection({
  poll,
}: {
  poll: GETPollPostResponse["poll"];
}) {
  const convertToKorean = (difficulty_level: number) => {
    return difficulty_level === 1
      ? `아니오\n잘 몰라요`
      : difficulty_level === 2
        ? `어느 정도는\n알고 있어요`
        : `잘 이해하고\n있어요!`;
    ``;
  };

  return (
    <div className="mb-4 flex flex-col gap-2 rounded-2xl bg-white px-2 py-2">
      <div className="flex gap-2">
        <div className="flex-1 rounded-2xl bg-grey-100 py-4">
          <span className="body2 text-grey-500">책의 분야 이해도</span>
          <div className="body2 mt-2 whitespace-pre text-grey-700">
            {convertToKorean(poll.difficulty_level)}
          </div>
        </div>
        <div className="flex-1 rounded-2xl bg-grey-100 py-4">
          <span className="body2 text-grey-500">어떤 부분이 궁금하세요?</span>
          <div className="body2 mt-2 whitespace-pre text-grey-700">
            {poll.question}
          </div>
        </div>
      </div>
      {poll.description && (
        <div className="flex-1 rounded-2xl bg-grey-100 p-4 text-start">
          <span className="body2 text-grey-500">자세한 내용</span>
          <div className="body2 mt-2 text-grey-700">{poll.description}</div>
        </div>
      )}
    </div>
  );
}
