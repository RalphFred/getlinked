import partners from '../assets/partners.png'

export default function Partners() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-16 lg:px-24">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
          Partners and Sponsors
        </h2>
        <p className="font-montserrat text-lg mb-6 max-w-[700px] text-center">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>

      <div className='mt-4'>
        <img src={partners} alt="" />
      </div>
    </div>
  );
}
