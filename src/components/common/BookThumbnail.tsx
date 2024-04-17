import Image from "next/image";

interface BookThumbnailProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export default function BookThumbnail({
  src,
  alt,
  width,
  height,
}: BookThumbnailProps) {
  return (
    <Image
      priority
      width={width}
      height={height}
      className="rounded-lg border border-gray-300"
      alt={alt}
      src={src}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
