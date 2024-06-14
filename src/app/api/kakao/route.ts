import { login } from "@/app/(admin)/kakao/actions";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("code");
  const redirectTo = await login(query as string);

  if (!redirectTo) {
    return new Response("로그인 중 에러가 발생했습니다.");
  }
  return redirect(redirectTo);
}
