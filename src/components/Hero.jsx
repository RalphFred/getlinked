import { useState, useEffect } from "react";

import manVR from "../assets/manVR.png";
import chain from "../assets/chain.png";
import flare from "../assets/flare.svg";
import light from "../assets/light.svg";
import fire from "../assets/fire.png";
import bulb from "../assets/bulb.png";
import curve from "../assets/curve.svg";
import star from "../assets/star.svg";
import pustar from "../assets/pustar.svg";

import AnimatedTitle from "./AnimatedTitle"
import Typewriter from "./TypewriterEffect"

export default function Hero() {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const nextMonday = new Date();

    // Calculate the days remaining until next Monday
    const daysUntilNextMonday = (1 + 7 - now.getDay()) % 7;

    // Set the next Monday at 11:59 PM
    nextMonday.setDate(now.getDate() + daysUntilNextMonday);
    nextMonday.setHours(23, 59, 0, 0);

    // Calculate the time remaining in milliseconds
    const timeRemaining = Math.max(nextMonday - now, 0);

    // Convert time remaining to hours, minutes, and seconds
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[80px] lg:h-[132px] bg-dark-purple relative"></div>
      <div className="px-6 py-6 lg:py-6 md:px-24 text-white bg-dark-purple overflow-hidden relative">
        <img
          src={flare}
          className="absolute -top-[180px] left-0 rotate-180 w-[800px] opacity-50"
        />
        <div
          className="font-montserrat font-semibold text-lg lg:text-2xl text-center mb-4 lg:mb-8 lg:text-right relative"
          data-os="fade-left"
          data-aos-duration="2500"
        >
          <Typewriter />
          <img
            src={curve}
            alt="curve"
            className="absolute right-0 w-[150px] lg:w-[180px] block md:hidden lg:block"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center pt-12 lg:pt-6">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-2/4">
            <div className="pulse-effect absolute top-20 left-[200px]">
              <img src={star} className="circle"></img>
              <img src={pustar} className="circle"></img>
              <img src={star} className="circle"></img>
              <img src={star} className="circle"></img>
            </div>

            <div className="pulse-effect absolute bottom-[200px] left-[600px]">
              <img src={star} className="circle"></img>
              <img src={star} className="circle"></img>
              <img src={star} className="circle"></img>
              <img src={star} className="circle"></img>
            </div>
            <p className="font-clash font-extrabold text-3xl lg:text-6xl text-center lg:text-left relative">
              <AnimatedTitle text="getLinkedTech"/>
              <img
                src={bulb}
                alt="bulb"
                className="w-8 lg:w-14 absolute lg:-top-[60px] -top-[36px] lg:right-[20px] right-[12px]"
              />
            </p>
            <p className="font-clash font-extrabold text-3xl lg:text-6xl flex justify-center lg:justify-start items-center mb-6">
              <AnimatedTitle text="Hackathon"/> <span className="text-lighter-purple"><AnimatedTitle text="1.0"/></span>{" "}
              <img src={chain} alt="chain icon" className="w-12 lg:w-24" />
              <img src={fire} alt="fire icon" className="w-10 lg:w-20" />
            </p>

            <p className="font-montserrat text-center lg:text-left text-xl mb-3">
              <AnimatedTitle text="Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize" />
              
            </p>

            <button className="px-12 py-3 rounded-xl text-xl background-gradient font-semibold my-6 font-montserrat w-[200px]">
              Register
            </button>

            <div className="text-4xl text-center lg:text-left font-unica">
              {String(countdown.hours).padStart(2, "0")}
              <span className="text-sm">H</span>{" "}
              {String(countdown.minutes).padStart(2, "0")}
              <span className="text-sm">M</span>{" "}
              {String(countdown.seconds).padStart(2, "0")}
              <span className="text-sm">S</span>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 relative w-full lg:w-2/4">
            <img src={manVR} alt="man wearing VR glasses" className="w-full" />
            <img src={flare} className="absolute top-[30px] -right-[80px] rotate-90" />
            <img
              src={light}
              className="absolute top-0 -right-[20px] w-[300px] md:w-[550px] opacity-40 rotate-me"
            />
            <div className="pulse-effect absolute top-[300px] left-8">
              <img src={star} className="circle"></img>
              <img src={star} className="circle"></img>
              <img src={star} className="circle"></img>
              <img src={star} className="circle"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
