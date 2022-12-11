import { faCoffee, faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../img1/img1.png";
import img1 from "../img1/img2.png";

const Banner = () => {
  return (
    <div className=" ">
      <div className="">
        <img src={img} alt="" className="w-full h-72 md:h-full lg:h-full " />
      </div>
      <div className=" lg:w-[1224px]  md:w-[778px] w-80 mx-auto p-5 border-2 rounded-2xl bg-white relative bottom-12">
        <div className=" lg:flex lg:justify-between ">
          <div className="flex gap-5">
            <img src={img1} className="w-24 h-24 lg:w-36 lg:h-36" alt="" />
            <div className=" w-full lg:w-2/3 ">
              <h1 className=" font-bold ">McDonalds</h1>
              <p className=" my-2 text-gray-700 text-sm">
                Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
                Mumbai, Maharashtra 400614
              </p>
              <div className="flex gap-2 text-sm">
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faStar}
                    className=" text-yellow-500 mr-2"
                  />
                  4.8/5
                </span>
                <a href="" className=" text-indigo-600">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  mcDonalds.com
                </a>
              </div>
            </div>
          </div>
          <div className=" flex gap-2 my-7">
            <button className="btn btn-outline">Share</button>
            <button className="btn  bg-indigo-500">Call Now</button>
          </div>
        </div>
        <div className="` flex justify-around  my-8 bg-slate-100 p-4 lg:w-1/2 gap-5 rounded-lg">
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
