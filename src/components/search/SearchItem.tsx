import { summaryAuthors } from "@/app/utils/arrayToString";
import { Icon } from "../common/Icon";
import { BookSearchDTO } from "@/app/(main)/search/page";
import { useBookStore } from "@/stores/book-store-provider";
import BookThumbnail from "../common/BookThumbnail";

export default function SearchItem<T extends BookSearchDTO>({
  data,
  onClickRouteToAddPost,
}: {
  data: T;
  onClickRouteToAddPost: (selected: T) => void;
  children?: React.ReactNode;
}) {
  const { isFromPostPage, selectedBook } = useBookStore((state) => state);

  const iconName = isFromPostPage
    ? "check"
    : !selectedBook
      ? "document/add-gray"
      : "document/edit";
  return (
    <div className="flex justify-between p-4">
      <div className="flex flex-1">
        <BookThumbnail
          width={64}
          height={80}
          alt={`book-cover-${data.isbn}`}
          src={data.cover}
        />
        <div className="ml-3 flex flex-col justify-between text-start">
          <div>
            <div className="body2-emphasis">{data.title}</div>
            <div className="body2 flex gap-1 text-grey-700 ">
              <div>
                {summaryAuthors(data.author_list)}
                {" ("}
                {data.publisher}
                {")"}
              </div>
            </div>
          </div>
          <div className="body2 text-grey-700">
            {data.poll_count}개의 투표글
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-grey-500"
          onClick={() => onClickRouteToAddPost(data)}
        >
          <Icon name={iconName} alt="add-poll-post" width={16} height={16} />
        </button>
      </div>
    </div>
  );
}
