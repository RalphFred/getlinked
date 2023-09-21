import privacy from "../assets/privacy.png";
import check from "../assets/check.svg";

export default function Privacy() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 lg:px-24 flex flex-col lg:flex-row items-center">
      <div className="text-center lg:text-left lg:w-2/4 py-8 lg:px-12">
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
          Privacy Policy and <br />
          <span className="text-lighter-purple">Terms</span>{" "}
        </h2>

        <p className="font-montserrat mb-6 text-sm">
          Last updated on September 12, 2023
        </p>

        <p className="font-montserrat mb-6">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>

        <div className="font-montserrat px-6 py-12 lg:p-12 border-2 border-light-purple rounded-xl">
          <p className="mb-8">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>

          <h3 className="font-bold text-lg text-left mb-8">
            <span className="text-light-purple text-xl">Licensing Policy</span> <br />
            Here are terms of our Standard License
          </h3>

          <ul className="mb-8 text-left">
            <li className="flex mb-4">
              <div className="mr-3 mt-1">
                <img src={check} className="w-12" />
              </div>
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </li>

            <li className="flex">
              <div className="mr-3 mt-1">
                <img src={check} className="w-12" />
              </div>
              <p>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </li>
          </ul>

          <div className="flex justify-center">
          <button className="px-12 py-3 rounded-xl text-base background-gradient font-semibold font-montserrat w-[200px]">
            Read More
          </button>
          </div>
        </div>
      </div>

      <div className="pb-10 lg:pb-0 lg:w-2/4 lg:px-12">
        <img src={privacy} alt="Image" className="w-[500px]" />
      </div>
    </div>
  );
}
