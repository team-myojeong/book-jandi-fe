import { summaryAuthors } from "@/app/utils/arrayToString";
import { Icon } from "../common/Icon";
import Image from "next/image";
import { BookSearchDTO } from "@/app/(main)/search/page";

export default function SearchItem<T extends BookSearchDTO>({
  data,
  onClickRouteToAddPost,
}: {
  data: T;
  onClickRouteToAddPost: (selected: T) => void;
}) {
  return (
    <div className="flex justify-between p-4">
      <div className="flex-1 flex">
        <Image
          alt={`searched-image=${data.isbn}`}
          src={data.cover}
          width={64}
          height={80}
          style={{ height: "auto" }}
        />
        <div className="text-start flex flex-col justify-between ml-3">
          <div>
            <div className="body2-emphasis">{data.title}</div>
            <div className="flex body2 text-gray-700 gap-1">
              <div>{summaryAuthors(data.author_list)}</div>
              <div>
                {"("}
                {data.publisher}
                {")"}
              </div>
            </div>
          </div>
          <div className="body2 text-gray-700">
            {data.poll_count}개의 투표글
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="w-8 h-8 border rounded-full border-gray-500 flex justify-center items-center flex-none"
          onClick={() => onClickRouteToAddPost(data)}
        >
          <Icon
            name="document/add"
            alt="add-poll-post"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}
