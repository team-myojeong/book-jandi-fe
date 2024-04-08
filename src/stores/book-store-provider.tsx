"use client";

import { ReactNode, createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import { BookStore, createBookStore } from "./book-store";

const BookStoreContext = createContext<StoreApi<BookStore> | null>(null);

export const BookStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<StoreApi<BookStore>>();
  if (!storeRef.current) {
    storeRef.current = createBookStore();
  }
  return (
    <BookStoreContext.Provider value={storeRef.current}>
      {children}
    </BookStoreContext.Provider>
  );
};

export const useBookStore = <T,>(selector: (store: BookStore) => T) => {
  const bookStoreContext = useContext(BookStoreContext);
  if (!bookStoreContext) {
    throw new Error(`useCounterStore must be use within CounterStoreProvider`);
  }
  return useStore(bookStoreContext, selector);
};
