"use server";

import { fetchAPI } from "@/apis/route";
import { BookSearchDTO } from "../(main)/search/page";

interface GETBookSearchResponse {
  book_list: BookSearchDTO[];
}

export async function GETBookByKeyword(keyword: string) {
  try {
    const data = await fetchAPI<GETBookSearchResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/book/search?keyword=${keyword}`,
    );
    return data.book_list;
  } catch (error) {
    throw new Error("Fail to fetch data");
  }
}
