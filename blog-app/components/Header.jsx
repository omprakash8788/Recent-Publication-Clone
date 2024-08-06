"use client"
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { BiLogoDigitalocean } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");
  const submitHandler = async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("email", email);
    const response =await axios.post('/api/email', formData);

    if(response.data.success){
      toast.success(response.data.msg);
      setEmail("")
    }
    else{
      toast.error("Error")
    }
  }

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <BiLogoDigitalocean
          width={180}
          className="w-[180px] h-10 text-[#022072]  sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#022072]">
          {" "}
          Get Started <FaArrowAltCircleRight />{" "}
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-2xl sm:text-5xl font-medium hover:text-blue-600">
          Recent Publication
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base hover:text-[20px]">
          Welcome to our blog, where creativity and inspiration meet to spark
          your imagination and enrich your mind with engaging content
        </p>
        <form onSubmit={submitHandler} className="flex justify-between max-w-[500px] scale-50 sm:scale-100 mx-auto mt-10 border border-solid border-black shadow-[-7px_7px_0px_#022072]">
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="pl-4 outline-none"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
