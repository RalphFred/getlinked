import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setActive((active) => !active);

    console.log(active);
  };

  return (
    <div className="w-full text-white p-6 lg:py-10 md:px-24 fixed z-[10] backdrop-blur-lg">
      <div className="flex items-center justify-between ">
        {/*------------------------------ LOGO -----------------------------*/}
        <div className="text-2xl lg:text-3xl font-extrabold font-clash z-[20]">
          <Link to="/">
            get<span className="text-lighter-purple">linked</span>
          </Link>
        </div>

        {/* --------------------------- Desktop Navigation Bar-------------------------- */}
        <div className="hidden xl:flex items-center text-lg font-montserrat font-bold">
          <div className="mx-3 p-2">Timeline</div>
          <div className="mx-3 p-2">Overview</div>
          <a href="#FAQ"><div className="mx-3 p-2">FAQs</div></a>
          <Link to="/contact">
            <div
              className={`mx-3 p-2 cursor-pointer hover:text-light-purple ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </div>
          </Link>

          <Link to="/register">
            <button
              className={`px-12 py-3 ml-24 rounded-xl background-gradient ${
                location.pathname === "/register"
                  ? "active-btn border-2 border-light-purple"
                  : ""
              }`}
            >
              Register
            </button>
          </Link>
        </div>

        <div
          className="flex flex-col justify-around xl:hidden w-10 h-10 absolute right-6 md:right-24 z-[20]"
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

      {/* ------------------------------------ Mobile Nav ------------------------------- */}
      <div
        className={`flex items-center justify-center fixed z-10 top-0 left-0 h-screen w-screen bg-dark-purple ease-linear duration-500 ${
          active ? "" : " translate-y-[-100%]"
        }`}
      >
        <div className="text-white text-3xl text-center font-montserrat font-semibold">
          <div className="my-4 p-2">Timeline</div>
          <div className="my-4 p-2">Overview</div>
          <div className="my-4 p-2">FAQs</div>
          <Link to="/contact">
            <div className="my-4 p-2" onClick={handleClick}>Contact</div>
          </Link>

          <Link to="/register">
            <button className="my-4 px-10 py-5 rounded-xl w-[200px] background-gradient" onClick={handleClick}>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
