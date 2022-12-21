import { faCoffee, faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import img from "../img1/img1.png";
import img1 from "../img1/img2.png";
import RatingStart from "./RatingStart";

import { RiShareForwardFill } from "react-icons/ri";
import { createRoot } from 'react-dom/client';

import { useState, } from "react";

import Emoji from "./Emoji/Emoji";





const Banner = ({ openRatingModal }) => {

  const [value, setValue] = useState(2);


  return (
    <div className="  ">
      <div className="">
        <img src={img} alt="" className="w-full h-72 md:h-full lg:h-full " />
      </div>
      <div className="w-96 md:w-[80%] mx-auto p-8  border-2 rounded-2xl bg-white relative bottom-12">
        <div className=" lg:flex lg:justify-between ">
          <div className="flex gap-6 lg:gap-5 w-full">
            <img src={img1} className="w-16 h-16 lg:w-36 lg:h-36" alt="" />
            <div className=" md:flex justify-between w-full  ">
              <div className="relative">

                <h1 className="text-3xl font-bold flex gap-5 text-[#423D74]">McDonalds </h1>
                
                <div className="flex">
                  <p className=" my-2 text-gray-700 text-xl">
                    Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
                    Mumbai, Maharashtra 400614
                  </p>

                </div>
                
              </div>
              <div className=" flex gap-2 ">
                <button className="rounded-md px-2 lg:px-3 border-2  text-black  flex w-28 h-14 justify-center items-center">Share <RiShareForwardFill className="text-lg mt-1 mx-1"></RiShareForwardFill> </button>
                <button className="rounded-md px-2 lg:px-3 bg-indigo-500 text-white w-28 h-14">Call Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-around  my-8 bg-slate-100 lg:p-5 p-3 md:w-[65%]  gap-5 rounded-lg ">
          <div className="">
            <h2 className="text-2xl font-bold">52</h2>
            <p className="my-2">Total Businesses</p>
          </div>
          <div className=" border-[1px] border-gray-300 h-14"></div>
          <div className="">
            <h2 className=" text-2xl font-bold">52</h2>
            <p className="my-2">Total Businesses</p>
          </div>
        </div>
        <div className="my-2">
          <h1 className=" text-2xl font-bold">About Us</h1>
          <p className="text-xl text-[#878787] font-medium">
            Welcome to our happy meals store and bring your families and friends
            along and enjoy exciting offers !!!
          </p>



        </div>
      </div>


    </div>
  );
};

export default Banner;
