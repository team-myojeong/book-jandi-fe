import { Header } from "@/components/layout/Header";
import WeeklyPopularPollList from "./components/WeeklyPopularPollList";
import NewestPollList from "./components/NewestPollList";
import FloatingButton from "./components/FloatingButton";

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
