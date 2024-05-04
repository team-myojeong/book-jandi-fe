import { GETVoteDetail } from "@/actions/vote.action";
import VoteResultBar from "./VoteResultBar";
import { Icon } from "@/components/common/Icon";
import { cn } from "@/utils/cn";
import { GETCareerList } from "@/actions/static.action";
import Image from "next/image";
import Button from "@/components/common/Button";

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-grey-100 p-4",
      )}
    >
      {children}
    </div>
  );
}

function TotalContentItem({ title, value }: { title: string; value: number }) {
  return (
    <div className="flex justify-between">
      <span className="body2-light">{title}</span>
      <span className="body2-light">{value}</span>
    </div>
  );
}

function CareerJobBadge({ title }: { title: string }) {
  return (
    <div className="caption rounded border border-grey-300 p-1 text-green-500">
      {title}
    </div>
  );
}

function CareerInfoTag({ id, text }: { id: number; text: string }) {
  return (
    <div className="flex items-center gap-[2px]">
      <div
        className={cn(
          "h-[2px] w-[2px] rounded-full",
          id === 1 && "bg-[#4CEC97]",
          id === 2 && "bg-[#0F8B4A]",
          id === 3 && "bg-[#5DCEFE]",
          id === 4 && "bg-[#6D87EE]",
          id === 5 && "bg-[#FF7AEB]",
        )}
      />
      <span className="text-[8px] text-grey-500">{text}</span>
    </div>
  );
}

function CareerDetailItem({
  index,
  careerText,
  percentages,
}: {
  index: number;
  careerText: string;
  percentages: number[];
}) {
  return (
    <div className="caption flex items-center gap-2">
      <div
        className={cn(
          "p-auto flex h-4 w-4 items-center justify-center rounded pt-[1px] text-grey-500 ",
          index === 1 && "bg-green-500 text-grey-0",
        )}
      >
        {index}
      </div>
      <div className="grey-700 flex-1">{careerText}</div>
      <div className="flex flex-1 gap-[2px]">
        {percentages.map((percentage, percentageId) => {
          const id = percentageId + 1;
          if (percentage === 0) return null;
          return (
            <div
              key={percentageId}
              className={cn(
                "flex h-3 items-center",
                id === 1 && "bg-[#4CEC97]",
                id === 2 && "bg-[#0F8B4A]",
                id === 3 && "bg-[#5DCEFE]",
                id === 4 && "bg-[#6D87EE]",
                id === 5 && "bg-[#FF7AEB]",
              )}
              style={{ width: `${percentage}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default async function VoteResult({
  id,
  myVote,
}: {
  id: number;
  myVote: "green" | "dried";
}) {
  const voteDetail = await GETVoteDetail(id);
  const { green_percentage, dried_percentage, total } = voteDetail!;
  const {
    vote_count,
    green_count,
    dried_count,
    green_opinion_count,
    dried_opinion_count,
    ranking,
  } = total;

  const careerList = await GETCareerList();

  const HIDE_DATA = false;
  return (
    <div className="relative">
      {HIDE_DATA && (
        <div className="absolute left-0 top-0 z-10 flex h-[690px] w-full flex-col items-center gap-4 bg-white/90 px-16 py-20 backdrop-blur-[2px]">
          <div className="title1">앗! 아직 데이터가 부족해요</div>
          <div className="body1 text-center text-grey-700">
            데이터를 조금만 더 쌓으면 <br />
            투표율과 의견을 확인할 수 있어요!
          </div>
          <Image
            src={"/images/more_data_cat.png"}
            alt="more-data-cat"
            width={358}
            height={310}
          />
          {/* TODO: 공유 기능 추가 */}
          <Button
            color="green"
            state="default"
            text="이 게시물 공유하기"
            size="S"
          />
        </div>
      )}
      <div className="relative -left-4 flex w-screen max-w-[500px] flex-col gap-4 bg-white px-4 py-8 text-start">
        <span className="title2">당신의 의견은?</span>
        <SectionWrapper>
          {green_percentage >= dried_percentage && (
            <>
              <VoteResultBar
                isMyVote={myVote === "green"}
                type="green"
                percentage={green_percentage}
              />
              <VoteResultBar
                isMyVote={myVote === "dried"}
                type="dried"
                percentage={dried_percentage}
              />
            </>
          )}
          {green_percentage < dried_percentage && (
            <>
              <VoteResultBar
                isMyVote={myVote === "dried"}
                type="dried"
                percentage={dried_percentage}
              />
              <VoteResultBar
                isMyVote={myVote === "green"}
                type="green"
                percentage={green_percentage}
              />
            </>
          )}
        </SectionWrapper>
        <SectionWrapper>
          <span className="body2-emphasis flex items-center gap-1 text-grey-700">
            <Icon name="book/basic" alt="book-icon" width={18} />
            북잔디 TOTAL
          </span>
          <div className="flex flex-col gap-2 rounded-lg bg-grey-100 p-4">
            <TotalContentItem title="총 투표 수" value={vote_count} />
            <TotalContentItem title="푸른 잔디 수" value={green_count} />
            <TotalContentItem title="마른 잔디 수" value={dried_count} />
            <TotalContentItem
              title="푸른 잔디 의견 수"
              value={green_opinion_count}
            />
            <TotalContentItem
              title="마른 잔디 의견 수"
              value={dried_opinion_count}
            />
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <span className="body2 flex items-center gap-1 text-grey-700">
            <Icon name="cat" alt="ranking-icon" width={18} />
            가장 많이 조회한 직군은
            <CareerJobBadge title={ranking.top_career} />
            {", "}
            <CareerJobBadge title={ranking.top_job} />
          </span>
          <div className="flex items-center gap-2">
            <span className="body2-emphasis">직무 및 연차</span>
            {careerList?.map(({ careerId, careerText }) => (
              <CareerInfoTag key={careerId} id={careerId} text={careerText} />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {ranking?.detail.map(({ job, percentage }, index) => (
              <CareerDetailItem
                key={id}
                index={index + 1}
                careerText={job}
                percentages={percentage}
              />
            ))}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
