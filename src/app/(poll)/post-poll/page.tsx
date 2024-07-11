"use client";

import { POSTPollPost } from "@/actions/poll.action";
import Button from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { HeaderWithSingleArrow } from "@/components/layout/Header";
import SearchItem from "@/components/search/SearchItem";
import { useBookStore } from "@/stores/book-store-provider";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

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

  const onChangeOpinitionTextarea = (e: { target: HTMLTextAreaElement }) => {
    setPollForm((prev) => {
      return { ...prev, description: e.target.value };
    });
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
      const postId = await POSTPollPost({ ...pollForm, book });
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
          className="flex w-full items-center justify-center rounded-lg border border-grey-300 bg-grey-100 py-4"
          onClick={() => router.push("/post-poll/search-book")}
        >
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-grey-500">
            <Icon name="book/plus" alt="add-poll-post" width={24} height={24} />
          </div>
          <span className="text-grey-500">궁금한 책을 검색해 주세요!</span>
        </button>
      )}
      {selectedBook && (
        <div className="rounded-lg border border-grey-300">
          <SearchItem
            key={selectedBook.isbn}
            data={selectedBook}
            onClickRouteToAddPost={onClickEditBook}
          >
            <button
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-grey-500"
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
      <div className="mb-4 mt-8 text-start">
        <div className="title2 text-grey-700">현재 상황을 알려주세요!</div>
        <div className="body2 text-grey-500">
          투표 결과를 정확하게 전달드리기 위해 몇가지 정보를 받고 있어요.
        </div>
      </div>

      <div className="grid w-full gap-y-8 rounded-2xl p-4 shadow-lg">
        <div>
          <div className="body2-emphasis mb-2 text-start">
            고르신 책의 분야를 잘 이해하고 계신가요?
          </div>
          <div className="button:px-4 flex h-14 gap-2 *:px-4">
            <Button
              text={`아니오\n잘 몰라요`}
              color="green"
              state={pollForm.difficulty_level === 1 ? "active" : "default"}
              type="outline"
              size="S"
              onClick={() => onClickDifficultyButton(1)}
            />
            <Button
              text={`어느 정도는\n알고 있어요`}
              color="green"
              state={pollForm.difficulty_level === 2 ? "active" : "default"}
              type="outline"
              size="S"
              onClick={() => onClickDifficultyButton(2)}
            />
            <Button
              text={`잘 이해하고\n있어요!`}
              color="green"
              state={pollForm.difficulty_level === 3 ? "active" : "default"}
              type="outline"
              size="S"
              onClick={() => onClickDifficultyButton(3)}
            />
          </div>
        </div>
        <div>
          <div className="body2-emphasis mb-2 text-start">
            어떤 부분이 궁금하세요?
          </div>
          <div className="flex h-36 flex-col gap-2">
            <Button
              text="그냥 궁금해요!"
              color="green"
              state={
                pollForm.question === "그냥 궁금해요!" ? "active" : "default"
              }
              type="outline"
              size="S"
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
              type="outline"
              size="S"
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
              type="outline"
              size="S"
              onClick={onClickQuestionButton}
            />
          </div>
        </div>
        <div>
          <div className="body2-emphasis mb-2 text-start">
            내용을 작성해주세요(선택사항)
          </div>
          <textarea
            className="w-full resize-none rounded-lg border border-grey-300 p-4 outline-none"
            onChange={onChangeOpinitionTextarea}
            rows={5}
          />
        </div>
      </div>
      <div className="*:title2 fixed bottom-0 mr-4 flex h-32 w-full max-w-[29.25rem] justify-center bg-white py-4 *:h-12">
        <Button
          text="다음"
          color="green"
          // TODO: validation
          state="default"
          onClick={onSubmitPoll}
        />
      </div>
    </div>
  );
}
