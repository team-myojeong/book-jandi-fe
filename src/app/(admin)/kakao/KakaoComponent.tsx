import { redirect, useSearchParams } from "next/navigation";
import { login } from "./actions";

export default function KakaoComponent() {
  const searchParams = useSearchParams();
  const authCode = searchParams.get("code");
  const kakaoServerError = searchParams.get("error");

  if (authCode) {
    login(authCode as string).then((res) => {
      redirect(res);
    });
  } else if (kakaoServerError) {
    redirect("/notifications/authentication-failed");
  }
  //TODO: 로그인 중 UI
  return <h2>로그인 중입니다..</h2>;
}
