"use client";

import { HeaderWithSingleArrow } from "@/components/layout/Header";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <HeaderWithSingleArrow
      onClickLeftArrow={() => router.back()}
      title="최신 투표글"
    />
  );
}
