import Image from "next/image";
import Title from "./Title";
import ColoredCircle from "@/components/common/ColoredCircle";

export default async function NewestPollList() {
  return (
    <>
      <Title text="새로 올라온 투표" />
      <div className="flex h-[133px] w-full gap-4 mt-4">
        <Image
          priority
          width={93}
          height={133}
          className="rounded-lg"
          alt={`book-cover`}
          src={
            "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F927035%3Ftimestamp%3D20231227170332"
          }
          style={{ width: "auto", height: "100%" }}
        />
        <div className="text-start flex flex-col justify-center ">
          <span className="body1">Clean Code(클린 코드)</span>
          <div className="text-[#757575] mb-3">
            <span className="caption">저자 로버트 C. 마틴</span>
            <span>{" ∙ "}</span>
            <span className="caption">번역 박재호</span>
            <span>{" ∙ "}</span>
            <span className="caption">인사이트</span>
          </div>
          <div className="flex">
            <ColoredCircle width={20} percentage={100} />
            <span className="body2">92%</span>
          </div>
        </div>
      </div>
      <hr className="border border-[#D9D9D9] mt-2" />
    </>
  );
}
