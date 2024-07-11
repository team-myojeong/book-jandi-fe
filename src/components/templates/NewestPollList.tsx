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
  }[];
}

async function GETPollList() {
  try {
    const data = await fetchAPI<GETPollListResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/recent?limit=10`,
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
      };
    });
  } catch (error) {
    console.error("Fail to fetch data: GET /poll/recent", error);
  }
}

export async function NewestPollList() {
  const fetchedPollList = await GETPollList();

  const summaryList = (list: string[]) => {
    if (!list) return `정보 없음`;
    if (list.length > 1) return `${list[0]} 외 ${list.length - 1}인`;
    return list[0];
  };

  return (
    <div className="bg-white">
      {/* <Title text="새로 올라온 투표" /> */}
      {fetchedPollList &&
        fetchedPollList.map((ele) => {
          const {
            pollId,
            cover,
            authorList,
            publisher,
            title,
            translatorList,
            votePercentage,
          } = ele;
          return (
            <Link href={`/poll/${pollId}`} key={pollId}>
              <div className="mt-4 flex h-[133px] w-full gap-4">
                <BookThumbnail
                  width={93}
                  height={133}
                  alt={`book-cover-${title}`}
                  src={cover}
                  fixWidth
                />
                <div className="flex flex-col justify-between py-4 text-start ">
                  <span className="body2-emphasis line-clamp-2 whitespace-normal">
                    {title}
                  </span>
                  <div className="mb-3 text-[#757575]">
                    <span className="caption">{summaryList(authorList)}</span>
                    <span>{" ∙ "}</span>
                    <span className="caption">{publisher}</span>
                  </div>
                  <div className="flex">
                    <VoteViewCount
                      viewCount={votePercentage}
                      votePercentage={votePercentage}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-2 h-[0.063rem] border-[#D9D9D9]" />
            </Link>
          );
        })}
    </div>
  );
}
