import { createStore } from "zustand";
import { BookSearchDTO } from "../app/(main)/search/page";

type BookState<T> = {
  isEmptyKeyword: boolean;
  isFromPostPage: boolean;
  fetchedData: T[] | null;
  selectedBook: T | null;
};

type BookActions<T> = {
  setIsEmptyKeyword: (isEmptyKeyword: boolean) => void;
  setIsFromPostPage: (isFromPostPage: boolean) => void;
  setFetchedData: (data: T[]) => void;
  setSelectedBook: (data: T) => void;
  reset: () => void;
};

export type BookStore = BookState<BookSearchDTO> & BookActions<BookSearchDTO>;

const initialState: BookState<BookSearchDTO> = {
  isEmptyKeyword: true,
  isFromPostPage: false,
  fetchedData: null,
  selectedBook: null,
};

export const createBookStore = () => {
  return createStore<BookStore>()((set) => ({
    ...initialState,
    setIsEmptyKeyword: (isEmptyKeyword: boolean) =>
      set(() => ({ isEmptyKeyword })),
    setIsFromPostPage: (isFromPostPage: boolean) =>
      set(() => ({ isFromPostPage })),
    setFetchedData: (fetchedData: BookSearchDTO[]) =>
      set(() => ({ fetchedData })),
    setSelectedBook: (selectedBook: BookSearchDTO) =>
      set(() => ({ selectedBook })),
    reset: () => {
      set(initialState);
    },
  }));
};
