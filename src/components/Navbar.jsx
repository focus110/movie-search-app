import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="wrapper bg-[#292929] py-6 flex justify-center md:justify-start items-center">
      {/* <h2 className="w-max border text-white py-1 px-3">MyTestApp</h2> */}
      <Link to={``}>
        <img
          className="w-[87px] md:w-[146px] border text-white py-2 px-3"
          src={logo}
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Navbar;
