import Content from "./Content";
import Navbar from "./Navbar";

export default function LandingSection() {
  return (
    <section className="min-h-[100dvh] grid grid-rows-[0.1fr_1fr] relative overflow-hidden">
      <Navbar />
      <Content />
      <img
        src="bg-tablet-pattern.svg"
        alt=""
        className="w-[50em] absolute left-[70%] -translate-x-1/2 top-[20%] -translate-y-1/2 landscape:left-[85%] landscape:top-[30%]"
      />
    </section>
  );
}
