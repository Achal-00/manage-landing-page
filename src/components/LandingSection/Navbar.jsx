import { useEffect, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.querySelector(".menu").classList.replace("hidden", "grid");
      document.querySelector(".menu-icon").src = "icon-close.svg";
    } else {
      document.querySelector(".menu").classList.replace("grid", "hidden");
      document.querySelector(".menu-icon").src = "icon-hamburger.svg";
    }
  }, [menu]);

  return (
    <div className="px-[5%] py-[10%] landscape:px-[10%] landscape:py-[3%] relative z-50">
      <div className="landscape:hidden flex justify-between items-center">
        <img src="logo.svg" alt="logo" />
        <img
          src="icon-hamburger.svg"
          alt="menu"
          className="menu-icon"
          onClick={() => setMenu((prev) => !prev)}
        />
        <div className="absolute bg-white w-[90%] rounded-[0.5em] shadow-2xl left-1/2 top-[200%] -translate-x-1/2 -translate-y-1/2 text-center py-[10%] grid gap-[1em] font-bold menu">
          <p>Pricing</p>
          <p>Product</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Community</p>
        </div>
      </div>
      <div className="portrait:hidden flex items-center justify-between">
        <img src="logo.svg" alt="logo" className="w-[10em]" />
        <div className="flex gap-[2em] text-dark-blue text-[90%]">
          <p className="hover:cursor-pointer hover:text-dark-greyish-blue">
            Pricing
          </p>
          <p className="hover:cursor-pointer hover:text-dark-greyish-blue">
            Product
          </p>
          <p className="hover:cursor-pointer hover:text-dark-greyish-blue">
            About Us
          </p>
          <p className="hover:cursor-pointer hover:text-dark-greyish-blue">
            Careers
          </p>
          <p className="hover:cursor-pointer hover:text-dark-greyish-blue">
            Community
          </p>
        </div>
        <button className="bg-bright-red text-very-light-grey py-[1em] px-[2.5em] rounded-full font-medium text-[80%] hover:opacity-80 shadow-lg shadow-red-200">
          Get Started
        </button>
      </div>
    </div>
  );
}
