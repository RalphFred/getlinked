import judging from "../assets/judging.png";
import ParallaxImage from "./ParallaxImage";

import flare from "../assets/flare.svg";
import star from "../assets/star.svg";
import pustar from "../assets/pustar.svg";
import pistar from "../assets/pistar.svg";

import AnimatedTitle from "./AnimatedTitle";

export default function Judging() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 md:px-24 flex flex-col lg:flex-row lg:items-center">
      <div className="pb-10 lg:pb-0 lg:w-2/4 lg:px-12 relative">
        <ParallaxImage src={judging} />
        <div className="pulse-effect absolute top-0 right-[200px]">
          <img src={star} className="circle"></img>
          <img src={pustar} className="circle"></img>
          <img src={pustar} className="circle"></img>
          <img src={pistar} className="circle"></img>
        </div>
      </div>
      <div className="text-center lg:text-left lg:w-2/4 lg:px-12 relative">
      <img
          src={flare}
          className="absolute judging-flare-animate  rotate-180 w-[1200px] opacity-40"
        />
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
           <AnimatedTitle text="Judging Criteria" />
          <span className="text-lighter-purple">
             <AnimatedTitle text="Key Attributes" />
          </span>
        </h2>

        <p className="font-montserrat text-base lg:text-base mb-2">
          <span className="text-light-pink"> <AnimatedTitle text="Innovation and Creativity:" className="inline"/> </span>
           <AnimatedTitle text="Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features." />
        </p>

        <p className="font-montserrat text-base lg:text-base mb-2">
          <span className="text-light-pink"><AnimatedTitle text="Functionality:" /></span> <AnimatedTitle text="Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider thecompleteness and robustness of the solution." /> 
        </p>

        <p className="font-montserrat text-base lg:text-base mb-2">
          <span className="text-light-pink"><AnimatedTitle text="Impact and Relevance:" /></span><AnimatedTitle text="Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits." />
        </p>

        <p className="font-montserrat text-base lg:text-base mb-2">
          <span className="text-light-pink"><AnimatedTitle text="Technical Complexity:" /></span>
          <AnimatedTitle text="Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution." />
        </p>

        <p className="font-montserrat text-base lg:text-base mb-2">
          <span className="text-light-pink"><AnimatedTitle text="Adherence to Hackathon Rules:" /></span><AnimatedTitle text="Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements." />
        </p>

        <button className="px-12 py-3 rounded-xl text-base background-gradient font-semibold my-6 font-montserrat w-[200px]">
          Read More
        </button>
      </div>
    </div>
  );
}
