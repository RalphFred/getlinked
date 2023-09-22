import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../components/Input";
import registerIMG from "../assets/register.png";

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
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const submitForm = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        console.error('Error:', error);
      });
  };
  
  const onSubmit = (data) => {
    // Call the submitForm function to send the data to the backend
    submitForm(data);
  };
  

  return (
    <div className="bg-dark-purple text-white px-6 py-12 lg:py-8 lg:px-24 w-full h-[90vh] lg:h-[85vh] flex justify-around flex-col lg:flex-row items-center">
      <div className="w-2/5 hidden lg:block">
        <img src={registerIMG} alt="vector image" className="" />
      </div>
      <div className="w-full lg:w-3/5">
        <h2 className="font-clash text-2xl text-lighter-purple font-extrabold mb-6">
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
                type="number"
                placeholder="example@example.com"
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
            <div className="w-[54%]">
              <label className="mb">Category</label>
              <select
                {...register("category")}
                className="border w-full p-2 rounded bg-transparent font focus:outline-none focus:ring-1 focus:border-lighter-purple"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <span className="text-red-500 text-sm font">
                {errors.category?.message}
              </span>
            </div>

            <div className="w-[40%] lg:w-[48%]">
              <label className="mb">Group Size</label>
              <select
                {...register("groupSize")}
                className="border w-full p-2 rounded bg-transparent font focus:outline-none focus:ring-1 focus:border-lighter-purple"
              >
                <option value="">Select Group</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
                <option value="five">Five</option>
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
            className="px-12 py-3 rounded-xl text-xl background-gradient font-semibold mt-4 font-montserrat w-full lg:w-[200px]"
          />
        </form>
      </div>
    </div>
  );
}
