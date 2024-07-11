import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import IconButton from "../common/IconButton";
import LogoButton from "../common/LogoButton";
import { Icon, IconType } from "../common/Icon";
import Link from "next/link";

const NAV_ITEMS: { icon: IconType; label: string; href: string }[] = [
  {
    icon: "book/basic",
    label: "최신 게시글",
    href: "/newest",
  },
  {
    icon: "check",
    label: "",
    href: "bar",
  },
  {
    icon: "user",
    label: "내 프로필",
    href: "/profile",
  },
  {
    icon: "bookmark/default",
    label: "북마크한 게시물",
    href: "/bookmark",
  },
  {
    icon: "favorite",
    label: "관심분야 설정",
    href: "/edit-interest",
  },
  {
    icon: "log-out",
    label: "로그아웃",
    href: "/sign-out",
  },
  {
    icon: "check",
    label: "",
    href: "bar",
  },
  {
    icon: "leaf",
    label: "북잔디 소개",
    href: "/welcome/on-boarding",
  },
  {
    icon: "cat",
    label: "만든이들",
    href: "/makers",
  },
];

export function DrawerTemplate() {
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <IconButton
          name="hamburger"
          alt="drawer-open-button"
          onClick={() => console.log("drawer")}
        />
      </DrawerTrigger>
      <DrawerContent className="mx-auto h-full w-full max-w-[500px] rounded-none bg-[#F3F3F3]">
        <DrawerHeader>
          <div className="flex justify-between">
            <LogoButton />
            <DrawerClose>
              <Icon name="close" alt="drawer-close-button" />
            </DrawerClose>
          </div>
        </DrawerHeader>
        {NAV_ITEMS.map((item, index) => (
          <>
            {item.href === "bar" && (
              <div className="mx-4 my-3 h-1 bg-[#D9D9D9]" />
            )}
            {item.href != "bar" && (
              <Link href={item.href} key={`${item.label}-${index}`}>
                <div className="flex gap-2 px-4 py-3 text-start">
                  <Icon name={item.icon} alt="drawer-icon" />
                  <span className="body1 text-grey-900">{item.label}</span>
                </div>
              </Link>
            )}
          </>
        ))}
      </DrawerContent>
    </Drawer>
  );
}
