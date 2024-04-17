import Title from "./Title";
import ColoredCircle from "@/components/common/ColoredCircle";
import { fetchAPI } from "@/apis/route";
import Link from "next/link";
import BookThumbnail from "@/components/common/BookThumbnail";

interface GETPollListResponse {
  poll_list: {
    poll_id: number;
    cover: string;
    title: string;
    author_list: string[];
    publisher: string;
    translator_list: string[];
    vote_percentage: number;
    vote_count: number;
    opinion_count: number;
  }[];
}

async function GETPollList() {
  try {
    const data = await fetchAPI<GETPollListResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll/popular`
    );
    return data.poll_list.map((ele) => {
      return {
        pollId: ele.poll_id,
        cover: ele.cover,
        title: ele.title,
        authorList: ele.author_list,
        publisher: ele.publisher,
        translatorList: ele.translator_list,
        votePercentage: ele.vote_percentage,
        voteCount: ele.vote_count,
        optionCount: ele.opinion_count,
      };
    });
  } catch (error) {
    console.error("Fail to fetch data: ", error);
  }
}

export default async function WeeklyPopularPollList() {
  const fetchedPollList = await GETPollList();

  return (
    <div className="bg-white mb-4">
      <Title text="이번 주의 인기 투표" />
      <div className="overflow-auto whitespace-nowrap mt-4">
        {fetchedPollList &&
          fetchedPollList.map((ele) => {
            const {
              cover,
              pollId,
              authorList,
              optionCount,
              publisher,
              title,
              voteCount,
              votePercentage,
            } = ele;
            return (
              <div className="inline-block w-32 text-start mr-4" key={pollId}>
                <Link href={`/poll/${pollId}`}>
                  <BookThumbnail
                    width={128}
                    height={184}
                    alt={`book-cover-${title}`}
                    src={cover}
                  />
                  <div className="flex">
                    <ColoredCircle width={20} percentage={100} />
                    <span className="body2-emphasis">{votePercentage}%</span>
                  </div>
                  <div className="body1 overflow-hidden whitespace-nowrap overflow-ellipsis h-6 pt-1">
                    {title}
                  </div>
                  <div className="body2 overflow-hidden whitespace-nowrap overflow-ellipsis text-[#757575] mb-7">
                    {authorList &&
                      authorList.map((author, idx) => {
                        return <span key={`${author}-${idx}`}>{author}</span>;
                      })}
                    <span>{" ∙ "}</span>
                    <span>{publisher}</span>
                  </div>
                  <div className="caption text-[#757575]">
                    <span>투표 {voteCount}</span>
                    <span>{" ∙ "}</span>
                    <span>의견 {optionCount}</span>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
