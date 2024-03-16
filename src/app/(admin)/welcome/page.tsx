import SignUpButton from "./components/SignUpButton";

export default function Page() {
  return (
    <div className="flex min-h-[calc(100vh_-_3.75rem)] flex-col px-4 justify-center">
      <p className="title1 mb-4">이 개발도서, 읽어도 될까?</p>
      <p className="title2 mb-9">북잔디 가입하고 투표로 확인해 보세요!</p>
      <SignUpButton />
    </div>
  );
}
