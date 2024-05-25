import Image from "next/image";

interface BookThumbnailProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  fixWidth?: boolean;
  fixHeight?: boolean;
}
export default function BookThumbnail({
  src,
  alt,
  width,
  height,
  fixWidth = false,
  fixHeight = false,
}: BookThumbnailProps) {
  const fixWidthStyle = fixWidth ? { width: `${width}px`, height: "auto" } : {};
  const fixHeightStyle = fixHeight
    ? { height: `${height}px`, width: "auto" }
    : {};
  return (
    <Image
      priority
      width={width}
      height={height}
      className="rounded-lg border border-grey-300"
      alt={alt}
      src={src}
      style={{ ...fixWidthStyle, ...fixHeightStyle }}
    />
  );
}
