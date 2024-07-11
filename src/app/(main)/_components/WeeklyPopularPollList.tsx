import Title from "./Title";
import { fetchAPI } from "@/apis/route";
import Link from "next/link";
import BookThumbnail from "@/components/common/BookThumbnail";
import VoteViewCount from "@/components/common/VoteViewCount";

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
      `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/popular`,
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
    console.error("Fail to fetch data: GET /poll/popular", error);
  }
}

export default async function WeeklyPopularPollList() {
  const fetchedPollList = await GETPollList();

  return (
    <div className="bg-white py-4">
      <Title text="이번 주의 인기 투표" />
      <div className="overflow-auto whitespace-nowrap py-4">
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
              <div
                className="mr-4 inline-block w-32 gap-2 text-start"
                key={pollId}
              >
                <Link href={`/poll/${pollId}`}>
                  <BookThumbnail
                    width={128}
                    height={184}
                    alt={`book-cover-${title}`}
                    src={cover}
                    fixHeight
                  />
                  <div className="body2 mt-2 line-clamp-2 h-9 whitespace-normal">
                    {title}
                  </div>
                  <div className="caption overflow-hidden overflow-ellipsis whitespace-nowrap pt-2 text-grey-700">
                    {authorList &&
                      authorList.map((author, idx) => {
                        return <span key={`${author}-${idx}`}>{author}</span>;
                      })}
                  </div>
                  <VoteViewCount
                    votePercentage={votePercentage}
                    viewCount={voteCount}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
