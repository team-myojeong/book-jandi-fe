"use client";

import { useFunnel } from "@/app/utils/funnel/useFunnel";
import BottomFixedBottom from "@/components/common/BottomFixedBottom";
import { cn } from "@/utils/cn";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { act } from "react-dom/test-utils";

const TITLE_BY_STEP = {
  FIRST: `책을 추천받긴 했는데\n나한테 맞을까?`,
  SECOND: `개발자에게\n시간은 소중하니까!`,
  THIRD: `이미 읽은 책이 있다면\n투표하고 의견을 써보세요`,
};

const DESCRIPTION_BY_STEP = {
  FIRST: `다양한 책을 추천받지만\n책을 읽었을 때 ‘나에게’ 도움이 될지 고민돼서\n망설여질 때가 있지 않으셨나요?`,
  SECOND: `추천받은 책이 내 상황에서\n읽을 만한 책인지 고민이 될 땐\n투표 게시글을 올려 투표를 받아보세요!`,
  THIRD: `관심있는 책의 투표 게시글 중\n이미 읽은 책이 있다면 투표하고\n한줄 의견을 통해 조언해주세요!`,
};

export default function Page() {
  const router = useRouter();
  const [Funnel, step, setStep] = useFunnel(
    ["FIRST", "SECOND", "THIRD"] as const,
    "FIRST",
  );
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-15 w-full justify-between">
        <div
          className={cn(
            "body1 text-grey-500 hover:cursor-pointer",
            step === "FIRST" && "invisible",
          )}
          onClick={() =>
            setStep((prev) => {
              return prev === "SECOND" ? "FIRST" : "SECOND";
            })
          }
        >
          이전 페이지
        </div>
        <div
          className="body1 text-green-500 hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          SKIP
        </div>
      </div>
      <MainTitle content={TITLE_BY_STEP[step]} />
      <Description content={DESCRIPTION_BY_STEP[step]} />
      <Funnel>
        <Funnel.Step name="FIRST">
          <Image
            alt="onboarding-1"
            src="/images/onboarding_1.png"
            width={358}
            height={358}
          />
          <StepChips activeIndex={0} length={3} />
          <BottomFixedBottom text="다음" onClick={() => setStep("SECOND")} />
        </Funnel.Step>
        <Funnel.Step name="SECOND">
          <Image
            alt="onboarding-2"
            src="/images/onboarding_2.png"
            width={358}
            height={358}
          />
          <StepChips activeIndex={1} length={3} />
          <BottomFixedBottom text="다음" onClick={() => setStep("THIRD")} />
        </Funnel.Step>
        <Funnel.Step name="THIRD">
          <Image
            alt="onboarding-3"
            src="/images/onboarding_3.png"
            width={358}
            height={358}
          />
          <StepChips activeIndex={2} length={3} />
          <BottomFixedBottom
            text="북잔디 시작하기!"
            onClick={() => router.push("/")}
          />
        </Funnel.Step>
      </Funnel>
    </div>
  );
}

function MainTitle({ content }: { content: string }) {
  return (
    <p className="title1 whitespace-break-spaces text-grey-900">{content}</p>
  );
}

function Description({ content }: { content: string }) {
  return (
    <p className="body1 whitespace-break-spaces text-grey-700">{content}</p>
  );
}

function StepChips({
  activeIndex,
  length,
}: {
  activeIndex: number;
  length: number;
}) {
  return (
    <div className="mt-10 flex gap-2">
      {Array.from({ length }).map((_, idx) => {
        return (
          <div
            className={cn(
              "h-1 w-1 rounded-full bg-grey-300",
              activeIndex === idx && "w-6 bg-green-500",
            )}
            key={`idx-${idx}`}
          />
        );
      })}
    </div>
  );
}
