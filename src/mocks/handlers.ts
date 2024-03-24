import { HttpResponse, http } from "msw";

const JOBS_DATA = [
  {
    job_id: 1,
    job_text: "프론트엔드 개발자",
  },
  {
    job_id: 2,
    job_text: "백엔드 개발자",
  },
  {
    job_id: 3,
    job_text: "풀스택 개발자",
  },
  {
    job_id: 4,
    job_text: "IOS 개발자",
  },
  {
    job_id: 5,
    job_text: "Android 개발자",
  },
  {
    job_id: 6,
    job_text: "크로스플랫폼 앱",
  },
  {
    job_id: 7,
    job_text: "DevOps 개발자",
  },
  {
    job_id: 8,
    job_text: "AI/ML 엔지니어",
  },
  {
    job_id: 9,
    job_text: "취준생",
  },
  {
    job_id: 10,
    job_text: "학생",
  },
  {
    job_id: 11,
    job_text: "기타",
  },
];

const CAREER_DATA = [
  { career_id: 1, career_text: "신입(0-1년 미만)" },
  { career_id: 2, career_text: "1년 이상-3년 미만" },
  { career_id: 3, career_text: "3년 이상-5년 미만" },
  { career_id: 4, career_text: "5년 이상-7년 미만" },
  { career_id: 5, career_text: "7년 이상" },
];

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/job`, () => {
    return HttpResponse.json({ job_list: JOBS_DATA });
  }),
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/career`, () => {
    return HttpResponse.json({ career_list: CAREER_DATA });
  }),
  http.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/signup`,
    ({ request }) => {
      type TRequestBody = { job_id: number; career_id: number };
      const body: unknown = request.body;
      const signUpRequestBody = body as TRequestBody;
      if (!!signUpRequestBody.job_id && !!signUpRequestBody.career_id) {
        return HttpResponse.json({ success: true });
      }
      return HttpResponse.json({ success: false });
    }
  ),
];
