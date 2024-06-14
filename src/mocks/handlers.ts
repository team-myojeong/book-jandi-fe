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
  { career_id: 2, career_text: "1년-3년" },
  { career_id: 3, career_text: "4년-6년" },
  { career_id: 4, career_text: "7년-9년" },
  { career_id: 5, career_text: "10년 이상" },
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
    vote_percentage: 43,
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
    vote_percentage: -1,
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

export const SEARCH_DATA = [
  {
    cover:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F927035%3Ftimestamp%3D20231227170332",
    title: "Clean Code(클린 코드)",
    author_list: ["로버트 C. 마틴"],
    publisher: "인사이트",
    translator_list: ["박재호"],
    poll_count: 321,
    isbn: "9788966260959",
  },
  {
    cover: "https://image.yes24.com/goods/77283734/XL",
    title:
      "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    author_list: ["Robert C. Martin"],
    publisher: "Prentice Hall",
    translator_list: [],
    poll_count: 876,
    isbn: "9780134494166",
  },
  {
    cover: "https://image.yes24.com/goods/108192370/XL",
    title: "Head First Design Patterns",
    author_list: ["Eric Freeman", "Elisabeth Robson"],
    publisher: "O'Reilly Media",
    translator_list: ["서환수"],
    poll_count: 632,
    isbn: "9781492078005",
  },
  {
    cover: "https://image.yes24.com/goods/98385788/XL",
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author_list: ["Marijn Haverbeke"],
    publisher: "No Starch Press",
    translator_list: [],
    poll_count: 543,
    isbn: "9781593279509",
  },
];

const POLL_POST_DATA = {
  poll: {
    cover:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F927035%3Ftimestamp%3D20231227170332",
    title: "Clean Code(클린 코드)",
    author_list: ["로버트 C. 마틴"],
    publisher: "인사이트",
    translator_list: ["박재호"],
    question: "입문자가 읽기에 적합한가요?",
    difficulty_level: 1,
    description:
      "호잇호잇 둘리는 입문자가 읽고 싶은데 너무 어려운 것은 아닌지 모르겠네요, 읽어보신 분이 있다면 자세한 후기를 알려주세요!",
  },
  writer_info: {
    id: 1,
    name: "코드캡쳐체리",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZV7-fHgwtEs7Qqx0UoMQ4BX-849Ashm2DN8vJrymhfjAxcCadrOo38ObuLrCGfFpd2Tk&usqp=CAU",
    job: "프론트엔드",
    career: "1-3년",
  },
  vote: "green",
  is_bookmark: false,
  is_mine: false,
};

const POLL_VOTE_DETAIL_DATA = {
  green_percentage: 61,
  dried_percentage: 39,
  total: {
    vote_count: 1000,
    green_count: 610,
    dried_count: 390,
    green_opinion_count: 234,
    dried_opinion_count: 123,
    ranking: {
      top_career: "1년-3년",
      top_job: "프론트엔드",
      detail: [
        {
          job: "프론트엔드",
          percentage: [12, 38, 0, 50, 0],
        },
        {
          job: "백엔드",
          percentage: [34, 1, 39, 6, 20],
        },
        {
          job: "풀스택",
          percentage: [0, 0, 0, 0, 100],
        },
      ],
    },
  },
};

