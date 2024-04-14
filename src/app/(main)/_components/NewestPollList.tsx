import Image from "next/image";
import Title from "./Title";
import ColoredCircle from "@/components/common/ColoredCircle";
import { fetchAPI } from "@/apis/route";
import Link from "next/link";

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
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll/recent`
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
    console.error("Fail to fetch data: ", error);
  }
}

export default async function NewestPollList() {
  const fetchedPollList = await GETPollList();

  const summaryList = (list: string[]) => {
    if (!list) return `정보 없음`;
    if (list.length > 1) return `${list[0]} 외 ${list.length - 1}인`;
    return list[0];
  };

  return (
    <div className="bg-white">
      <Title text="새로 올라온 투표" />
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
              <div className="flex h-[133px] w-full gap-4 mt-4">
                <Image
                  priority
                  width={93}
                  height={133}
                  className="rounded-lg"
                  alt={`book-cover-${title}`}
                  src={cover}
                  style={{ width: "auto", height: "100%" }}
                />
                <div className="text-start flex flex-col justify-center ">
                  <span className="body1">{title}</span>
                  <div className="text-[#757575] mb-3">
                    <span className="caption">
                      저자 {summaryList(authorList)}
                    </span>
                    <span>{" ∙ "}</span>
                    <span className="caption">
                      번역 {summaryList(translatorList)}
                    </span>
                    <span>{" ∙ "}</span>
                    <span className="caption">{publisher}</span>
                  </div>
                  <div className="flex">
                    <ColoredCircle width={20} percentage={100} />
                    <span className="body2">{votePercentage}%</span>
                  </div>
                </div>
              </div>
              <hr className="h-[0.063rem] border-[#D9D9D9] mt-2" />
            </Link>
          );
        })}
    </div>
  );
}
