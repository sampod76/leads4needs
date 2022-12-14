import { faCoffee, faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import img from "../img1/img1.png";
import img1 from "../img1/img2.png";
import RatingStart from "./RatingStart";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { RiShareForwardFill } from "react-icons/ri";
import { useState } from "react";


const Banner = () => {
  const [value, setValue] = useState(2);
  return (
    <div className=" ">
      <div className="">
        <img src={img} alt="" className="w-full h-72 md:h-full lg:h-full " />
      </div>
      <div className=" lg:w-[1224px]  md:w-[778px] w-80 mx-auto lg:p-5 p-2 border-2 rounded-2xl bg-white relative bottom-12">
        <div className=" lg:flex lg:justify-between ">
          <div className="flex gap-2 lg:gap-5">
            <img src={img1} className="w-16 h-16 lg:w-36 lg:h-36" alt="" />
            <div className=" w-full lg:w-2/3 ">
              <h1 className="text-lg font-bold ">McDonalds</h1>
              <div className="flex">
                <p className=" my-2 text-gray-700 text-sm">
                  Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
                  Mumbai, Maharashtra 400614
                </p>
                <BsFillPencilFill className="text-lg mt-2"></BsFillPencilFill>
              </div>
              <div className="flex gap-2 text-sm">
                <span>
                  <Box
                    sx={{
                      '& > legend': { mt: 1 },
                    }}
                  >
                    <Typography component="legend"> <span className="ml-1">Rating:</span>{value}</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    
                  </Box>

              
                </span>
               <div className="mt-3">
               <FontAwesomeIcon
                    icon={faLink}
                    className="mr-2"
                  ></FontAwesomeIcon>
                   mcDonalds.com
               </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-2 ">
            <button className="rounded-md px-2 lg:p-3 border-2 h-10   lg:h-14 mt text-black  flex">Share <RiShareForwardFill className="text-lg mt-1 mx-1"></RiShareForwardFill> </button>
            <button className="rounded-md px-2 lg:p-3 bg-indigo-500 h-10  lg:h-14 mt text-white ">Call Now</button>
          </div>
        </div>
        <div className="` flex justify-around  my-8 bg-slate-100 lg:p-4 p-3 lg:w-1/2 gap-5 rounded-lg">
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
          <h1 className=" text-lg font-bold">About Us</h1>
          <p>
            Welcome to our happy meals store and bring your families and friends
            along and enjoy exciting offers !!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
