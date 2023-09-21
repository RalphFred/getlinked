import cup from '../assets/cup.png';
import rewards from '../assets/rewards.png';

export default function Intro() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 lg:px-24">

      <div className="w-full flex justify-end">
        <div className="lg:max-w-[500px] text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
            Prizes and <br />{" "}
            <span className="text-lighter-purple">Rewards</span>{" "}
          </h2>

          <p className="font-montserrat text-lg">
            Highlight of the prizes or rewards for winners and participants
          </p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-between mt-6 lg:mt-12'>
          <div className='mb-6 lg:mb-0'>
            <img src={cup} alt="prize cup" />
          </div>
          <div>
            <img src={rewards} alt="prize medals" />
          </div>
        </div>
    </div>
  );
}
