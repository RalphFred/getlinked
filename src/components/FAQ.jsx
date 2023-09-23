import { useState } from "react";
import Frequent from "../assets/FAQ.png";
import { questions } from "../constants";

import ParallaxImage from "./ParallaxImage";

import AnimatedTitle from "./AnimatedTitle";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 md:px-24 flex flex-col lg:flex-row" id="FAQ">
      <div className="text-center lg:text-left lg:w-2/4 lg:px-12">
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
           <AnimatedTitle text="Frequently Asked"/>
          <span className="text-lighter-purple"><AnimatedTitle text="Questions"/></span>
        </h2>

        <p className="font-montserrat mb-6">
        <AnimatedTitle text="We got answers to the questions that you might want to ask about getlinked Hackathon 1.0"/>
          
        </p>

        <div data-aos="fade-right" data-aos-duration="3000">
        {questions.map((question, index) => (
          <div
            key={index}
            className="text-left border-b-2 border-lighter-purple py-2 font-montserrat "
          >
            <div className="flex justify-between items-center">
              <div
                className={`font-extrabold text-lg ${
                  openIndex === index ? "open" : ""
                }`}
              >
                {question.question}
              </div>
              <div
                className={`text-lighter-purple text-5xl cursor-pointer transition ease-in-out duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
                onClick={() => toggleQuestion(index)}
              >
                +
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-4 text-base ">{question.answer}</div>
            )}
          </div>
        ))}
        </div>
      </div>
      <div className="pb-10 lg:pb-0 lg:w-2/4 lg:px-12">
        <ParallaxImage src={Frequent}/>
      </div>
    </div>
  );
}
