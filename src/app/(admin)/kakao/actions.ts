"use server";

import { cookies } from "next/headers";

interface ResponseType {
  access_token: string;
  signup_complete: boolean;
}

export async function login(code: string) {
  const param = new URLSearchParams({ code }).toString();
  const response: ResponseType = await fetch(`/user/login?${param}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

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
