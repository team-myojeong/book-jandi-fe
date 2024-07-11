"use client";
import SearchContents from "@/components/search/SearchContents";
import SearchFooter from "@/components/search/SearchFooter";
import SearchHeader from "@/components/search/SearchHeader";
import { useBookStore } from "@/stores/book-store-provider";
import { Dispatch, SetStateAction, createContext, useEffect } from "react";

// const SearchContext = createContext<
//   SearchContextType<BookSearchDTO> | undefined
// >(undefined);

// type SearchContextType<T> = {
//   isEmptyKeyword: boolean;
//   setIsEmptyKeyword: Dispatch<SetStateAction<boolean>>;
//   fetchedData: T[];
//   onChangeValue: (data: T[]) => void;
//   selectedValue: T | null;
// };

export type BookDTO = {
  title: string;
  cover: string;
  author_list: string[];
  publisher: string;
  translator_list: string[];
  isbn: string;
};

export type BookSearchDTO = BookDTO & {
  poll_count: number;
};

export default function Search() {
  const { setIsFromPostPage } = useBookStore((state) => state);

  useEffect(() => {
    setIsFromPostPage(false);
  }, []);
  return (
    <>
      <SearchHeader<BookSearchDTO> placeholder="책 제목 검색" />
      <SearchContents />
      <SearchFooter />
    </>
  );
}
