import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const userData = sessionStorage.getItem("user");

  const userInfo = JSON.parse(userData);

  return (
    <div className="shadown-md bg-[#719e59]  max-w-xl m-[auto] mt-20  ">
      <h1 className="text-gray-200 text-2xl font-extrabold flex justify-center pt-5">
        Welcome to your page!!
      </h1>
      <h3 className="text-gray-200 mt-2 mb-20 flex justify-center">
        Please Confirm Your Details
      </h3>
      <div className="bg-[green] rounded px-8 pt-6 pb-8 mb-4 self-auto ">
        <div className="flex align-center justify-center items-center space-x-2 ">
          <AiOutlineCheck className="text-[red]" />
          <p className="">
            Firstname:{" "}
            <span className="text-gray-200 mt-2 ml-5">
              {userInfo.firstName}
            </span>
          </p>
        </div>
        <div className="flex align-center justify-center items-center space-x-2">
          <AiOutlineCheck className="text-[red]" />
          <p>
            Lastname:{" "}
            <span className="text-gray-200 mt-2 ml-5">{userInfo.lastName}</span>
          </p>
        </div>
        <div className="flex align-center justify-center items-center space-x-2">
          <AiOutlineCheck className="text-[red]" />
          <p>
            Username:{" "}
            <span className="text-gray-200 mt-2 ml-5">{userInfo.userName}</span>
          </p>
        </div>

        <div className="flex align-center justify-center items-center space-x-2">
          <AiOutlineCheck className="text-[red]" />
          <p>
            Date of Birth:{" "}
            <span className="text-gray-200 mt-2 ml-5">{userInfo.date}</span>
          </p>
        </div>
        <div className="flex align-center justify-center items-center space-x-2">
          <AiOutlineCheck className="text-[red]" />
          <p>
            Gender:{" "}
            <span className="text-gray-200 mt-2 ml-5">{userInfo.select}</span>
          </p>
        </div>
        <div className="flex align-center justify-center items-center space-x-2">
          <AiOutlineCheck className="text-[red]" />
          <p>
            Checked:{" "}
            <span className="text-gray-200 mt-2 ml-5">{userInfo.checkbox}</span>
          </p>
        </div>
      </div>
      <Link
        to={"/"}
        className="bg-[#76b957] p-2 w-full text-white font-extrabold"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default WelcomePage;
