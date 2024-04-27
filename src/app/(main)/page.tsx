import { Header } from "@/components/layout/Header";
import WeeklyPopularPollList from "./_components/WeeklyPopularPollList";
import { NewestPollList } from "@/components/templates";
import FloatingButton from "./_components/FloatingButton";
import Title from "./_components/Title";

export default function Main() {
  return (
    <>
      <Header />
      <WeeklyPopularPollList />
      <div className="-ml-4 h-4 w-screen max-w-[500px] bg-gray-100" />
      <div className="flex flex-col py-4">
        <Title text="새로 올라온 투표" />
        <NewestPollList />
      </div>
      <FloatingButton />
    </>
  );
}
