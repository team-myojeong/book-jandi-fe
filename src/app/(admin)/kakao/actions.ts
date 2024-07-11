"use server";

import { fetchAPI } from "@/apis/route";
import { cookies } from "next/headers";

type TempResponse = { access_token: string; signup_complete: boolean };

export async function login(code: string) {
  const param = new URLSearchParams({ code }).toString();
  const response = await fetchAPI<TempResponse>(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login?${param}`,
    "GET",
    "json",
  );
  cookies().set({
    name: "access-token",
    value: response.access_token,
    httpOnly: true,
  });
  if (response.signup_complete) {
    return "/";
  }
  return "/sign-up";
}
