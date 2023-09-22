import { useState, useEffect } from "react";

import manVR from "../assets/manVR.png";
import chain from "../assets/chain.png";
import flare from "../assets/flare.svg";
import light from "../assets/light.svg";

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
    <div className="px-6 py-6 lg:py-6 lg:px-24 text-white bg-dark-purple overflow-hidden">
      <div className="w-full h-[10vh] lg:h-[15vh]"></div>
      <div className="font-montserrat font-semibold text-lg lg:text-2xl text-center mb-4 lg:mb-8 lg:text-right" data-aos="fade-left" data-aos-duration="2500">
        Igniting a Revolution in HR Innovation
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center ">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-2/4">
          <p className="font-clash font-extrabold text-3xl lg:text-6xl text-center lg:text-left">
            getlinkedTech
          </p>
          <p className="font-clash font-extrabold text-3xl lg:text-6xl flex justify-center lg:justify-start items-center mb-6">
            Hackathon <span className="text-lighter-purple">1.0</span>{" "}
            <img src={chain} alt="chain icon" className="w-12 lg:w-24" />
          </p>

          <p className="font-montserrat text-center lg:text-left text-xl mb-3">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
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
          <img src={flare} className="absolute -top-[80px] right-0" />
          <img
            src={light}
            className="absolute top-0 -right-[20px]  w-[300px] lg:w-[550px] opacity-60 rotate-me"
          />
        </div>
      </div>
    </div>
  );
}
