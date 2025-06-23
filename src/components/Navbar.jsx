import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { k, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full items-center flex py-5 fixed top-0 left-0 z-20 bg-transparent justify-between`}>
      <Link to="/" className="flex gap-2 items-center" onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}>
        <img src={k} alt="logo" className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] cursor-pointer font-bold flex">Kedhar &nbsp;<span className="sm:block hidden ">| Bhoomani</span></p>
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${active === nav.title ? "text-white" : "text-gray-300"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>


      {/* For Mobile  */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${!toggle ? "hidden" : "flex"} absolute p-6 black-gradient mx-4 my-4 max-w-[140px] z-10 top-20 right-0 rounded-xl`}>
          <ul className="list-none flex justufy-end items-start flex-col gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-gray-300"
                  } hover:text-white text-[14px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(nav.title)
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;