import ig from '../assets/ig.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import phone from '../assets/phone.svg';
import location from '../assets/location.svg';

export default function Footer() {
  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-16 md:px-24">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:max-w-[600px]">
          <div className="text-2xl lg:text-3xl font-extrabold font-clash mb-2">
            get<span className="text-lighter-purple">linked</span>
          </div>
          <p className="font-montserrat mb-20">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="font-montserrat flex">
            <p className="pr-3">Terms of Use</p>
            <p className="pl-3 border-l-2 border-lighter-purple">Privacy Policy</p>
          </div>
        </div>
        <ul className="font-montserrat text-lg flex flex-col justify-between py-6 lg:py-0">
          <li className="font-bold text-lighter-purple mb-3">Useful Links</li>
          <li className="mb-2 lg:mb-0">Overview</li>
          <li className="mb-2 lg:mb-0">Timeline</li>
          <li className="mb-2 lg:mb-0">FAQs</li>
          <li className="mb-2 lg:mb-0">Register</li>
          <li className="text-lighter-purple flex">
            Follow Us
            <div className='flex ml-4'>
              <img src={ig}/>
              <img src={twitter} className='ml-3'/>
              <img src={facebook} className='ml-3'/>
              <img src={linkedin} className='ml-3'/>
            </div>
          </li>
        </ul>
        <ul className="font-montserrat text-lg lg:max-w-[300px] py-6 lg:py-0">
          <li className="font-bold text-lighter-purple mb-3">Contact Us</li>
          <li className='flex items-center mb-3'>
            <img src={phone} alt="phone" className="w-5 mr-4" />
            <div>
              +234 707653444
            </div>
          </li>
          <li className='flex items-start'>
            <img src={location} alt="phone" className="w-5 mr-4 mt-1" />
            <div>
              27,Alara Street Yaba 100012 Lagos State
            </div>
          </li>
        </ul>
      </div>
      <div className="font-montserrat mt-8 lg:mt-16 text-center text-lg">All rights reserved. © getlinked Ltd.</div>
    </div>
  );
}
