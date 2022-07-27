import { NavLink } from "react-router-dom";

const Nav = () => {
  const menuContent = [
    { id: 1, label: "Register", link: "/" },
    { id: 2, label: "Login", link: "/login" },
    { id: 3, label: "Dashboard", link: "/welcome" },
  ];

  return (
    <nav className=" max-w-screen-sm: flex justify-between items-center bg-[#76b957] text-black px-5 py-3 md: flex flex-col bg-[#76b957]">
      <h1 className="text-2xl font-mono font-black">Techathon</h1>
      <ul className="flex gap-3">
        {menuContent.map((contents) => (
          <li className="text-xl" key={contents.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "" : "")}
              to={contents.link}
            >
              {contents.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
