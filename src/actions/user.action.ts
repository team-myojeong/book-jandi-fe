"use server";
import { fetchAPI } from "@/apis/route";

export interface SignUpForm {
  job_id?: number;
  career_id?: number;
}

interface POSTSignUpResponse {
  success: boolean;
}

export async function POSTSignUp(requestBody: SignUpForm) {
  try {
    const result = await fetchAPI<POSTSignUpResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/user/signup`,
      "POST",
      "json",
      {
        ...requestBody,
      },
    );
    return result.success;
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}
