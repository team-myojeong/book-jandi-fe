"use client";

import Button from "@/components/common/Button";
import { useEffect, useState } from "react";
import StepChips from "./_components/StepChip";

import { HeaderWithSingleArrow } from "@/components/layout/Header";
import { useRouter } from "next/navigation";
import { useFunnel } from "./_funnel/useFunnel";
import { GETCareerList, GETJobList } from "@/actions/static.action";
import FunnelTitle from "./_components/FunnelTitle";
import BottomFixedBottom from "@/components/common/BottomFixedBottom";
import { POSTSignUp, SignUpForm } from "@/actions/user.action";

interface JobData {
  jobId: number;
  jobText: string;
  isSelected: boolean;
}

interface CareerData {
  careerId: number;
  careerText: string;
  isSelected: boolean;
}

export default function Page() {
  const router = useRouter();
  const [Funnel, step, setStep] = useFunnel(["JOB", "CAREER"] as const, "JOB");
  const [allJobData, setAllJobData] = useState<JobData[]>();
  const [allCareerData, setAllCareerData] = useState<CareerData[]>();
  const [signUpForm, setSignUpForm] = useState<SignUpForm>();

  const onClickHeaderBackButton = () => {
    if (step === "JOB") {
      router.replace("/welcome");
    } else if (step === "CAREER") {
      setStep("JOB");
    }
  };

  const onClickJobButton = (e: JobData) => {
    setAllJobData((prev) =>
      prev?.map((ele) => {
        if (ele.jobId === e.jobId) {
          return { ...ele, isSelected: true };
        }
        return { ...ele, isSelected: false };
      }),
    );
    setSignUpForm((prev) =>
      prev ? { ...prev, job_id: e.jobId } : { job_id: e.jobId },
    );
  };

  const onClickCareerButton = (e: CareerData) => {
    setAllCareerData((prev) =>
      prev?.map((ele) => {
        if (ele.careerId === e.careerId) {
          return { ...ele, isSelected: true };
        }
        return { ...ele, isSelected: false };
      }),
    );
    setSignUpForm((prev) =>
      prev ? { ...prev, career_id: e.careerId } : { career_id: e.careerId },
    );
  };

  const onClickSignUpCompleteButton = async () => {
    if (signUpForm) {
      const success = await POSTSignUp(signUpForm);
      if (success) {
        router.push("/");
      } else {
        alert("회원가입 중 문제가 발생했어요. 잠시 후 다시 시도해 주세요.");
      }
    } else {
      alert("선택하지 않은 항목이 있어요.");
    }
  };

  useEffect(function init() {
    GETJobList().then((fetchedData) => setAllJobData(fetchedData));
    GETCareerList().then((fetchedData) => setAllCareerData(fetchedData));
  }, []);

  return (
    <>
      <HeaderWithSingleArrow
        title="회원가입"
        onClickLeftArrow={onClickHeaderBackButton}
      />
      <Funnel>
        <Funnel.Step name="JOB">
          <StepChips activeIndex={1} />
          <FunnelTitle
            title="직무를 선택해 주세요!"
            subTitle="본인의 주 개발 분야를 선택해 주세요!"
            className="mb-12"
          />
          <div className="grid grid-cols-3 gap-x-2 gap-y-4">
            {allJobData &&
              allJobData.map((ele, idx) => {
                return (
                  <div key={`${ele}-${idx}`} className="h-9 w-full">
                    <Button
                      text={ele.jobText}
                      color="green"
                      state={
                        signUpForm?.job_id === ele.jobId ? "active" : "default"
                      }
                      type="outline"
                      size="S"
                      onClick={() => onClickJobButton(ele)}
                    />
                  </div>
                );
              })}
          </div>
          <BottomFixedBottom
            text="다음"
            disabled={!signUpForm?.job_id}
            onClick={() => setStep("CAREER")}
          />
        </Funnel.Step>
        <Funnel.Step name="CAREER">
          <StepChips activeIndex={2} />
          <FunnelTitle
            title="개발 연차를 선택해 주세요!"
            subTitle="얼마나 그 개발 분야를 공부하셨나요?"
            className="mb-12"
          />
          <div className="flex flex-col gap-y-2">
            {allCareerData &&
              allCareerData.map((ele, idx) => {
                return (
                  <div key={`${ele}-${idx}`} className="h-[2.375rem] w-full">
                    <Button
                      text={ele.careerText}
                      color="green"
                      state={
                        signUpForm?.career_id === ele.careerId
                          ? "active"
                          : "default"
                      }
                      type="outline"
                      size="S"
                      onClick={() => onClickCareerButton(ele)}
                    />
                  </div>
                );
              })}
          </div>
          <BottomFixedBottom
            text="회원가입 완료"
            disabled={!signUpForm?.career_id}
            onClick={onClickSignUpCompleteButton}
          />
        </Funnel.Step>
      </Funnel>
    </>
  );
}
