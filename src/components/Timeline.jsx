import line from "../assets/line.png";
import No1 from "../assets/No1.png";
import No2 from "../assets/No2.png";
import No3 from "../assets/No3.png";
import No4 from "../assets/No4.png";
import No5 from "../assets/No5.png";
import No6 from "../assets/No6.png";

export default function Timeline() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-16 lg:px-24">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
          Timeline
        </h2>
        <p className="font-montserrat text-lg mb-6 max-w-[450px] text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        {/* -------------------------- Mobile Timeline---------------------- */}
        <div className="block lg:hidden">
          <div className="mb-6">
            <div>
              <div className="ml-6 pl-10 border-l-4 border-lighter-purple mb-4">
                <h3 className="font-semibold font-montserrat text-lighter-purple">
                  Hackathon Announcement
                </h3>
                <p className="font-montserrat my-2">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={No1} className="w-12" />
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5">
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="mb-6">
            <div>
              <div className="ml-6 pl-10 border-l-4 border-lighter-purple mb-4">
                <h3 className="font-semibold font-montserrat text-lighter-purple">
                  Teams Registration begins
                </h3>
                <p className="font-montserrat my-2">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={No2} className="w-12" />
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5">
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="mb-6">
            <div>
              <div className="ml-6 pl-10 border-l-4 border-lighter-purple mb-4">
                <h3 className="font-semibold font-montserrat text-lighter-purple">
                  Teams Registration ends
                </h3>
                <p className="font-montserrat my-2">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={No3} className="w-12" />
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5">
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="mb-6">
            <div>
              <div className="ml-6 pl-10 border-l-4 border-lighter-purple mb-4">
                <h3 className="font-semibold font-montserrat text-lighter-purple">
                  Announcement of the accepted teams and ideas
                </h3>
                <p className="font-montserrat my-2">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={No4} className="w-12" />
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5">
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="mb-6">
            <div>
              <div className="ml-6 pl-10 border-l-4 border-lighter-purple mb-4">
                <h3 className="font-semibold font-montserrat text-lighter-purple">
                  Getlinked Hackathon 1.0 Offically Begins
                </h3>
                <p className="font-montserrat my-2">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={No5} className="w-12" />
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5">
                November 18, 2023
              </h3>
            </div>
          </div>

          <div className="mb-6">
            <div>
              <div className="ml-6 pl-10 border-l-4 border-lighter-purple mb-4">
                <h3 className="font-semibold font-montserrat text-lighter-purple">
                  Demo Day
                </h3>
                <p className="font-montserrat my-2">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={No6} className="w-12" />
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5">
                November 18, 2023
              </h3>
            </div>
          </div>
        </div>

        {/* ------------------------- Desktop Timeline ------------------- */}
        <div className="hidden lg:block"> 
          <div className="flex justify-center h-[96px] relative">
            <img src={line} className="absolute top-0 h-[120px]"/>
          </div>
          <div className="flex items-center">
            <div className="w-2/5 text-right">
              <h3 className="font-semibold font-montserrat text-lighter-purple text-xl">
                Hackathon Announcement
              </h3>
              <p className="font-montserrat mt-2 text-lg">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="w-1/5 flex justify-center">
              <img src={No1} />
            </div>
            <div className="w-2/5">
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5 text-xl">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="flex justify-center h-[96px] relative">
            <img src={line} className="absolute top-0 h-[120px]"/>
          </div>
          <div className="flex items-center">
            <div className="w-2/5 text-right">
              <h3 className="font-semibold font-montserrat text-lighter-purple text-xl">
                Teams Registration begins
              </h3>
              <p className="font-montserrat mt-2 text-lg">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <div className="w-1/5 flex justify-center">
              <img src={No2} />
            </div>
            <div className="w-2/5">
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5 text-xl">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="flex justify-center h-[96px] relative">
            <img src={line} className="absolute top-0 h-[90px]"/>
          </div>
          <div className="flex items-center">
            <div className="w-2/5 text-right">
              <h3 className="font-semibold font-montserrat text-lighter-purple text-xl">
                Teams Registration ends
              </h3>
              <p className="font-montserrat my-2 text-lg">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="w-1/5 flex justify-center">
              <img src={No3} />
            </div>
            <div className="w-2/5">
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5 text-xl">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="flex justify-center h-[96px] relative">
            <img src={line} className="absolute top-0 h-[100px]"/>
          </div>
          <div className="flex items-center">
            <div className="w-2/5 text-right">
              <h3 className="font-semibold font-montserrat text-lighter-purple text-xl">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="font-montserrat mt-2 text-lg">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
            <div className="w-1/5 flex justify-center">
              <img src={No4} />
            </div>
            <div className="w-2/5">
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5 text-xl">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="flex justify-center h-[96px] relative">
            <img src={line} className="absolute top-0 h-[100px]"/>
          </div>
          <div className="flex items-center">
            <div className="w-2/5 text-right">
              <h3 className="font-semibold font-montserrat text-lighter-purple text-xl">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="font-montserrat my-2 text-lg">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="w-1/5 flex justify-center">
              <img src={No5} />
            </div>
            <div className="w-2/5">
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5 text-xl">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="flex justify-center h-[96px] relative">
            <img src={line} className="absolute top-0 h-[120px]"/>
          </div>
          <div className="flex items-center">
            <div className="w-2/5 text-right">
              <h3 className="font-semibold font-montserrat text-lighter-purple text-xl">
                Demo Day
              </h3>
              <p className="font-montserrat my-2 text-lg">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
            <div className="w-1/5 flex justify-center">
              <img src={No6} />
            </div>
            <div className="w-2/5">
              <h3 className="font-semibold font-montserrat text-lighter-purple ml-5 text-xl">
                November 18, 2023
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
