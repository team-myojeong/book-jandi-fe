import Link from "next/link";

export default function SearchFooter() {
  return (
    <footer className="fixed max-w-[500px] mx-auto left-0 right-0 bottom-0 z-10 flex border-t-[0.063rem] border-grey-500 py-3 px-4 align-middle justify-end gap-2">
      <div className="body1 text-grey-500 text-center ">
        찾으시는 책이 없으신가요?
      </div>
      <Link href="/register-book" className="body1 text-grey-700">
        직접 입력
      </Link>
    </footer>
  );
}
