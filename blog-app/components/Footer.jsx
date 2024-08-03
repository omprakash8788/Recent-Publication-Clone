import React from "react";
import { BiLogoDigitalocean } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ImGooglePlus } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-purple-500 py-5 items-center">
        <BiLogoDigitalocean
          width={180}
          className="w-[180px] h-10 text-[#022072] hover:text-white  sm:w-auto"
        />
 <p className="text-sm text-white">
        All right reserved. Copyright @om
      </p>
      <div className="flex">
        <FaFacebook className="w-10 cursor-pointer hover:text-white hover:text-[25px]"/>
        <BsTwitterX  className="w-10 cursor-pointer hover:text-white"/>
        <ImGooglePlus  className="w-10 cursor-pointer hover:text-white hover:text-[25px]"/>
      </div>
         
      </div>
    </>
  );
};

export default Footer;
