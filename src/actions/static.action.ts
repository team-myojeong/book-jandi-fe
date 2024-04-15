"use server";
import { fetchAPI } from "@/apis/route";

interface GETJobListResponse {
  job_list: {
    job_id: number;
    job_text: string;
  }[];
}

export async function GETJobList() {
  try {
    const data = await fetchAPI<GETJobListResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/job`
    );
    return data.job_list.map((ele) => {
      return { jobId: ele.job_id, jobText: ele.job_text, isSelected: false };
    });
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}

interface GETCareerListResponse {
  career_list: {
    career_id: number;
    career_text: string;
  }[];
}
export async function GETCareerList() {
  try {
    const data = await fetchAPI<GETCareerListResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/career`
    );
    return data.career_list.map((ele) => {
      return {
        careerId: ele.career_id,
        careerText: ele.career_text,
        isSelected: false,
      };
    });
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}
