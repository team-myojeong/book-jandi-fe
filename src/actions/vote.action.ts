"use server";
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
      `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/vote`,
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

interface GETVoteDetailResponse {
  green_percentage: number;
  dried_percentage: number;

  total: {
    vote_count: number;
    green_count: number;
    dried_count: number;
    green_opinion_count: number;
    dried_opinion_count: number;
  };
  ranking: {
    top_career: string;
    top_job: string;
    detail: {
      job: string;
      percentage: number[];
    }[];
  };
}

export async function GETVoteDetail(id: number) {
  try {
    const response = await fetchAPI<GETVoteDetailResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/vote/detail?id=${id}`,
      "GET",
      "json",
    );
    return response;
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}
