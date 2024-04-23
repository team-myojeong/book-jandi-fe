"use client";
import { HeaderWithIcons } from "@/components/layout/Header";
import { useRouter } from "next/navigation";

export default function Header({
  id,
  isBookmarked,
  isMine,
}: {
  id: number;
  isBookmarked: boolean;
  isMine: boolean;
}) {
  const router = useRouter();

  return (
    <HeaderWithIcons
      hasBorder
      leftIcon={{
        icon: "arrow/left",
        onClick: () => router.push("/welcome"),
      }}
      rightIcons={[
        {
          icon: isBookmarked ? "bookmark/checked" : "bookmark/default",
          onClick: () => console.log("hi"),
        },
        { icon: "share", onClick: () => console.log("hihi") },
        { icon: "menu-dots", onClick: () => console.log("hih") },
      ]}
    />
  );
}
