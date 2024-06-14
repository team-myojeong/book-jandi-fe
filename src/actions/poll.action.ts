"use server";

import { fetchAPI } from "@/apis/route";

export interface PostForm {
  difficulty_level: 1 | 2 | 3;
  question: string;
  description?: string;
  book: {
    title: string;
    cover: string;
    author_list: string[];
    publisher: string;
    translator_list: string[];
    isbn: string;
  };
}

interface POSTPollResponse {
  id: number;
}

export async function POSTPollPost(requestBody: PostForm) {
  try {
    const result = await fetchAPI<POSTPollResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/poll`,
      "POST",
      "json",
      {
        ...requestBody,
      },
    );
    return result.id;
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}

interface OpinionForm {
  id: number;
  contents: string;
}

export async function POSTPollOpinion(requestBody: OpinionForm) {
  try {
    await fetchAPI(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/opinion`,
      "POST",
      "json",
      {
        ...requestBody,
      },
    );
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}

export interface OpinionItem {
  id: number;
  created_at: string;
  job: string;
  career: string;
  contents: string;
  name: string;
  profile: string;
  writer_id: number;
}
export interface GETPollOpinionResponse {
  my_opinion: OpinionItem | null;
  opinion_list: OpinionItem[];
}

export async function GETPollOpinion(id: number) {
  try {
    const result = await fetchAPI<GETPollOpinionResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/opinion?id=${id}&limit=5&last=0`,
      "GET",
      "json",
    );
    return result;
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}
