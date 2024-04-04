import { BookSearchDTO, SearchContext } from "@/app/(main)/search/page";
import { summaryAuthors } from "@/app/utils/arrayToString";
import Image from "next/image";
import { useContext } from "react";
import { Icon } from "../common/Icon";

export default function SearchContents<T>() {
  const context = useContext(SearchContext);

  if (!context || context.isEmptyKeyword) {
    return null;
  }

  if (context.fetchedData.length === 0) {
    return <div>검색 결과가 없습니다.</div>;
  }

  const onClickRouteToAddPost = (selected: any) => {
    if (context) {
      context.selectedValue = selected;
    }
  };
  return (
    <div>
      {context.fetchedData.map((ele) => {
        return (
          <div key={ele.isbn} className="flex justify-between p-4">
            <div className="flex-1 flex">
              <Image
                alt={`searched-image=${ele.isbn}`}
                src={ele.cover}
                width={64}
                height={80}
                style={{ height: "auto" }}
              />
              <div className="text-start flex flex-col justify-between ml-3">
                <div>
                  <div className="body2-emphasis">{ele.title}</div>
                  <div className="flex body2 text-gray-700 gap-1">
                    <div>{summaryAuthors(ele.author_list)}</div>
                    <div>
                      {"("}
                      {ele.publisher}
                      {")"}
                    </div>
                  </div>
                </div>
                <div className="body2 text-gray-700">
                  {ele.poll_count}개의 투표글
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="w-8 h-8 border rounded-full border-gray-500 flex justify-center items-center flex-none"
                onClick={() => onClickRouteToAddPost(ele)}
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
      })}
    </div>
  );
}

function SearchItem<T extends BookSearchDTO>({ data }: { data: T }) {
  return (
    <div key={data.isbn} className="flex justify-between p-4">
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
          onClick={() => console.log("hih")}
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
