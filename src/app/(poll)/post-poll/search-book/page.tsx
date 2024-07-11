"use client";
import { BookSearchDTO } from "@/app/(main)/search/page";
import { GETBookByKeyword } from "@/app/actions/book.action";
import SearchContents from "@/components/search/SearchContents";
import SearchFooter from "@/components/search/SearchFooter";
import SearchHeader from "@/components/search/SearchHeader";
import { useBookStore } from "@/stores/book-store-provider";
import { useEffect } from "react";

export default function Page() {
  const { setIsFromPostPage } = useBookStore((state) => state);

  useEffect(() => {
    setIsFromPostPage(true);
  }, []);
  return (
    <>
      <SearchHeader<BookSearchDTO> placeholder="투표할 책 제목 검색" />
      <SearchContents />
      <SearchFooter />
    </>
  );
}
