import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const values = {
    userName: "",
    password: "",
  };

  const [userValues, setUserValues] = useState(values);

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    document.title = "Login Page";
    const userData = sessionStorage.getItem("user");

    const userInfo = JSON.parse(userData);
    setUserData(userInfo);
  }, [userData]);

  console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();

    userData?.userName === userValues.userName &&
    userData?.password === userValues.password
      ? alert(`LoggedIn Successfully! ${navigate("/welcome")}`)
      : alert("Incorrect details!");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserValues({
      ...userValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   console.log(userValues);

  return (
    <div className="flex flex-wrap justify-center mt-20 ">
      <form
        action=""
        className="shadown-md bg-[#719e59] rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white text-lg text-center">Sign In </h1>
        <div className="mt-8 p-2 ">
          <input
            className="bg-[#719e59] shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="userName"
            value={userValues.userName}
            onChange={handleChange}
            placeholder="Username"
            errorMessage="Username should be 3-16 characters long"
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

        <div className="mt-8">
          <button className="bg-[#76b957] p-2 w-full text-white">Log In</button>
        </div>
        <p className="text-center text-sm mt-3">
          Don't have an account?{" "}
          <Link className="text-indigo-500 font-bold" to="/">
            Create one!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Form;
