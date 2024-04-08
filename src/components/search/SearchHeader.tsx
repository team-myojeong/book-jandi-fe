"use client";
import { useEffect, useState } from "react";
import IconButton from "../common/IconButton";
import { HeaderWrapper } from "../layout/Header";
import { BookSearchDTO } from "@/app/(main)/search/page";
import useDebounce from "@/hooks/useDebounce";
import { useBookStore } from "@/stores/book-store-provider";

interface SearchHeaderProps<T> {
  placeholder: string;
  getAPI: (slug: string) => Promise<T[]>;
}

export default function SearchHeader<T extends BookSearchDTO>({
  placeholder,
  getAPI,
}: SearchHeaderProps<T>) {
  const { setIsEmptyKeyword, setFetchedData } = useBookStore((state) => state);
  const [inputTitle, setInputTitle] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const debouncedValue = useDebounce(inputTitle);

  useEffect(() => {
    if (debouncedValue.length === 0) {
      setIsEmptyKeyword(true);
      return;
    }
    const fetchSearchedValue = async () => {
      const fetchedData = await getAPI(debouncedValue);
      setFetchedData(fetchedData);
      setIsEmptyKeyword(false);
    };
    fetchSearchedValue();
  }, [debouncedValue]);

  return (
    <HeaderWrapper>
      <IconButton
        name="arrow/left"
        alt="back-button"
        onClick={() => console.log("뒤로가기 버튼")}
      />
      <input
        className="w-full outline-none "
        value={inputTitle}
        placeholder={placeholder}
        onChange={onChangeInput}
      />
      <IconButton
        name="magnifier"
        alt="search-button"
        onClick={() => console.log("검색 버튼")}
      />
    </HeaderWrapper>
  );
}
