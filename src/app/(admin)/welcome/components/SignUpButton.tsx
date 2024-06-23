"use client";

import { fetchAPI } from "@/apis/route";
import { Icon } from "@/components/common/Icon";

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
export default function SignUpButton() {
  async function kakaoLogin() {
    window.location.href = kakaoURL;
  }

  return (
    <button
      className="flex w-full justify-center rounded-xl bg-[#FEE500] py-4"
      onClick={kakaoLogin}
    >
      <div className="flex w-[154px] items-center justify-between">
        <Icon alt="kakao-logo" name="kakao" />
        <span className="body1">카카오로 시작하기</span>
      </div>
    </button>
  );
}
