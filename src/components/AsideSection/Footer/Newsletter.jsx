import { useState } from "react";

export default function Newsletter() {
  const [mail, setMail] = useState("");

  function submitHandler() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex)) {
      document
        .querySelector(".mail-input")
        .classList.remove("border-transparent", "border-red-500");
      document.querySelector(".mail-input").classList.add("border-green-500");
      document
        .querySelector(".error-holder")
        .classList.replace("block", "hidden");
    } else {
      document
        .querySelector(".mail-input")
        .classList.remove("border-transparent", "border-green-500");
      document.querySelector(".mail-input").classList.add("border-red-500");
      document
        .querySelector(".error-holder")
        .classList.replace("hidden", "block");
    }
  }

  return (
    <div className="grid grid-cols-[0.7fr_0.3fr] col-start-1 col-end-3 landscape:col-start-4 landscape:col-end-5 landscape:row-start-1 landscape:row-end-2 self-start landscape:justify-self-end gap-[0.5em]">
      <input
        type="text"
        placeholder="Updates in your inbox..."
        className="rounded-full text-[90%] pl-[1em] border-2 border-transparent mail-input outline-none"
        onChange={(e) => setMail(e.currentTarget.value)}
      />
      <button
        onClick={submitHandler}
        className="bg-bright-red text-very-light-grey py-[1em] rounded-full mx-auto font-medium landscape:text-[80%] w-[6em] hover:opacity-80"
      >
        Go
      </button>
      <p className="text-red-500 text-[80%] pl-[1em] italic hidden error-holder">
        Please insert a valid email
      </p>
    </div>
  );
}
