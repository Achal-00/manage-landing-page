import Footer from "./Footer/Footer";

export default function AsideSection() {
  return (
    <div>
      <div className="bg-bright-red text-center flex flex-col gap-[2em] px-[5%] py-[20%] relative landscape:flex-row landscape:justify-between landscape:items-center landscape:px-[10%] landscape:py-[5%] landscape:text-left overflow-hidden">
        <h1 className="text-very-light-grey text-[250%] font-bold leading-[1.2em]">
          Simplify how
          <br className="landscape:hidden" /> your team
          <br className="portrait:hidden" /> works
          <br className="landscape:hidden" /> today.
        </h1>
        <div>
          <button className="bg-very-light-grey text-bright-red py-[1em] px-[2.5em] rounded-full mx-auto font-medium landscape:text-[80%] w-[12em] hover:text-dark-greyish-blue shadow-lg relative z-10">
            Get Started
          </button>
        </div>
        <img
          src="bg-simplify-section-mobile.svg"
          alt=""
          className="absolute left-0 top-1/2 -translate-y-1/2 landscape:hidden"
        />
        <img
          src="bg-simplify-section-desktop.svg"
          alt=""
          className="w-[100em] absolute left-[70%] -translate-x-1/2 top-1/4 -translate-y-1/2 portrait:hidden"
        />
      </div>
      <div className="bg-very-dark-blue px-[5%] py-[10%] landscape:px-[10%] landscape:py-[5%]">
        <Footer />
      </div>
    </div>
  );
}
