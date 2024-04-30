import { fetchAPI } from "@/apis/route";

export interface VoteForm {
  id: number;
  grass: "green" | "dried";
  contents?: string;
}

interface POSTPollResponse {
  id: number;
}

export async function POSTPollVote(requestBody: VoteForm) {
  try {
    const result = await fetchAPI<POSTPollResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll/vote`,
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
