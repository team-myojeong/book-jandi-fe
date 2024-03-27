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

const WEEKLY_POPULAR_POLL_DATA = [
  {
    poll_id: 1,
    cover:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F6530091%3F",
    title: "조코딩의 챗GPT API를 활용한 수익형 웹 서비스 만들기",
    author_list: ["조동근"],
    publisher: "한빛미디어",
    transtlator_list: [],
    vote_percentage: 85,
    vote_count: 100,
    opinion_count: 12,
  },
  {
    poll_id: 2,
    cover:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F927035%3Ftimestamp%3D20231227170332",
    title: "Clean Code(클린 코드)",
    author_list: ["로버트 C. 마틴"],
    publisher: "인사이트",
    translator_list: ["박재호"],
    vote_percentage: 92,
    vote_count: 2832,
    opinion_count: 71,
  },
  {
    poll_id: 3,
    cover: "https://covers.oreillystatic.com/images/9780596517748/lrg.jpg",
    title: "JavaScript: The Good Parts",
    author_list: ["Douglas Crockford"],
    publisher: "O'Reilly Media",
    translator_list: ["강경민"],
    vote_percentage: 88,
    vote_count: 432,
    opinion_count: 56,
  },
  {
    poll_id: 4,
    cover: "https://image.yes24.com/goods/77283734/XL",
    title:
      "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    author_list: ["Robert C. Martin"],
    publisher: "Prentice Hall",
    translator_list: [],
    vote_percentage: 91,
    vote_count: 876,
    opinion_count: 102,
  },
  {
    poll_id: 5,
    cover: "https://image.yes24.com/goods/108192370/XL",
    title: "Head First Design Patterns",
    author_list: ["Eric Freeman", "Elisabeth Robson"],
    publisher: "O'Reilly Media",
    translator_list: ["서환수"],
    vote_percentage: 89,
    vote_count: 632,
    opinion_count: 75,
  },
  {
    poll_id: 6,
    cover: "https://image.yes24.com/goods/98385788/XL",
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author_list: ["Marijn Haverbeke"],
    publisher: "No Starch Press",
    translator_list: [],
    vote_percentage: 94,
    vote_count: 543,
    opinion_count: 68,
  },
  {
    poll_id: 7,
    cover: "https://image.yes24.com/goods/120800356/XL",
    title: "Python Crash Course",
    author_list: ["Eric Matthes"],
    publisher: "No Starch Press",
    translator_list: ["한선용"],
    vote_percentage: 90,
    vote_count: 754,
    opinion_count: 91,
  },
  {
    poll_id: 8,
    cover: "https://image.yes24.com/goods/71926161/XL",
    title:
      "Learning React: A Hands-On Guide to Building Web Applications Using React and Redux",
    author_list: ["Kirupa Chinnathambi"],
    publisher: "Addison-Wesley Professional",
    translator_list: ["이태상"],
    vote_percentage: 87,
    vote_count: 321,
    opinion_count: 42,
  },
  {
    poll_id: 9,
    cover: "https://image.yes24.com/momo/TopCate62/MidCate10/6199612.jpg",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author_list: [
      "Erich Gamma",
      "Richard Helm",
      "Ralph Johnson",
      "John Vlissides",
    ],
    publisher: "Addison-Wesley Professional",
    translator_list: [],
    vote_percentage: 92,
    vote_count: 865,
    opinion_count: 99,
  },
];

const NEWEST_POLL_DATA = WEEKLY_POPULAR_POLL_DATA.map((ele) => {
  return {
    poll_id: ele.poll_id,
    cover: ele.cover,
    title: ele.title,
    author_list: ele.author_list,
    publisher: ele.publisher,
    translator_list: ele.translator_list,
    vote_percentage: ele.vote_percentage,
  };
}).sort(() => Math.random() - 0.5);

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
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll/popular`, () => {
    return HttpResponse.json({ poll_list: WEEKLY_POPULAR_POLL_DATA });
  }),
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll/recent`, () => {
    return HttpResponse.json({ poll_list: NEWEST_POLL_DATA });
  }),
];
