import { Suspense } from "react";
import KakaoComponent from "./KakaoComponent";

export default async function Page() {
  return (
    <Suspense>
      <KakaoComponent />
    </Suspense>
  );
}
