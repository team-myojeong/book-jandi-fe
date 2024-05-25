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
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll`,
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
