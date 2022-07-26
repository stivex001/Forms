import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Inputs from "./Input";

const Form = () => {
  const values = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    select: "",
  };

  const [userValues, setUserValues] = useState(values);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    userValues.userName.length > 6 &&
    userValues.password === userValues.confirmPassword
      ? alert("Submitted Successfully!")
      : alert("Input does not match");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };
  console.log(userValues);

  return (
    <div className=" flex items-center justify-center my-20  ">
      <form
        className=" drop-shadow-lg bg-[#719e59] rounded-lg space-y-4 p-10"
        onSubmit={handleSubmit}
      >
        <h1 className="font-light text-white text-xl mt-[10px] text-center">
          Sign Up Form
        </h1>
        {Inputs.map((input) => (
          <div className="mt-8 p-2 " key={input.id} {...input}>
            <input
              className="bg-[#719e59] shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              onChange={handleChange}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              value={userValues.values}
              required={userValues.required}
              pattern={input.pattern}
            />
            <span className="visible peer-invalid:visible text-red-700 font-light">
              {input.errormessage}
            </span>
          </div>
        ))}

        <label class="block">
          <span class="text-gray-700">Gender</span>
          <select class="form-select block w-full mt-1">
            <option>""</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>

        <div className="mt-8">
          <button className="bg-[#76b957] p-[10px] w-full text-white h-[50px] mt-[15px] mb-[30px] ">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
