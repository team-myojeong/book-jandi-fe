import type { Metadata } from "next";
import { pretendard } from "./styles/font/fonts";
import "./globals.css";
import { BookStoreProvider } from "@/stores/book-store-provider";

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
      <body>
        <BookStoreProvider>{children}</BookStoreProvider>
      </body>
    </html>
  );
}
