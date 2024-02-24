import type { Metadata } from "next";
import { pretendard } from "./styles/font/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "북잔디 | 개발자 도서 평점 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body>{children}</body>
    </html>
  );
}
