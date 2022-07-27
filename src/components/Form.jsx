import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Download from "../components/download.png";

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
      : alert(
          "Username must be greater than 6 characters and all inputs must not be empty"
        );
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
    <section className="md:h-screen flex flex-col justify-center items-center md:flex-row gap-3 px-2 mt-3">
      <div className="md:h-[700px] flex flex-col md:flex-row p-2">
        <div className="h-full md:w-1/2">
          <img
            src={Download}
            className="w-full h-full rounded-t-md md:rounded-l-md md:rounded-r-none"
            alt=""
          />
        </div>
        <form
          action=""
          className="h-full md:w-1/2 bg-[#719e59] rounded-b-md md:rounded-l-none md:rounded-r-md p-1"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl text-slate-600 text-center font-bold">
            Sign Up Form
          </h1>

          {/* first name and last name section */}
          <div className=" flex flex-col items-center gap-2 md:flex-row my-1">
            <div className="form-control w-full">
              <label htmlFor="Username">Firstname</label>
              <input
                type="text"
                name="firstName"
                value={userValues.firstName}
                onChange={handleChange}
                placeholder="firstname"
              />
            </div>
            <div>
              <label htmlFor="Username">Lastname</label>
              <input
                type="text"
                name="lastName"
                value={userValues.lastName}
                onChange={handleChange}
                placeholder="lastname"
              />
            </div>
          </div>

          {/* username and email section */}
          <div className=" flex flex-col items-center gap-2 md:flex-row my-1">
            <div className="form-control w-full">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                name="userName"
                value={userValues.userName}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="Email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                value={userValues.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* dob  and gender section*/}
          <div className=" flex flex-col items-center gap-2 md:flex-row my-1">
            <div className="form-control w-full">
              <label htmlFor="birthday">Birthday</label>
              <input
                type="date"
                name="date"
                value={userValues.date}
                onChange={handleChange}
                placeholder="DOB"
              />
            </div>
            <div className="form-control w-full">
              <label>Gender</label>
              <select
                name={"select"}
                value={userValues.select}
                onChange={handleChange}
              >
                <option value="">Choose a gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* Password Section */}

          <div className="flex flex-col items-center gap-2 md:flex-row my-1">
            <div className="flex items-end border-b border-black rounded-md ">
              <div className="form-control w-full">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={userValues.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div>
                <AiFillEye
                  className={`w-6 h-6 cursor-pointer ${
                    showPassword ? "block" : "hidden"
                  }`}
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
              <div>
                <AiFillEyeInvisible
                  className={`w-6 h-6 cursor-pointer ${
                    showPassword ? "hidden" : "block"
                  } `}
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
            </div>
            <div className="flex items-end border-b border-black rounded-md ">
              <div className="form-control w-full">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={userValues.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
              </div>
              <div>
                <AiFillEye
                  className={`w-6 h-6 cursor-pointer ${
                    showPassword ? "block" : "hidden"
                  }`}
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
              <div>
                <AiFillEyeInvisible
                  className={`w-6 h-6 cursor-pointer ${
                    showPassword ? "hidden" : "block"
                  } `}
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
            </div>
          </div>

          {/* Phone Number  and courses*/}
          <div className="flex flex-col items-center gap-2 md:flex-row my-1">
            <div className="form-control w-full">
              <label htmlFor="phone number">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={userValues.phoneNumber}
                onChange={handleChange}
                placeholder="+234xxxxxxxx"
              />
            </div>

            <div className="form-control w-full">
              <label className>Courses</label>
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
          </div>

          {/* status */}
          <div className="flex flex-col items-center gap-2 md:flex-row my-1 form-control w-full">
            <label>Marital Status</label>
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

          {/* terms and conditions */}
          <div className="flex items-center gap-1 my-3 ">
            <label> I Agree To The Terms & Conditions</label>
            <input
              className="w-auto"
              onChange={handleChange}
              type="checkbox"
              name="checkbox"
            ></input>
          </div>

          {/* <p className="text-base text-center text-red-900 font-bold mb-2">
          {error}
        </p> */}

          <div className="">
            <button className="bg-[#76b957] btn hover:bg-slate-500">
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
      </div>
    </section>
  );
};
// };

export default Form;
