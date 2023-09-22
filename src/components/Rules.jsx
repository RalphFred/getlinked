import rules from "../assets/rules.png";
import ParallaxImage from "./ParallaxIage";

export default function Rules() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 lg:px-24 flex flex-col-reverse lg:flex-row lg:items-center">
      <div className="text-center lg:text-left lg:w-2/4 lg:px-12">
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
          Rules and <br />{" "}
          <span className="text-lighter-purple">Guidelines</span>{" "}
        </h2>

        <p className="font-montserrat text-lg lg:text-xl">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding genius,
          a design maverick, or a concept wizard, you&apos;ll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
      <div className="pb-10 lg:pb-0 lg:w-2/4 lg:px-12">
        <ParallaxImage src={rules}/>
      </div>
    </div>
  );
}
