import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../components/Input";
import registerIMG from "../assets/register.png";
import hurray from "../assets/hurray.png";
import ParallaxImage from "./ParallaxImage";


import star from "../assets/star.svg";
import pustar from "../assets/pustar.svg";
import pistar from "../assets/pistar.svg";

const schema = yup
  .object({
    team_name: yup.string().required("First Name is a required field"),
    phone_number: yup.string().required("Phone number is a required field"),
    email: yup
      .string()
      .required("Email is a required field")
      .email("Email is not valid"),
    project_topic: yup.string().required("Project Topic is a required field"),
    category: yup
      .string()
      .required("category is a required field")
      .notOneOf([""], "Please select a category"),
    groupSize: yup
      .string()
      .required("Group Size is a required field")
      .notOneOf([""], "Please select a number"),
    agreeToTerms: yup.boolean().oneOf([true], "You must agree to the terms"),
  })
  .required();

export default function Regform() {
  const [categories, setCategories] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const baseUrl = "https://backend.getlinked.ai";

  useEffect(() => {
    fetch(`${baseUrl}/hackathon/categories-list`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
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

    fetch(`${baseUrl}/hackathon/registration`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // Handle the response from the backend, e.g., show a success message
        console.log(result);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
    reset();
    openModal();
  };

  const onSubmit = (data) => {
    // Call the submitForm function to send the data to the backend
    submitForm(data);
  };

  return (
    <div className="bg-dark-purple text-white h-screen flex items-center">
      {isOpenModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-montserrat backdrop-blur-xl">
          <div className="text-center px-4 py-8 lg:p-12 rounded-lg shadow-lg font w-[320px]  lg:w-[600px] flex flex-col items-center border-2 border-lighter-purple">
            <img src={hurray}/>

            <h3 className="font-bold text-xl text-center my-6">Congratulations you have successfully Registered!</h3>

            <p>
              Yes, it was easy and you did it! check your mail box for next step
            </p>

            <button className="px-12 py-3 rounded-xl text-xl background-gradient font-semibold mt-4 font-montserrat w-full lg:w-[200px]" onClick={closeModal}>
              Back
            </button>
          </div>
        </div>
      )}
      <div className="mt-[80px] lg:mt-[100px] p-12 lg:py-8 lg:px-24 w-full flex justify-around flex-col lg:flex-row items-center">
        <div className="w-2/5 hidden xl:block">
          <ParallaxImage src={registerIMG} />
        </div>
        <div className="w-full xl:w-3/5 relative">
        <div className="pulse-effect absolute top-[200px] left-[400px]">
          <img src={star} className="circle"></img>
          <img src={pustar} className="circle"></img>
          <img src={pustar} className="circle"></img>
          <img src={pistar} className="circle"></img>
        </div>
          <h2 className="font-clash text-3xl text-lighter-purple font-extrabold mb-6">
            Register
          </h2>
          <p className="font-montserrat mb-6">Be part of this movement!</p>

          <h3 className="font-montserrat text-xl mb-6">CREATE YOUR ACCOUNT</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[48%]">
                <Input
                  id="name"
                  label="Team Name"
                  type="text"
                  placeholder="John Doe"
                  customClass="w-2/5 "
                  errorMessage={errors.team_name?.message}
                  register={{ ...register("team_name") }}
                />
              </div>

              <div className="w-full lg:w-[48%]">
                <Input
                  id="phone"
                  label="Phone Number"
                  type="string"
                  placeholder="234 700 000 0000"
                  errorMessage={errors.phone_number?.message}
                  register={{ ...register("phone_number") }}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[48%]">
                <Input
                  id="email"
                  label="Email"
                  type="string"
                  placeholder="example@example.com"
                  errorMessage={errors.email?.message}
                  register={{ ...register("email") }}
                />
              </div>

              <div className="w-full lg:w-[48%]">
                <Input
                  id="project_topic"
                  label="Project Topic"
                  type="text"
                  placeholder="Enter a project topic"
                  errorMessage={errors.project_topic?.message}
                  register={{ ...register("project_topic") }}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="w-[54%] lg:w-[48%] h-[63px] lg:h-[70px] relative">
                <label className="font-montserrat text-xs lg:text-sm bg-dark-purple px-1 mb-1 absolute -top-2 left-2">
                  Category
                </label>
                <select
                  {...register("category")}
                  className="border w-full p-2 mb-1 text-base lg:text-lg rounded bg-transparent font focus:outline-none focus:ring-1 border-lighter-purple"
                >
                  <option
                    value=""
                    className="bg-dark-purple text-white border-lighter-purple font-montserrat cursor-pointer"
                  >
                    Select Category
                  </option>
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                      className="bg-dark-purple text-white border-lighter-purple font-montserrat cursor-pointer"
                    >
                      {category.name}
                    </option>
                  ))}
                </select>

                <span className="text-red-500 text-sm font">
                  {errors.category?.message}
                </span>
              </div>

              <div className="w-[40%] lg:w-[48%] h-[63px] lg:h-[70px] relative">
                <label className="font-montserrat text-xs lg:text-sm bg-dark-purple px-1 mb-1 absolute -top-2 left-2">
                  Group Size
                </label>
                <select
                  {...register("groupSize")}
                  className="border w-full p-2 mb-1 text-base lg:text-lg rounded bg-transparent font focus:outline-none focus:ring-1 border-lighter-purple"
                >
                  <option
                    value=""
                    className="bg-dark-purple text-white border-lighter-purple font-montserrat cursor-pointer"
                  >
                    Select Group
                  </option>
                  <option
                    value="two"
                    className="bg-dark-purple text-white border-lighter-purple font-montserrat cursor-pointer"
                  >
                    Two
                  </option>
                  <option
                    value="three"
                    className="bg-dark-purple text-white border-lighter-purple font-montserrat cursor-pointer"
                  >
                    Three
                  </option>
                  <option
                    value="four"
                    className="bg-dark-purple text-white border-lighter-purple font-montserrat cursor-pointer"
                  >
                    Four
                  </option>
                  <option
                    value="five"
                    className="bg-dark-purple text-white border-lighter-purple font-montserrat cursor-pointer"
                  >
                    Five
                  </option>
                </select>
                <span className="text-red-500 text-sm font">
                  {errors.groupSize?.message}
                </span>
              </div>
            </div>

            <div>
              <label>
                <Controller
                  name="agreeToTerms"
                  control={control}
                  render={({ field }) => <input type="checkbox" {...field} />}
                />{" "}
                I agree to the terms and conditions
              </label>
              <p className="text-red-600">{errors.agreeToTerms?.message}</p>
            </div>

            <input
              type="submit"
              className="px-12 py-3 rounded-xl text-xl background-gradient font-semibold mt-12 font-montserrat w-full lg:w-[200px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
