import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const values = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    date: "",
    select: "",
    checkbox: false,
    phoneNumber: "",
    course: "",
    maritalStatus: "",
  };

  const [userValues, setUserValues] = useState(values);
  const [showPassword, setShowPassword] = useState(false);
  // const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Techathon - Registration";
  }, []);

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

  // if (userValues.userName === "" || userValues.userName.includes(" ")) {
  //   setError("User name cannot be empty and should not include space");
  // } else if (
  //   userValues.firstName === "" ||
  //   userValues.firstName.includes(" ")
  // ) {
  //   setError("firstName cannot be empty and should not include space");
  // } else if (
  //   userValues.lastName === "" ||
  //   userValues.lastName.includes(" ")
  // ) {
  //   setError("lastname cannot be empty and should not include space");
  // } else if (userValues.email === "" || userValues.email.includes(" ")) {
  //   setError("email must be a valid email");
  // } else if (userValues.select === "") {
  //   setError("select your gender ");
  // } else if (userValues.date === "") {
  //   setError("date must be a valid date");
  // } else if (
  //   userValues.phoneNumber === "" ||
  //   userValues.phoneNumber.includes(" ")
  // ) {
  //   setError("phone number cannot be empty and should not include space");
  // } else if (userValues.maritalStatus === "") {
  //   setError("select your status");
  // } else if (userValues.course === "") {
  //   setError("select your course");
  // } else if (userValues.password === "" || userValues.password.length < 6) {
  //   setError("Password cannot be empty and must be at least 6 characters");
  // } else if (userValues.confirmPassword !== userValues.password) {
  //   setError("Password does not match");
  // } else if (userValues.checkbox === false) {
  //   setError("You must accept the terms and conditions before you proceed");
  // } else {
  //   // alert(`Submitted Successfully! ${navigate("/login")}`);
  //   const user = JSON.stringify(userValues);
  //   sessionStorage.getItem("user") === null &&
  //     sessionStorage.setItem("user", user);
  //   navigate("/login");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserValues({
      ...userValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  // console.log(userValues);

  return (
    <section className="flex flex-wrap justify-center mt-20 ">
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
            name="firstName"
            value={userValues.firstName}
            onChange={handleChange}
            placeholder="firstname"
          />
        </div>
        <div className="mt-8 p-2 ">
          <input
            className="bg-[#719e59] shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="lastName"
            value={userValues.lastName}
            onChange={handleChange}
            placeholder="lastname"
          />
        </div>
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
            placeholder="Email"
            value={userValues.email}
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
          <AiFillEye
            className={`w-6 h-6 cursor-pointer ${
              showPassword ? "block" : "hidden"
            }`}
            onClick={() => setShowPassword((prev) => !prev)}
          />
          <AiFillEyeInvisible
            className={`w-6 h-6 cursor-pointer ${
              showPassword ? "hidden" : "block"
            } `}
            onClick={() => setShowPassword((prev) => !prev)}
          />
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
        <div className="mt-8 p-2 ">
          <input
            className="bg-[#719e59] shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="phoneNumber"
            value={userValues.phoneNumber}
            onChange={handleChange}
            placeholder="+234xxxxxxxx"
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
        <div className="bg-[#719e59] mt-8 flex justify-between shodow appearance-none  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <label className="text-white  ">Courses</label>
          <select
            name={"course"}
            value={userValues.course}
            onChange={handleChange}
          >
            <option value="">Choose a course</option>
            <option value="Frontend">Cloud Developer</option>
            <option value="Frontend(React)">Frontend(React)</option>
            <option value="Backend(Node)">Backend</option>
            <option value="Product design">Product design</option>
            <option value="Mobile developer">Mobile developer</option>
            <option value="Copy writing">Copy writing</option>
            <option value="Content writer">Content writer</option>
          </select>
        </div>
        <div className="bg-[#719e59] mt-8 flex justify-between shodow appearance-none  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <label className="text-white  ">Status</label>
          <select
            name={"maritalStatus"}
            value={userValues.maritalStatus}
            onChange={handleChange}
          >
            <option value="">Select Your Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
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
        {/* <p className="text-base text-center text-red-900 font-bold mb-2">
          {error}
        </p> */}

        <div className="mt-8">
          <button className="bg-[#76b957] p-2 w-full text-white">
            SIGN UP
          </button>
        </div>
        <p className="text-center text-sm my-3">
          Already have an account?{" "}
          <Link className="text-slate-500 font-bold" to={"/login"}>
            Sign in
          </Link>{" "}
        </p>
      </form>
    </section>
  );
};
// };

export default Form;
