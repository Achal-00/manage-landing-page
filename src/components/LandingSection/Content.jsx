export default function Content() {
  return (
    <div className="px-[5%] grid portrait:grid-rows-2 landscape:grid-cols-2 landscape:px-[10%] relative z-10">
      <div className="self-center">
        <img src="illustration-intro.svg" alt="" className="w-full" />
      </div>
      <div className="text-center self-center grid gap-[1em] landscape:col-start-1 landscape:col-end-2 landscape:row-start-1 landscape:row-end-2 landscape:text-left landscape:gap-[2em]">
        <h1 className="text-[300%] font-bold leading-[1.3em] text-dark-blue">
          Bring everyone
          <br />
          together to build
          <br />
          better products.
        </h1>
        <p className="text-dark-greyish-blue landscape:pr-[30%]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="bg-bright-red text-very-light-grey py-[1em] px-[2.5em] rounded-full mx-auto font-medium landscape:text-[80%] w-[12em] landscape:mx-0 hover:opacity-80 shadow-lg shadow-red-200">
          Get Started
        </button>
      </div>
    </div>
  );
}
