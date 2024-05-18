import { HeaderWithSingleArrow } from "@/components/layout/Header";
import Image from "next/image";

export default async function page() {
  return (
    <div>
      <HeaderWithSingleArrow title="만든이들" />
      <Image
        src="/images/makers.png"
        alt="makers"
        width={390}
        height={1543}
        className="w-full"
      />
    </div>
  );
}
