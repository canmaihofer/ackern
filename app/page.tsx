import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FestivalRules from "./components/Rules";
import Anfahrt from "./components/Anfahrt";
import TimeTable from "./components/TimeTable";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FestivalRules />
      <Anfahrt />

      <TimeTable />
      <Footer />
    </main>
  );
}
