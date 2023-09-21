import Difference from "./Difference";
import Feature from "./Feature";

export default function FeatureSection() {
  return (
    <section className="grid gap-[4em] landscape:lg:grid-cols-2 landscape:px-[10%] relative">
      <Difference />
      <Feature />
      <img
        src="bg-tablet-pattern.svg"
        alt=""
        className="w-[50em] absolute left-[110%] -translate-x-1/2 bottom-full landscape:left-0 landscape:top-[110%] landscape:-translate-y-1/2"
      />
    </section>
  );
}
