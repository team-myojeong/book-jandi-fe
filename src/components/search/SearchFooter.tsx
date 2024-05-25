import Link from "next/link";

export default function SearchFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 mx-auto flex max-w-[500px] justify-end gap-2 border-t-[0.063rem] border-grey-500 px-4 py-3 align-middle">
      <div className="body1 text-center text-grey-500 ">
        찾으시는 책이 없으신가요?
      </div>
      <Link href="/register-book" className="body1 text-grey-700">
        직접 입력
      </Link>
    </footer>
  );
}
