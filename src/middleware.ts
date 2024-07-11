import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let accessToken = request.cookies.get("access-token");

  const response = NextResponse.next();
  response.headers.set("Authorization", `Bearer ${accessToken}`);

  return response;
}
