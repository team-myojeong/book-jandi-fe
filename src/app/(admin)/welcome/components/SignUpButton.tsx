"use client";
import { Icon } from "@/components/common/Icon";

export default function SignUpButton() {
  function kakaoLogin() {
    window.Kakao.Auth.authorize({
      redirectUri:
        process.env.NODE_ENV === "development"
          ? `http://localhost:3000/kakao`
          : `${process.env.NEXT_PUBLIC_MAIN_URL}`,
    });
  }

  return (
    <button
      className="bg-[#FEE500] py-4 rounded-xl flex justify-center w-full"
      onClick={kakaoLogin}
    >
      <div className="flex justify-between items-center w-[154px]">
        <Icon alt="kakao-logo" name="kakao" />
        <span className="body1">카카오로 시작하기</span>
      </div>
    </button>
  );
}
