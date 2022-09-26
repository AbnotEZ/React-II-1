import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/magda.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
     

      <div
        className=" bg-[#c0b7b8] p-2 text-gray-400 text-sm flex flex-items justify-center"
        id="navbar-default"
      >
        <ul className="flex flex-items justify-center">
         {/*  <li>
            <a className="pl-2" href="">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a className="pl-2" href="">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a className="pl-2" href="">
              <FaPhone />
            </a>
          </li> */}

          <li className="mr-2">
            <Link
              to="/"
              className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Contacts"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      {/* LOGO */}
      <div className="display flex justify-center mt-3 mb-3">
        <img src={Logo} className=" h-20  " alt="Flowbite Logo" />
      </div>

      
    </nav>
  );
};

export default NavBar;
