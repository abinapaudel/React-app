import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLinks } from "../../utils/dataList";

const SideNavbar = ({ children }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-white border-gray-200 drop-shadow-lg overflow-y-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img src="./src/assets/companyLogo.png" className="w-10 h-10" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary ml-4">
              Admin
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              onClick={() => {
                navigate("/sign-in");
              }}
              className="items-center bg-gray-200 font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 mr-4"
            >
              Logout
            </button>
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="./src/assets/usersIcon.png"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>
      <div className="flex">
        <div
          className={`${
            open ? "w-64" : "w-20"
          } duration-300 h-screen bg-white relative drop-shadow-xl overflow-y-auto`}
          style={{ position: "sticky", top: 0 }}
        >
          <img
            src={`${
              !open ? "./src/assets/MenuIcon.png" : "./src/assets/CrossIcon.png"
            }`}
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer mt-2 rounded-full right-5 w-9 border-2 border-dark-purple`}
          />
          <ul className={`pl-5 items-center ${open ? "mt-0" : "mt-10"}`}>
            {NavLinks.map((link, index) => (
              <li
                key={index}
                className="text-gray-300 text-sm flex items-center gap-x-4 pt-6 cursor-pointer p-2 hover:bg-gray-100 rounded-md"
                onClick={() => {
                  navigate(`${link.href}`);
                }}
              >
                <img src={link.src} className="w-7 h-7" />
                <span
                  className={`${
                    !open && "scale-0"
                  } origin-left duration-200 text-black`}
                >
                  {link.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </>
  );
};

export default SideNavbar;
