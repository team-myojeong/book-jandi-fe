import type { Metadata } from "next";
import { pretendard } from "./styles/font/fonts";
import "./globals.css";
import KakaoScript from "@/app/KakaoScript";

export const metadata: Metadata = {
  title: "북잔디 | 개발자 도서 평점 서비스",
  icons: [{ rel: "icon", url: "/metadata/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body>{children}</body>
      <KakaoScript />
    </html>
  );
}
