"use server";

import { fetchAPI } from "@/apis/route";

export interface GETPollPostResponse {
  poll: {
    cover: string;
    title: string;
    author_list: string[];
    publisher: string;
    translator_list: string[];
    question: string;
    difficulty_level: 1 | 2 | 3;
    description?: string;
  };
  writer_info: {
    id: number;
    name: string;
    profile: string;
    job: string;
    career: string;
  };
  vote: "none" | "green" | "dried";
  is_bookmark: boolean;
  is_mine: boolean;
}

export async function GETPollPost(id: number) {
  try {
    const data = await fetchAPI<GETPollPostResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll?id=${id}`,
    );
    return data;
  } catch (error) {
    throw new Error("Fail to fetch data");
  }
}
