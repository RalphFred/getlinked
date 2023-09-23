import judging from "../assets/theBigIdea.png";
import ParallaxImage from "./ParallaxImage";
import star from "../assets/star.svg";
import pustar from "../assets/pustar.svg";
import pistar from "../assets/pistar.svg";
import arrow from "../assets/arrow.svg";

import AnimatedTitle from "./AnimatedTitle";

export default function Intro() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 md:px-24 flex flex-col lg:flex-row lg:items-center">
      <div className="pb-10 lg:pb-0 lg:w-2/4 lg:px-12 relative">
          <ParallaxImage src={judging}/>
        <div className="pulse-effect absolute top-[250px] left-[20px]">
          <img src={pistar} className="circle"></img>
          <img src={pistar} className="circle"></img>
          <img src={pistar} className="circle"></img>
          <img src={pistar} className="circle"></img>
        </div>

        <img src={arrow} alt="arrow" className="shakeme absolute bottom-12 right-20"/>
      </div>
      <div className="text-center lg:text-left lg:w-2/4 lg:px-12 relative">
        <div className="pulse-effect absolute -top-20 right-[200px]">
          <img src={star} className="circle"></img>
          <img src={pustar} className="circle"></img>
          <img src={star} className="circle"></img>
          <img src={star} className="circle"></img>
        </div>
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
           <AnimatedTitle text="Introduction to getlinked"/>
          <span className="text-lighter-purple"> <AnimatedTitle text="tech Hackathon 1.0"/> </span>{" "}
        </h2>

        <p className="font-montserrat text-lg lg:text-xl"> <AnimatedTitle text="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether youre a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"/>
          
        </p>
      </div>
    </div>
  );
}
