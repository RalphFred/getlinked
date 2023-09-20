import { useState } from "react";
import Frequent from "../assets/FAQ.png";
import { questions } from "../constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 lg:px-24 flex flex-col lg:flex-row lg:items-center">
      <div className="text-center lg:text-left lg:w-2/4 lg:px-12">
        <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6">
          Frequently Asked <br />{" "}
          <span className="text-lighter-purple">Questions</span>{" "}
        </h2>

        {questions.map((question, index) => (
          <div key={index}>
            <div
              onClick={() => toggleQuestion(index)}
              className={`question ${openIndex === index ? "open" : ""}`}
            >
              {question.question}
            </div>
            {openIndex === index && (
              <div className="answer text-green-600">{question.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="pb-10 lg:pb-0 lg:w-2/4 lg:px-12">
        <img src={Frequent} alt="Image" className="w-full" />
      </div>
    </div>
  );
}
