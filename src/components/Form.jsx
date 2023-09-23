import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../components/Input";

import flare from "../assets/flare.svg";
import star from "../assets/star.svg";
import pustar from "../assets/pustar.svg";
import pistar from "../assets/pistar.svg";
import ig from "../assets/ig.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";

const schema = yup
  .object({
    first_name: yup.string().required("First Name is a requited field"),
    phone_number: yup.string().required("Phone number is a required field"),
    email: yup
      .string()
      .required("Email is a required field")
      .email("Email is not valid"),
    message: yup.string().required("Message is a required field"),
  })
  .required();

export default function Form() {
  const baseUrl = "https://backend.getlinked.ai";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Send the form data as JSON
    };

    fetch(`${baseUrl}/hackathon/contact-form`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // Handle the response from the backend, e.g., show a success message
        console.log(result);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
  };

  const onSubmit = (data) => {
    submitForm(data);
    reset();
  };

  return (
    <div className="h-screen bg-dark-purple text-white flex items-center overflow-hidden relative">
      <img
          src={flare}
          className="absolute judging-flare-animate  rotate-180 opacity-40"
        />
      <div className="mt-[80px] lg:mt-[100px] p-12 lg:py-8 md:px-24 w-full flex justify-around flex-col lg:flex-row">
        <div className="w-full lg:w-2/5 hidden lg:block relative">
        <div className="pulse-effect absolute top-[200px] left-[400px]">
          <img src={star} className="circle"></img>
          <img src={pustar} className="circle"></img>
          <img src={pustar} className="circle"></img>
          <img src={pistar} className="circle"></img>
        </div>
          <h2 className="text-2xl lg:text-4xl font-extrabold font-clash mb-6 text-lighter-purple">
            Get in touch
          </h2>
          <p className="font-montserrat text-lg mb-6">Contact Information</p>
          <p className="font-montserrat text-lg mb-6">
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </p>
          <p className="font-montserrat text-lg mb-6">Call Us : 07067981819</p>
          <p className="font-montserrat text-lg mb-6">
            we are open from <br /> Monday-Friday 08:00am - 05:00pm
          </p>

          <div>
            <h3 className="font-montserrat text-lg mb-2 font-bold text-lighter-purple">
              Share On
            </h3>
            <div className="flex">
              <img src={ig} />
              <img src={twitter} className="ml-3" />
              <img src={facebook} className="ml-3" />
              <img src={linkedin} className="ml-3" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5  backdrop-blur">
          <h3 className="font-clash text-2xl md:text-3xl lg:text-2xl text-lighter-purple font-extrabold mb-8">
            Questions or need assistance? <br />
            Let us know about it!
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              label="First Name"
              type="text"
              placeholder="First Name"
              errorMessage={errors.first_name?.message}
              register={{ ...register("first_name") }}
            />

            <Input
              id="phone_number"
              label="Phone Number"
              type="text"
              placeholder="Phone Number"
              errorMessage={errors.phone_number?.message}
              register={{ ...register("phone_number") }}
            />

            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="example@example.com"
              errorMessage={errors.email?.message}
              register={{ ...register("email") }}
            />

            <div className="flex flex-col mb-2 relative h-[175px]">
              <label className="font-montserrat text-xs lg:text-sm bg-dark-purple px-1 mb-1 absolute -top-2 left-2">
                Message
              </label>
              <textarea
                name="message"
                id="Message"
                cols="30"
                rows="10"
                {...register("message")}
                className="border w-full h-[150px] p-2 mb-1 text-base lg:text-lg rounded bg-transparent font focus:outline-none focus:ring-1 border-lighter-purple"
              ></textarea>
              <span className="text-red-500 text-sm font">
                {errors.message?.message}
              </span>
            </div>

            <input
              type="submit"
              className="px-12 py-3 rounded-xl text-xl background-gradient font-semibold font-montserrat w-full lg:w-[200px]"
            />
          </form>
          <div className="mt-8 flex lg:hidden flex-col items-center">
            <h3 className="font-montserrat text-lg mb-2 font-bold text-lighter-purple">
              Share On
            </h3>
            <div className="flex">
              <img src={ig} />
              <img src={twitter} className="ml-3" />
              <img src={facebook} className="ml-3" />
              <img src={linkedin} className="ml-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
