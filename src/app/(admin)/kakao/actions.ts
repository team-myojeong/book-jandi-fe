"use server";

import { fetchAPI } from "@/apis/route";
import { cookies } from "next/headers";

interface ResponseType {
  access_token: string;
  signup_complete: boolean;
}

export async function login(code: string) {
  const param = new URLSearchParams({ code }).toString();
  const response: ResponseType = await fetchAPI(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login?${param}`,
    "POST",
    "json",
  );
  console.log("response", response);
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
