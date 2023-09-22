import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../components/Input";

import ig from "../assets/ig.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";

const schema = yup
  .object({
    firstName: yup.string().required("First Name is a requited field"),
    email: yup
      .string()
      .required("Email is a required field")
      .email("Email is not valid"),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className='w-full h-[10vh] lg:h-[15vh] bg-dark-purple'></div>
      <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 lg:px-24 w-full h-[90vh] lg:h-[85vh] flex justify-around flex-col lg:flex-row">
        <div className="w-full lg:w-2/5 hidden lg:block">
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
        <div className="w-full lg:w-2/5">
          <h3 className="font-clash text-2xl text-lighter-purple font-extrabold mb-8">
            Questions or need assistance? <br />
            Let us know about it!
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              label="First Name"
              type="text"
              placeholder="First Name"
              errorMessage={errors.firstName?.message}
              register={{ ...register("firstName") }}
            />

            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="example@example.com"
              errorMessage={errors.email?.message}
              register={{ ...register("email") }}
            />

            <div className="flex flex-col mb-4">
              <label className="font text-xl mb-2">Message</label>
              <textarea
                name="message"
                id="Message"
                cols="30"
                rows="10"
                {...register("message")}
                className="border w-full h-[200px] p-2 rounded bg-transparent font focus:outline-none focus:ring-1 focus:border-lighter-purple"
              ></textarea>
            </div>

            <input
              type="submit"
              className="px-12 py-3 rounded-xl text-xl background-gradient font-semibold mt-4 font-montserrat w-full lg:w-[200px]"
            />
          </form>
          <div className="mt-8 flex flex-col items-center">
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
