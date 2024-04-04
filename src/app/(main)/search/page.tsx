"use client";
import { GETBookByKeyword } from "@/app/actions/book.action";
import SearchContents from "@/components/search/SearchContents";
import SearchFooter from "@/components/search/SearchFooter";
import SearchHeader from "@/components/search/SearchHeader";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

export const SearchContext = createContext<
  SearchContextType<BookSearchDTO> | undefined
>(undefined);

type SearchContextType<T> = {
  isEmptyKeyword: boolean;
  setIsEmptyKeyword: Dispatch<SetStateAction<boolean>>;
  fetchedData: T[];
  onChangeValue: (data: T[]) => void;
  selectedValue: T | null;
};

export type BookSearchDTO = {
  title: string;
  cover: string;
  author_list: string[];
  publisher: string;
  translator_list: string[];
  poll_count: number;
  isbn: string;
};

export default function Search() {
  const [fetchedData, setFetchedData] = useState<BookSearchDTO[]>([]);
  const [isEmptyKeyword, setIsEmptyKeyword] = useState(true);

  const onChangeValue = (data: BookSearchDTO[]) => setFetchedData(data);
  const contextObject = useMemo(() => {
    return {
      isEmptyKeyword,
      setIsEmptyKeyword,
      fetchedData,
      onChangeValue,
      selectedValue: null,
    };
  }, [fetchedData, isEmptyKeyword]);

  return (
    <SearchContext.Provider value={contextObject}>
      <SearchHeader<BookSearchDTO>
        placeholder="책 제목 검색"
        getAPI={async (keyword) => await GETBookByKeyword(keyword)}
      />
      <SearchContents />
      <SearchFooter />
    </SearchContext.Provider>
  );
}
