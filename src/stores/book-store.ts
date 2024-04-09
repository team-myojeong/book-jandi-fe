import { createStore } from "zustand";
import { BookSearchDTO } from "../app/(main)/search/page";

type BookState<T> = {
  isEmptyKeyword: boolean;
  isFromPostPage: boolean;
  fetchedData: T[] | null;
  selectedBook: T | null;
};

type BookActions<T> = {
  setIsEmptyKeyword: (isEmpty: boolean) => void;
  setFetchedData: (data: T[]) => void;
  setSelectedBook: (data: T) => void;
};

export type BookStore = BookState<BookSearchDTO> & BookActions<BookSearchDTO>;

export const createBookStore = () => {
  return createStore<BookStore>()((set) => ({
    isEmptyKeyword: true,
    isFromPostPage: false,
    fetchedData: null,
    selectedBook: null,
    setIsEmptyKeyword: (isEmpty: boolean) =>
      set(() => ({ isEmptyKeyword: isEmpty })),
    setFetchedData: (fetchedData: BookSearchDTO[]) =>
      set(() => ({ fetchedData })),
    setSelectedBook: (selectedBook: BookSearchDTO) =>
      set(() => ({ selectedBook })),
  }));
};
