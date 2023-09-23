import partners from "../assets/partners.png";
import AnimatedTitle from "./AnimatedTitle";
import ParallaxImage from "./ParallaxImage";

export default function Partners() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-16 md:px-24">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
          <AnimatedTitle text="Partners and Sponsors" />
        </h2>
        <p className="font-montserrat text-lg mb-6 max-w-[700px] text-center">
          <AnimatedTitle
            text="Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors"
          />
        </p>
      </div>

      <div className="mt-4">
        <img src={partners} alt="image" className="w-full"/>
      </div>
    </div>
  );
}
