import Image from "next/image";

export default function Avatar({ src, size }: { src: string; size: number }) {
  return (
    <div className={`rounded-full flex w-8 h-8 bg-green-300 overflow-hidden`}>
      <Image
        src={src.length > 0 ? src : "https://i.pravatar.cc/32"}
        alt="avatar"
        width={size}
        height={size}
        style={{
          objectFit: "cover",
          borderRadius: "50%",
          margin: "auto",
        }}
      />
    </div>
  );
}
