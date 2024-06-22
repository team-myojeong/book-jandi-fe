import { Suspense } from "react";
import KakaoComponent from "./KakaoComponent";

export default function Page() {
  //TODO: 로그인 중 UI
  return (
    <Suspense>
      <KakaoComponent />
    </Suspense>
  );
}
