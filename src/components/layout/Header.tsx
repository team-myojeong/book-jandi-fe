"use client";
import { IconType } from "@/components/common/Icon";
import LogoButton from "@/components/common/LogoButton";
import IconButton from "@/components/common/IconButton";
import Button from "@/components/common/Button";
import Avatar from "@/components/common/Avatar";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";

export function HeaderWrapper({
  bottomBorder,
  children,
}: {
  bottomBorder?: "search" | "search-active" | "detail-page";
  children: React.ReactNode;
}) {
  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-10 mx-auto flex h-15 max-w-[500px] items-center justify-between bg-white px-4",
        bottomBorder === "search" && "border-b-2 border-gray-300",
        bottomBorder === "search-active" && "border-b-2 border-green-500",
        bottomBorder === "detail-page" && "border-b border-gray-300",
      )}
    >
      {children}
    </header>
  );
}

export function Header({ isLogin = false }: { isLogin?: boolean }) {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <div className="flex gap-4">
        <IconButton
          name="hamburger"
          alt="drawer-open-button"
          onClick={() => console.log("drawer")}
        />
        <LogoButton />
      </div>
      <div className="flex gap-4">
        <IconButton
          name="magnifier"
          alt="search-button"
          onClick={() => router.push("/search")}
        />
        {!isLogin ? (
          <div className="h-9.5">
            <Button
              text="회원가입/로그인"
              color="green"
              state="default"
              size="S"
              className="py-auto h-[34px]"
              onClick={() => router.push("/welcome")}
            />
          </div>
        ) : (
          <Avatar src="" size={32} />
        )}
      </div>
    </HeaderWrapper>
  );
}

export function HeaderWithSingleArrow({
  title,
  onClickLeftArrow,
}: {
  title: string;
  onClickLeftArrow: () => void;
}) {
  return (
    <HeaderWrapper>
      <IconButton
        name="arrow/left"
        alt="back-button"
        onClick={onClickLeftArrow}
      />
      <span className="text-lg font-semibold">{title}</span>
      <div className="invisible h-6 w-6" />
    </HeaderWrapper>
  );
}

interface IconElement {
  icon: IconType;
  onClick: () => void;
}

export function HeaderWithIcons({
  hasBorder,
  isLeftIconLogo = false,
  leftIcon,
  rightIcons,
}: {
  hasBorder?: boolean;
  isLeftIconLogo?: boolean;
  leftIcon?: IconElement;
  rightIcons: IconElement[];
}) {
  return (
    <HeaderWrapper bottomBorder={hasBorder ? "detail-page" : undefined}>
      <div className="flex gap-4">
        {isLeftIconLogo && <LogoButton />}
        {!isLeftIconLogo && leftIcon && (
          <IconButton
            name={leftIcon.icon}
            alt="header-left-icon-button"
            onClick={leftIcon.onClick}
          />
        )}
      </div>
      <div className="flex gap-4">
        {rightIcons.map((ele, idx) => {
          return (
            <IconButton
              key={ele.icon}
              name={ele.icon}
              alt={`header-right-icon-button-${idx}`}
              onClick={ele.onClick}
            />
          );
        })}
      </div>
    </HeaderWrapper>
  );
}
