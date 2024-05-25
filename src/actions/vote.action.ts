import { fetchAPI } from "@/apis/route";
import { revalidatePath } from "next/cache";

export interface VoteForm {
  id: number;
  grass: "green" | "dried";
  contents?: string;
}

interface POSTPollResponse {
  success: boolean;
}

export async function POSTPollVote(requestBody: VoteForm) {
  try {
    await fetchAPI<POSTPollResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll/vote`,
      "POST",
      "json",
      {
        ...requestBody,
      },
    );
    revalidatePath(`/poll/${requestBody.id}`);
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}
