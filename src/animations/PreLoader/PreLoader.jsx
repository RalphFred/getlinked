"use cleint";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold text-white opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[32px]">
        <span className="font-clash text-light-pink">Innovation,</span>
        <span className="font-clash text-lighter-purple">Competition,</span>
        <span className="font-clash text-light-purple">Technology.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
