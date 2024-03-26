import Image from "next/image";
import Title from "./Title";
import ColoredCircle from "@/components/common/ColoredCircle";

export default function WeeklyPopularPollList() {
  return (
    <>
      <Title text="이번 주의 인기 투표" />
      <div className="flex flex-col w-32 text-start">
        <Image
          width={128}
          height={184}
          className="rounded-lg"
          alt="book-cover"
          src={"https://image.yes24.com/goods/124418561/XL"}
        />
        <div className="flex">
          <ColoredCircle width={20} percentage={100} />
          <span className="body2-emphasis">85%</span>
        </div>
        <div className="body1 overflow-hidden whitespace-nowrap overflow-ellipsis h-6 pt-1">
          조코딩의 챗GPT API를 활용한 수익형 웹 서비스 만들기
        </div>
        <div className="body2 text-[#757575] mb-7">
          <span>조동근</span>
          <span>{" ∙ "}</span>
          <span>한빛미디어</span>
        </div>
        <div className="caption text-[#757575]">
          <span>투표 {123}</span>
          <span>{" ∙ "}</span>
          <span>의견 {3}</span>
        </div>
      </div>
    </>
  );
}
