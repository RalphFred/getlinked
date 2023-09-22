import judging from "../assets/judging.png";
import ParallaxImage from "./ParallaxIage";

export default function Judging() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 lg:px-24 flex flex-col lg:flex-row lg:items-center">
      <div className="pb-10 lg:pb-0 lg:w-2/4 lg:px-12">
        <ParallaxImage src={judging} />
      </div>
      <div className="text-center lg:text-left lg:w-2/4 lg:px-12">
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
          Judging Criteria
          <br /> <span className="text-lighter-purple">
            Key Attributes
          </span>{" "}
        </h2>

        <p className="font-montserrat text-base lg:text-base mb-4">
          <span className="text-light-pink">Innovation and Creativity</span>:
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>

        <p className="font-montserrat text-base lg:text-base mb-4">
          <span className="text-light-pink">Functionality</span>: Assess how
          well the solution works. Does it perform its intended functions
          effectively and without major issues? Judges would consider the
          completeness and robustness of the solution.
        </p>

        <p className="font-montserrat text-base lg:text-base mb-4">
          <span className="text-light-pink">Impact and Relevance</span>:
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>

        <p className="font-montserrat text-base lg:text-base mb-4">
          <span className="text-light-pink">Technical Complexity</span>:
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>

        <p className="font-montserrat text-base lg:text-base mb-4">
          <span className="text-light-pink">Adherence to Hackathon Rules</span>:
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>

        <button className="px-12 py-3 rounded-xl text-base background-gradient font-semibold my-6 font-montserrat w-[200px]">
          Read More
        </button>
      </div>
    </div>
  );
}
