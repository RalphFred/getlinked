import manVR from '../assets/manVR.png';
import chain from '../assets/chain.png';
// import flare from '../assets/flare.png';

export default function Hero() {
  return (
    <div className="px-6 py-12 lg:py-8 lg:px-24 text-white bg-dark-purple">
      <div className="font-montserrat font-semibold text-lg lg:text-2xl text-center mb-4 lg:mb-8 lg:text-right">Igniting a Revolution in HR Innovation</div>

      {/* <img src={flare} className='absolute -z-1' /> */}

      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className='flex flex-col items-center lg:items-start'>
          <p className="font-clash font-extrabold text-3xl lg:text-6xl text-center lg:text-left">getlinkedTech</p>
          <p className="font-clash font-extrabold text-3xl lg:text-6xl flex justify-center lg:justify-start items-center mb-6">
            Hackathon <span className="text-lighter-purple">1.0</span> <img src={chain} alt="chain icon" className='w-12 lg:w-24'/>
          </p>

          <p className='font-montserrat text-center lg:text-left text-xl mb-3'>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <button className="px-12 py-3 rounded-xl text-xl background-gradient font-semibold my-6 font-montserrat w-[200px]">
            Register
          </button>

          <p className="text-4xl text-center lg:text-left font-unica">
            00<span className='text-sm'>H</span> 00<span className='text-sm'>M</span> 00<span className='text-sm'>S</span>
          </p>
        </div>

        <div className="mt-12 lg:mt-0">
          <img src={manVR} alt="man wearing VR glasses" className="w-full lg:w-[700px]" />
        </div>
      </div>
    </div>
  );
}
