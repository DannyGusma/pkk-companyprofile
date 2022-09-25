import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
// import { useEffect, useState } from "react";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about-us",
    name: "About Us",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/contact",
    name: "Contact Us",
  },
];

const Navbar = () => {
  // const [color, setColor] = useState(false);

  // const ChangeColor = () => {
  //   if (window.scrollY >= 90) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", ChangeColor);
  // }, []);

  return (
    <div
    //  className={color ? "bg-red-500" : "bg-transparent"}
    >
      <nav className="navbar bg-white fixed top-0 right-0 left-0 z-[999]">
        <div className="container">
          <div className="flex-1">
            <a className="normal-case text-xl">Company Profile</a>
          </div>
          <div className="flex-none gap-2 hidden md:block">
            <ul className="flex justify-between items-center gap-4">
              {routes.map(({ name, path }, index) => (
                <li key={index}>
                  <Link href={path}>
                    <a className="ml-4">{name?.toUpperCase()}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-none gap-2 md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <HiMenuAlt1 size={30} />
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-50 rounded-box w-52"
              >
                {routes.map(({ name, path }, index) => (
                  <li key={index}>
                    <Link href={path}>
                      <a>{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
