import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((active) => !active);

    console.log(active);
  };

  return (
    <div>
      <div className="flex items-center justify-between w-full bg-dark-purple text-white p-6 lg:py-6 lg:px-24 relative border-b border-gray-800">

        {/*------------------------------ LOGO -----------------------------*/}
        <div className="text-2xl lg:text-3xl font-extrabold font-clash z-[20]">
          get<span className="text-lighter-purple">linked</span>
        </div>


        {/* --------------------------- Desktop Navigation Bar-------------------------- */}
        <div className="hidden lg:flex items-center text-lg font-montserrat font-semibold">
          <div className="mx-2 p-2">Timeline</div>
          <div className="mx-2 p-2">Overview</div>
          <div className="mx-2 p-2">FAQs</div>
          <div className="mx-2 p-2">Contact</div>

          <button className="px-12 py-3 ml-24 rounded-xl background-gradient">
            Register
          </button>
        </div>

        <div
          className="flex flex-col justify-around lg:hidden w-10 h-10 absolute right-6 z-[20]"
          onClick={handleClick}
        >
          <span
            className={`block w-6 rounded-lg h-[4px] bg-white ease-in duration-300 ${
              active
                ? "rotate-45 translate-y-[7px] translate-x-[2px]"
                : "rotate-0"
            } `}
          ></span>
          <span
            className={`block w-10 rounded-lg h-[4px] bg-white ease-in duration-300 ${
              active ? "-rotate-45 " : "rotate-0"
            }`}
          ></span>
          <span
            className={`block w-6 rounded-lg h-[4px] bg-white ml-5 ease-in duration-300 ${
              active
                ? "rotate-45 -translate-y-[7px] -translate-x-[4px]"
                : "rotate-0"
            } `}
          ></span>
        </div>
      </div>

      <div
        className={`flex items-center justify-center fixed z-10 top-0 left-0 h-screen w-screen bg-dark-purple ease-linear duration-500 ${
          active ? "" : " translate-y-[-100%]"
        }`}
      >
        <div className="text-white text-3xl text-center font-montserrat font-semibold">
          <div className="my-4 p-2">Timeline</div>
          <div className="my-4 p-2">Overview</div>
          <div className="my-4 p-2">FAQs</div>
          <div className="my-4 p-2">Contact</div>

          <button className="my-4 px-10 py-5 rounded-xl w-[200px] background-gradient">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
