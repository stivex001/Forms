import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const values = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    date: "",
    select: "",
    checkbox: false,
  };

  const [userValues, setUserValues] = useState(values);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.stringify(userValues);
    sessionStorage.getItem("user") === null &&
      sessionStorage.setItem("user", user);

    userValues.userName.length > 6 &&
    userValues.password === userValues.confirmPassword
      ? alert(`Submitted Successfully! ${navigate("/login")}`)
      : alert("Input does not match");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserValues({
      ...userValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  console.log(userValues);

  return (
    <div className="flex flex-wrap justify-center mt-20 ">
      <form
        action=""
        className="shadown-md bg-[#719e59] rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white text-lg text-center">Sign Up Form</h1>
        <div className="mt-8 p-2 ">
          <input
            className="bg-[#719e59] shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="userName"
            value={userValues.userName}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className="mt-8 p-2">
          <input
            className="bg-[#719e59] shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div className="mt-8 p-2">
          <input
            className="bg-[#719e59] shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="date"
            value={userValues.date}
            onChange={handleChange}
            placeholder="DOB"
          />
        </div>
        <div className="mt-8 p-2 flex items-center">
          <input
            className="bg-[#719e59] shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={showPassword ? "text" : "password"}
            name="password"
            value={userValues.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <AiFillEye onClick={() => setShowPassword((prev) => !prev)} />
          {/* <AiFillEyeInvisible /> */}
        </div>
        <div className="mt-8 p-2">
          <input
            className="bg-[#719e59] shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirmPassword"
            value={userValues.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>
        <div className="bg-[#719e59] mt-8 flex justify-between shodow appearance-none  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <label className="text-white  ">Gender</label>
          <select
            name={"select"}
            value={userValues.select}
            onChange={handleChange}
          >
            <option value="">Choose a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            {/* <option value="Cisgender">Cisgender</option> */}
          </select>
        </div>
        <div className="mt-8 p-2">
          <label className="text-white">
            <input
              onChange={handleChange}
              type="checkbox"
              name="checkbox"
            ></input>
            I Agree To The Terms & Conditions
          </label>
        </div>

        <div className="mt-8">
          <button className="bg-[#76b957] p-2 w-full text-white">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
