import { Header } from "@/components/layout/Header";
import SignUpButton from "./components/SignUpButton";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <Header isWelcomePage />
      <div className="flex flex-col items-center py-12">
        <p className="title1 mb-4">이 개발도서, 읽어도 될까?</p>
        <p className="title2 mb-9">북잔디 가입하고 투표로 확인해 보세요!</p>
        <Image
          src={"/images/login_page_cat.png"}
          alt="login-page-cat"
          width={358}
          height={300}
          className="mb-9"
        />
        <SignUpButton />
      </div>
    </>
  );
}
