"use client";
import { useContext, useEffect, useState } from "react";
import IconButton from "../common/IconButton";
import { HeaderWrapper } from "../layout/Header";
import { useDebouncedSearch } from "@/hooks/useDebounceSearch";
import { BookSearchDTO, SearchContext } from "@/app/(main)/search/page";
import useDebounce from "@/hooks/useDebounce";

interface SearchHeaderProps<T> {
  placeholder: string;
  getAPI: (slug: string) => Promise<T[] | undefined>;
}

export default function SearchHeader<T extends BookSearchDTO>({
  placeholder,
  getAPI,
}: SearchHeaderProps<T>) {
  const context = useContext(SearchContext);
  const [inputTitle, setInputTitle] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const debouncedValue = useDebounce(inputTitle);

  useEffect(() => {
    if (debouncedValue.length === 0) {
      context?.setIsEmptyKeyword(true);
      return;
    }
    const fetchSearchedValue = async () => {
      const fetchedData = await getAPI(debouncedValue);
      context?.onChangeValue(fetchedData || []);
      context?.setIsEmptyKeyword(false);
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
