import rules from "../assets/rules.png";
import ParallaxImage from "./ParallaxImage";

import flare from "../assets/flare.svg";
import star from "../assets/star.svg";
import pustar from "../assets/pustar.svg";
import pistar from "../assets/pistar.svg";

import AnimatedTitle from "./AnimatedTitle";

export default function Rules() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 md:px-24 flex flex-col-reverse lg:flex-row lg:items-center relative overflow-hidden">
        <img
          src={flare}
          className="absolute rules-flare-animate rotate-180 opacity-40"
        />
      <div className="text-center lg:text-left lg:w-2/4 lg:px-12 relative">
      <div className="pulse-effect absolute top-0 right-[200px]">
          <img src={star} className="circle"></img>
          <img src={pustar} className="circle"></img>
          <img src={star} className="circle"></img>
          <img src={star} className="circle"></img>
        </div>
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
           <AnimatedTitle text="Rules and" />
          <span className="text-lighter-purple"><AnimatedTitle text="Guidelines" /></span>{" "}
        </h2>

        <p className="font-montserrat text-lg lg:text-xl"> <AnimatedTitle text="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!" />
          
        </p>
      </div>
      <div className="pb-10 lg:pb-0 lg:w-2/4 lg:px-12 relative">
        <ParallaxImage src={rules}/>
        <img
          src={flare}
          className="absolute -top-[100px] -right-[500px] rotate-180 opacity-40"
        />
        <div className="pulse-effect absolute bottom-[100px] left-[20px]">
          <img src={star} className="circle"></img>
          <img src={pistar} className="circle"></img>
          <img src={star} className="circle"></img>
          <img src={pistar} className="circle"></img>
        </div>
      </div>
    </div>
  );
}
