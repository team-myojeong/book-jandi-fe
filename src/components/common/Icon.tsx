import Image from "next/image";

export function Icon({
  name,
  alt,
  width = 24,
  height = 24,
}: {
  name: IconType;
  alt?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      priority
      src={`/icons/${name}.svg`}
      // TODO: 사용하는 alt 이름 정리
      alt={`${alt}-icon`}
      width={width}
      height={height}
      style={{ height: "100%" }}
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
  | "document/add-gray"
  | "document/add-white"
  | "document/edit"
  | "grass/leaf-fresh"
  | "grass/leaf-gray"
  | "grass/leaf-rotten"
  | "alert"
  | "camera-gray"
  | "camera"
  | "cat"
  | "check"
  | "close"
  | "comment"
  | "eye-gray"
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
