import { Header } from "@/components/layout/Header";
import WeeklyPopularPollList from "./_components/WeeklyPopularPollList";
import NewestPollList from "./_components/NewestPollList";
import FloatingButton from "./_components/FloatingButton";

export default function Main() {
  return (
    <>
      <Header />
      <WeeklyPopularPollList />
      <NewestPollList />
      <FloatingButton />
    </>
  );
}
