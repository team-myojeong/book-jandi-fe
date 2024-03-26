import { Header } from "@/components/layout/Header";
import WeeklyPopularPollList from "./components/WeeklyPopularPollList";
import NewestPollList from "./components/NewestPollList";

export default function Main() {
  return (
    <>
      <Header />
      <WeeklyPopularPollList />
      <NewestPollList />
    </>
  );
}
