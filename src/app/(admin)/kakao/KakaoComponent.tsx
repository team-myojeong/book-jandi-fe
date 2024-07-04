"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function KakaoComponent() {
  const searchParams = useSearchParams();
  const authCode = searchParams.get("code");
  const kakaoServerError = searchParams.get("error");

  const asyncLogin = async (code: string) => {
    const param = new URLSearchParams({ code }).toString();
    console.log("param", code);
    return await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login?${param}`,
      {
        method: "GET",
      },
    );
  };
  useEffect(() => {
    if (authCode) {
      asyncLogin(authCode as string)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // TODO: 로그인 성공 시 access token 들고 다니기~
          console.log("data", data);
          return;
        });
    } else if (kakaoServerError) {
      redirect("/notifications/authentication-failed");
    }
  }, []);
  //TODO: 로그인 중 UI
  return <h2>로그인 중입니다..</h2>;
}
