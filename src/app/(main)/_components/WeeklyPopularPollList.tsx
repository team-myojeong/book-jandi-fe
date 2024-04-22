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
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll/popular`,
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
    <div className="mb-4 bg-white">
      <Title text="이번 주의 인기 투표" />
      <div className="mt-4 overflow-auto whitespace-nowrap">
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
              <div className="mr-4 inline-block w-32 text-start" key={pollId}>
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
                  <div className="body1 h-6 overflow-hidden overflow-ellipsis whitespace-nowrap pt-1">
                    {title}
                  </div>
                  <div className="body2 mb-7 overflow-hidden overflow-ellipsis whitespace-nowrap text-[#757575]">
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
