import { useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import avatar from "../components/avater.jpeg";

const WelcomePage = () => {
  const userData = sessionStorage.getItem("user");
  const userInfo = JSON.parse(userData);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "welcome To Your Dashboard";
    // const username = sessionStorage.getItem("user");
  }, []);

  return (
    <section className="md:h-screen flex justify-center items-center my-3 px-1 py-2">
      <div className="w-11/12 bg-[green] p-3 rounded-md md:w-4/6">
        <h2 className="text-center font-bold text-2xl text-gray-200">
          DASHBOARD
        </h2>
        <h3 className="text-center text-xl text-gray-200">Your PROFILE</h3>
        <hr className="border-white" />
        <img
          src={avatar}
          className="w-36 h-36 mx-auto mt-2 rounded-full"
          alt=""
        />
        <h2 className="text-2xl text-center text-gray-200">
          {userInfo.userName || "No entry"}
        </h2>
        <div className="bg-[green] rounded px-8 pt-6 pb-8 mb-4 self-auto ">
          <div className="flex align-center justify-center items-center space-x-2 ">
            <AiOutlineCheck className="text-[red]" />
            <p className="">
              Full Name:{" "}
              <span className="text-gray-200 ">
                {userInfo.firstName || "not available"}{" "}
                {userInfo.lastName || "not available"}
              </span>
            </p>
          </div>

          <div className="flex align-center justify-center items-center space-x-2">
            <AiOutlineCheck className="text-[red]" />
            <p>
              Birthday:{" "}
              <span className="text-gray-200 ">
                {userInfo.date || "not available"}
              </span>
            </p>
          </div>
          <div className="flex align-center justify-center items-center space-x-2">
            <AiOutlineCheck className="text-[red]" />
            <p>
              Gender:{" "}
              <span className="text-gray-200 ">
                {userInfo.select || "not available"}
              </span>
            </p>
          </div>
          <div className="flex align-center justify-center items-center space-x-2">
            <AiOutlineCheck className="text-[red]" />
            <p>
              Course:{" "}
              <span className="text-gray-200 ">
                {userInfo.course || "not available"}
              </span>
            </p>
          </div>
          <div className="flex align-center justify-center items-center space-x-2">
            <AiOutlineCheck className="text-[red]" />
            <p>
              Phone Number:{" "}
              <span className="text-gray-200 ">
                {userInfo.phoneNumber || "not available"}
              </span>
            </p>
          </div>
          <div className="flex align-center justify-center items-center space-x-2">
            <AiOutlineCheck className="text-[red]" />
            <p>
              Marital Status:{" "}
              <span className="text-gray-200 ">
                {userInfo.maritalStatus || "not available"}
              </span>
            </p>
          </div>
          <div className="flex align-center justify-center items-center space-x-2">
            <AiOutlineCheck className="text-[red]" />
            <p>
              Checked:{" "}
              <span className="text-gray-200 ">{userInfo.checkbox}</span>
            </p>
          </div>
        </div>
        <button
          className="bg-[#76b957] p-2 w-full text-white font-extrabold flex justify-center text-center"
          onClick={() => {
            sessionStorage.removeItem(userData);
            navigate("/login");
          }}
        >
          LOG OUT
        </button>
      </div>
    </section>
  );
};

export default WelcomePage;
