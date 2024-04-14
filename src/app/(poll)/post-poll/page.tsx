"use client";

import { fetchAPI } from "@/apis/route";
import Button from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { HeaderWithSingleArrow } from "@/components/layout/Header";
import SearchItem from "@/components/search/SearchItem";
import { useBookStore } from "@/stores/book-store-provider";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PostForm {
  difficulty_level: 1 | 2 | 3;
  question: string;
  description?: string;
  book: {
    title: string;
    cover: string;
    author_list: string[];
    publisher: string;
    translator_list: string[];
    isbn: string;
  };
}
interface POSTPollResponse {
  id: number;
}

async function POSTSignUp(requestBody: PostForm) {
  try {
    const result = await fetchAPI<POSTPollResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/poll`,
      "POST",
      "json",
      {
        ...requestBody,
      }
    );
    return result.id;
  } catch (error) {
    console.error("Fail to fetch data:", error);
  }
}

export default function Page() {
  const router = useRouter();

  const { selectedBook, reset } = useBookStore((state) => state);

  const [pollForm, setPollForm] = useState<{
    difficulty_level: 1 | 2 | 3;
    question: string;
    description: string;
  }>({
    difficulty_level: 1,
    question: "",
    description: "",
  });

  const onClickEditBook = () => {
    reset();
    router.push("/post-poll/search-book");
  };

  const onClickDifficultyButton = (difficultyNumber: 1 | 2 | 3) => {
    setPollForm({ ...pollForm, difficulty_level: difficultyNumber });
  };

  const onClickQuestionButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setPollForm({ ...pollForm, question: target.innerText });
  };

  const onSubmitPoll = async () => {
    if (selectedBook && pollForm.difficulty_level && pollForm.question) {
      const { title, cover, author_list, publisher, translator_list, isbn } =
        selectedBook;
      const book = {
        title,
        cover,
        author_list,
        publisher,
        translator_list,
        isbn,
      };
      const postId = await POSTSignUp({ ...pollForm, book });
      router.push(`/poll/${postId}`);
    }
  };
  return (
    <div>
      <HeaderWithSingleArrow
        title="게시물 작성"
        onClickLeftArrow={() => router.back()}
      />
      {!selectedBook && (
        <button
          className="w-full py-4 flex bg-grey-100 border border-grey-300 rounded-lg items-center justify-center"
          onClick={() => router.push("/post-poll/search-book")}
        >
          <div className="rounded-full bg-grey-500 w-10 h-10 flex justify-center items-center mr-4">
            <Icon name="book/plus" alt="add-poll-post" width={24} height={24} />
          </div>
          <span className="text-grey-500">궁금한 책을 검색해 주세요!</span>
        </button>
      )}
      {selectedBook && (
        <div className="border border-grey-300 rounded-lg">
          <SearchItem
            key={selectedBook.isbn}
            data={selectedBook}
            onClickRouteToAddPost={onClickEditBook}
          >
            <button
              className="w-8 h-8 border rounded-full border-grey-500 flex justify-center items-center flex-none"
              onClick={onClickEditBook}
            >
              <Icon
                name={"document/edit"}
                alt="add-poll-post"
                width={16}
                height={16}
              />
            </button>
          </SearchItem>
        </div>
      )}
      <div className="text-start mt-8 mb-4">
        <div className="title2 text-grey-700">현재 상황을 알려주세요!</div>
        <div className="body2 text-grey-500">
          투표 결과를 정확하게 전달드리기 위해 몇가지 정보를 받고 있어요.
        </div>
      </div>

      <div className="w-full p-4 rounded-2xl shadow-lg grid gap-y-8">
        <div>
          <div className="body2-emphasis text-start mb-2">
            고르신 책의 분야를 잘 이해하고 계신가요?
          </div>
          <div className="flex h-14 gap-2 button:px-4 *:px-4">
            <Button
              text="아니오 잘 몰라요"
              color="green"
              state={pollForm.difficulty_level === 1 ? "active" : "default"}
              type="secondary"
              onClick={() => onClickDifficultyButton(1)}
            />
            <Button
              text="어느 정도는 알고 있어요"
              color="green"
              state={pollForm.difficulty_level === 2 ? "active" : "default"}
              type="secondary"
              onClick={() => onClickDifficultyButton(2)}
            />
            <Button
              text="잘 이해하고 있어요!"
              color="green"
              state={pollForm.difficulty_level === 3 ? "active" : "default"}
              type="secondary"
              onClick={() => onClickDifficultyButton(3)}
            />
          </div>
        </div>
        <div>
          <div className="body2-emphasis text-start mb-2">
            어떤 부분이 궁금하세요?
          </div>
          <div className="h-36 flex flex-col gap-2">
            <Button
              text="그냥 궁금해요!"
              color="green"
              state={
                pollForm.question === "그냥 궁금해요!" ? "active" : "default"
              }
              type="secondary"
              onClick={onClickQuestionButton}
            />
            <Button
              text="내용의 난이도가 저에게 적절할까요?"
              color="green"
              state={
                pollForm.question === "내용의 난이도가 저에게 적절할까요?"
                  ? "active"
                  : "default"
              }
              type="secondary"
              onClick={onClickQuestionButton}
            />
            <Button
              text="가볍게 읽을 수 있을까요?"
              color="green"
              state={
                pollForm.question === "가볍게 읽을 수 있을까요?"
                  ? "active"
                  : "default"
              }
              type="secondary"
              onClick={onClickQuestionButton}
            />
          </div>
        </div>
        <div>
          <div className="body2-emphasis text-start mb-2">
            내용을 작성해주세요(선택사항)
          </div>
          <textarea
            className="outline-none w-full border border-grey-300 rounded-lg p-4 resize-none"
            rows={5}
          />
        </div>
      </div>
      <div className="fixed mr-4 w-full max-w-[29.25rem] h-32 bottom-0 py-4 flex justify-center *:h-12 *:title2 bg-white">
        <Button
          color="green"
          text="다음"
          state="default"
          onClick={onSubmitPoll}
        />
      </div>
    </div>
  );
}
