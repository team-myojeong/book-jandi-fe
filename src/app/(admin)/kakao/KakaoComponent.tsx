"use client";

import { redirect, useSearchParams } from "next/navigation";
import { login } from "./actions";
import { fetchAPI } from "@/apis/route";
import { useEffect } from "react";

export default function KakaoComponent() {
  const searchParams = useSearchParams();
  const authCode = searchParams.get("code");
  const kakaoServerError = searchParams.get("error");

  const asyncLogin = async (code: string) => {
    const param = new URLSearchParams({ code }).toString();
    return await fetchAPI(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login?${param}`,
      "POST",
      "json",
    );
  };
  useEffect(() => {
    if (authCode) {
      asyncLogin(authCode as string).then((response) => {
        console.log("response", response);
      });
    } else if (kakaoServerError) {
      redirect("/notifications/authentication-failed");
    }
  }, []);
  //TODO: 로그인 중 UI
  return <h2>로그인 중입니다..</h2>;
}
