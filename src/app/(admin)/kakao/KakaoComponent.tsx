"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { login } from "./actions";

export default function KakaoComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authCode = searchParams.get("code");

  const asyncLogin = async (code: string) => {
    const routeTo = await login(code);
    router.push(routeTo);
  };

  useEffect(() => {
    if (authCode) {
      asyncLogin(authCode);
    }
  }, []);

  //TODO: 로그인 중 UI
  return <h2>로그인 중입니다..</h2>;
}
