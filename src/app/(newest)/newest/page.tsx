import Header from "./_components/Header";
import { NewestPollList } from "@/components/templates";
import FloatingButton from "@/app/(main)/_components/FloatingButton";

export default function NewestPage() {
  return (
    <>
      <Header />
      <NewestPollList />
      <FloatingButton />
    </>
  );
}
