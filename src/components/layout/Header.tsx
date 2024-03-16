"use client";
import { IconType } from "@/components/common/Icon";
import LogoButton from "@/components/common/LogoButton";
import IconButton from "@/components/common/IconButton";
import Button from "@/components/common/Button";
import Avatar from "@/components/common/Avatar";

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <header className="h-15 z-10 px-4 flex justify-between items-center">
      {children}
    </header>
  );
}

export function Header({ isLogin = false }: { isLogin?: boolean }) {
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
          onClick={() => console.log("검색")}
        />
        {!isLogin ? (
          <div className="h-9.5">
            <Button
              color="green"
              type="default"
              text="회원가입/로그인"
              onClick={() => console.log("회원가입/로그인 버튼")}
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
  onClickLeftArrow?: () => void;
}) {
  return (
    <HeaderWrapper>
      <IconButton
        name="arrow/left"
        alt="back-button"
        onClick={onClickLeftArrow}
      />
      <span className="font-semibold text-lg">{title}</span>
      <div className="w-6 h-6 invisible" />
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
