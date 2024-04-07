import Image from "next/image";

export function Icon({
  name,
  alt,
  width = 24,
  height = 24,
}: {
  name: IconType;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      priority
      src={`/icons/${name}.svg`}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export type IconType =
  | "alarm/alert"
  | "alarm/default"
  | "arrow/left"
  | "arrow/right"
  | "book/basic"
  | "book/check"
  | "book/close"
  | "book/minus"
  | "book/plus"
  | "bookmark/checked"
  | "bookmark/default"
  | "document/add"
  | "document/edit"
  | "grass/bad"
  | "grass/good"
  | "alert"
  | "camera"
  | "cat"
  | "check"
  | "close"
  | "comment"
  | "eye"
  | "favorite"
  | "hamburger"
  | "kakao"
  | "leaf"
  | "log-out"
  | "logo"
  | "magnifier"
  | "menu-dots"
  | "setting"
  | "share"
  | "user";
