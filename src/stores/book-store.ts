import { createStore } from "zustand";
import { BookSearchDTO } from "../app/(main)/search/page";

type BookState<T> = {
  isEmptyKeyword: boolean;
  fetchedData: T[] | null;
  selectedBook: T | null;
};

type BookActions<T> = {
  toggleIsEmptyKeyword: (isEmpty: boolean) => void;
  setFetchedData: (data: T[]) => void;
  setselectedBook: (data: T) => void;
};

export type BookStore = BookState<BookSearchDTO> & BookActions<BookSearchDTO>;

export const createBookStore = () => {
  return createStore<BookStore>()((set) => ({
    isEmptyKeyword: true,
    fetchedData: null,
    selectedBook: null,
    toggleIsEmptyKeyword: () =>
      set((state) => ({ isEmptyKeyword: !state.isEmptyKeyword })),
    setFetchedData: (fetchedData: BookSearchDTO[]) =>
      set(() => ({ fetchedData })),
    setselectedBook: (selectedBook: BookSearchDTO) =>
      set(() => ({ selectedBook })),
  }));
};