const POLL_OPINION_DATA = {
  my_opinion: {
    id: 1,
    created_at: "2024.03.12",
    job: "백엔드",
    career: "신입",
    contents: "이 책 보고 취뽀 했습니다~!",
    name: "개발자1",
    profile:
      "https://blog.kakaocdn.net/dn/c77N8x/btry7MnUWU7/K4Zb5nR8VlxbDfkfUhm3G0/img.jpg",
    writer_id: 1,
  },
  opinion_list: [
    {
      id: 1,
      created_at: "2024.03.12",
      job: "프론트엔드",
      career: "신입",
      contents: "이 책 보고 취뽀 했습니다~!",
      name: "개발자2",
      profile:
        "https://www.greenart.co.kr/upimage/new_editor/20212/20210201112403.jpg",
      writer_id: 2,
    },
    {
      id: 2,
      created_at: "2024.03.12",
      job: "풀스택",
      career: "신입",
      contents: "이 책 보고 취뽀 했습니다~!",
      name: "개발자3",
      profile:
        "https://www.greenart.co.kr/upimage/new_editor/20212/20210201112403.jpg",
      writer_id: 3,
    },
  ],
};

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/job`, () => {
    return HttpResponse.json({ job_list: JOBS_DATA });
  }),
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/career`, () => {
    return HttpResponse.json({ career_list: CAREER_DATA });
  }),
  http.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/signup`,
    async ({ request }) => {
      type TRequestBody = { job_id: number; career_id: number };
      const newUser = await request.json();
      const signUpRequestBody = newUser as TRequestBody;
      if (!!signUpRequestBody.job_id && !!signUpRequestBody.career_id) {
        return HttpResponse.json({ success: true });
      }
      return HttpResponse.json({ success: false });
    },
  ),
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/poll/popular`, () => {
    return HttpResponse.json({ poll_list: WEEKLY_POPULAR_POLL_DATA });
  }),
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/poll/recent`, () => {
    return HttpResponse.json({ poll_list: NEWEST_POLL_DATA });
  }),
  http.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/book/search`,
    ({ request }) => {
      const url = new URL(request.url);
      const keyword = url.searchParams.get("keyword");

      if (!keyword) {
        return new HttpResponse(null, { status: 404 });
      }
      return HttpResponse.json({ book_list: SEARCH_DATA });
    },
  ),
  http.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/poll`,
    async ({ request }) => {
      type TRequestBody = {
        difficulty_level: 1 | 2 | 3;
        question: string;
        description?: string;
        book: {
          isbn: string;
          cover: string;
          title: string;
          author_list: string[];
          translator_list: string[];
          publisher: string;
        };
      };
      const newPost = await request.json();
      const postPollRequestBody = newPost as TRequestBody;
      const isValidRequestBody =
        !!postPollRequestBody.difficulty_level &&
        !!postPollRequestBody.question &&
        !!postPollRequestBody.book &&
        !!postPollRequestBody.book.isbn &&
        !!postPollRequestBody.book.cover &&
        !!postPollRequestBody.book.title &&
        !!postPollRequestBody.book.author_list &&
        !!postPollRequestBody.book.publisher;
      if (isValidRequestBody) {
        return HttpResponse.json({ id: Math.floor(Math.random() * 100) + 1 });
      }
      return HttpResponse.json({ id: -1 }, { status: 400 });
    },
  ),
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/poll`, ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(POLL_POST_DATA);
  }),
  http.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/vote`,
    async ({ request }) => {
      type TRequestBody = {
        id: number;
        grass: "green" | "dried";
        contents?: string;
      };
      const newVote = await request.json();
      const pollVoteRequestBody = newVote as TRequestBody;
      const isValidRequestBody =
        !!pollVoteRequestBody.id && !!pollVoteRequestBody.grass;

      if (isValidRequestBody) {
        return HttpResponse.json({ success: true });
      }
      return HttpResponse.json({ success: false });
    },
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/vote/detail`,
    ({ request }) => {
      const url = new URL(request.url);
      const id = url.searchParams.get("id");

      if (!id) {
        return new HttpResponse(null, { status: 404 });
      }
      return HttpResponse.json(POLL_VOTE_DETAIL_DATA);
    },
  ),
  http.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/opinion`,
    async ({ request }) => {
      type TRequestBody = {
        id: number;
        contents: string;
      };
      const newOpinion = await request.json();
      const pollOpinionRequestBody = newOpinion as TRequestBody;
      const isValidRequestBody =
        !!pollOpinionRequestBody.id && !!pollOpinionRequestBody.contents;
      if (isValidRequestBody) {
        return HttpResponse.json({ success: true });
      }
      return HttpResponse.json({ success: false });
    },
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/poll/opinion`,
    ({ request }) => {
      const url = new URL(request.url);
      const id = url.searchParams.get("id");
      const limit = url.searchParams.get("limit");
      const last = url.searchParams.get("last");

      if (!id || !limit || !last) {
        return new HttpResponse(null, { status: 404 });
      }
      return HttpResponse.json(POLL_OPINION_DATA);
    },
  ),
];
