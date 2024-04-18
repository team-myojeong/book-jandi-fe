"use client";
import { IconType } from "@/components/common/Icon";
import LogoButton from "@/components/common/LogoButton";
import IconButton from "@/components/common/IconButton";
import Button from "@/components/common/Button";
import Avatar from "@/components/common/Avatar";
import { useRouter } from "next/navigation";

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 mx-auto flex h-15 max-w-[500px] items-center justify-between bg-white px-4">
      {children}
    </header>
  );
}

export function Header({ isLogin = false }: { isLogin?: boolean }) {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <div className="flex">
        <IconButton
          name="hamburger"
          alt="drawer-open-button"
          onClick={() => console.log("drawer")}
        />
        <LogoButton />
      </div>
      <div className="flex">
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
  isLeftIconLogo = false,
  leftIcon,
  rightIcons,
}: {
  isLeftIconLogo?: boolean;
  leftIcon?: IconElement;
  rightIcons: IconElement[];
}) {
  return (
    <HeaderWrapper>
      <div>
        {isLeftIconLogo && <LogoButton />}
        {!isLeftIconLogo && leftIcon && (
          <IconButton
            name={leftIcon.icon}
            alt="header-left-icon-button"
            onClick={leftIcon.onClick}
          />
        )}
      </div>
      <div>
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
