import { useState } from "react";
import Frequent from "../assets/FAQ.png";
import { questions } from "../constants";

import ParallaxImage from "./ParallaxIage";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 lg:px-24 flex flex-col lg:flex-row">
      <div className="text-center lg:text-left lg:w-2/4 lg:px-12">
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
          Frequently Asked <br />
          <span className="text-lighter-purple">Questions</span>{" "}
        </h2>

        <p className="font-montserrat mb-6">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>

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
      <div className="pb-10 lg:pb-0 lg:w-2/4 lg:px-12">
        <ParallaxImage src={Frequent}/>
      </div>
    </div>
  );
}
