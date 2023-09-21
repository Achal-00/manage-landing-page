import Slider from "./Slider";

export default function TestimonialSection() {
  return (
    <div className="grid gap-[5em] relative z-10">
      <h1 className="text-dark-blue text-[200%] font-bold text-center">
        What they've said
      </h1>
      <Slider />
      <button className="bg-bright-red text-very-light-grey py-[1em] px-[2.5em] rounded-full mx-auto font-medium landscape:text-[80%] w-[12em] hover:opacity-80 shadow-lg shadow-red-200">
        Get Started
      </button>
    </div>
  );
}
