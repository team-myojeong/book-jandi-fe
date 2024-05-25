"use client";
import { BookSearchDTO } from "@/app/(main)/search/page";
import { useBookStore } from "@/stores/book-store-provider";
import { useRouter } from "next/navigation";
import SearchItem from "./SearchItem";

export default function SearchContents() {
  const { fetchedData, isEmptyKeyword, setSelectedBook } = useBookStore(
    (state) => state,
  );
  const router = useRouter();

  if (isEmptyKeyword || !fetchedData) return null;

  if (fetchedData && fetchedData.length === 0) {
    return <div>검색 결과가 없습니다.</div>;
  }

  const onClickRouteToAddPost = (selected: BookSearchDTO) => {
    setSelectedBook(selected);
    router.push("/post-poll");
  };

  return (
    <div>
      {fetchedData.map((book) => (
        <SearchItem
          key={book.isbn}
          data={book}
          onClickRouteToAddPost={onClickRouteToAddPost}
        />
      ))}
    </div>
  );
}
