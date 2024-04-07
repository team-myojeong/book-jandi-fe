"use client";

import Button from "@/components/common/Button";
import { useEffect, useState } from "react";
import StepChips from "./components/StepChip";

import { HeaderWithSingleArrow } from "@/components/layout/Header";
import { useRouter } from "next/navigation";
import { useFunnel } from "./funnel/useFunnel";
import { fetchAPI } from "@/apis/route";

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

interface SignUpForm {
  job_id?: number;
  career_id?: number;
}

interface GETJobListResponse {
  job_list: {
    job_id: number;
    job_text: string;
  }[];
}

async function GETJobList() {
  try {
    const data = await fetchAPI<GETJobListResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/job`
    );
    return data.job_list.map((ele) => {
      return { jobId: ele.job_id, jobText: ele.job_text, isSelected: false };
    });
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}

interface GETCareerListResponse {
  career_list: {
    career_id: number;
    career_text: string;
  }[];
}
async function GETCareerList() {
  try {
    const data = await fetchAPI<GETCareerListResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/career`
    );
    return data.career_list.map((ele) => {
      return {
        careerId: ele.career_id,
        careerText: ele.career_text,
        isSelected: false,
      };
    });
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}

interface POSTSignUpResponse {
  success: boolean;
}

async function POSTSignUp(requestBody: SignUpForm) {
  try {
    const result = await fetchAPI<POSTSignUpResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/signup`,
      "POST",
      "json",
      {
        ...requestBody,
      }
    );
    return result.success;
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
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
      })
    );
    setSignUpForm((prev) =>
      prev ? { ...prev, job_id: e.jobId } : { job_id: e.jobId }
    );
  };

  const onClickCareerButton = (e: CareerData) => {
    setAllCareerData((prev) =>
      prev?.map((ele) => {
        if (ele.careerId === e.careerId) {
          return { ...ele, isSelected: true };
        }
        return { ...ele, isSelected: false };
      })
    );
    setSignUpForm((prev) =>
      prev ? { ...prev, career_id: e.careerId } : { career_id: e.careerId }
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
          <p className="title1">직무를 선택해 주세요!</p>
          <p className="body1">본인의 주 개발 분야를 선택해 주세요!</p>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4">
            {allJobData &&
              allJobData.map((ele, idx) => {
                return (
                  <div key={`${ele}-${idx}`} className="w-full h-9">
                    <Button
                      text={ele.jobText}
                      color="green"
                      state={ele.isSelected ? "default" : "disabled"}
                      type="secondary"
                      onClick={() => onClickJobButton(ele)}
                    />
                  </div>
                );
              })}
          </div>
          <Button
            color="green"
            text="다음"
            state="default"
            onClick={() => setStep("CAREER")}
          />
        </Funnel.Step>
        <Funnel.Step name="CAREER">
          <StepChips activeIndex={2} />
          <p className="title1">개발 연차를 선택해 주세요!</p>
          <p className="body1">얼마나 그 개발 분야를 공부하셨나요?</p>
          <div className="flex flex-col gap-y-2">
            {allCareerData &&
              allCareerData.map((ele, idx) => {
                return (
                  <div key={`${ele}-${idx}`} className="w-full h-9">
                    <Button
                      text={ele.careerText}
                      color="green"
                      state={ele.isSelected ? "default" : "disabled"}
                      type="secondary"
                      onClick={() => onClickCareerButton(ele)}
                    />
                  </div>
                );
              })}
          </div>
          <Button
            color="green"
            text="회원가입 완료"
            state="default"
            onClick={onClickSignUpCompleteButton}
          />
        </Funnel.Step>
      </Funnel>
    </>
  );
}
