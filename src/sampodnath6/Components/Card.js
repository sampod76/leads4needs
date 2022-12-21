import React from "react";
import {
  faClock,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";
import { BsFillPencilFill } from "react-icons/bs";
import { IoIosMan } from "react-icons/io";

const Card = ({ openRatingModal }) => {
  return (
    <>

      <div className='mcd w-80 sm:w-96 md:w-full mx-auto shadow-lg '>

        <div className='h-[50%] '>
          <img src="https://placeimg.com/400/225/arch" alt="" className="object-cover object-center  w-full rounded-t-2xl h-full " />
        </div>
        <div className="p-3 mt-2 relative">
          <h1 className="text-xl text-indigo-600 font-bold">Dentist</h1>
          <div className="flex justify-between ">

            <h2 className="text-2xl font-bold">Saloni Dev!</h2>
            <p className="border-2 rounded-full p-2 absolute top-2 right-2"><BsFillPencilFill className="text-xl"></BsFillPencilFill></p>
          </div>

          <p className=" text-gray-600">
            Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
            Mumbai, Maharashtra 400614
          </p>

          <hr className="-mt-2" />
          <div className="flex justify-between -mt-10 py-6">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faClock}
                className="text-2xl text-indigo-600"
              ></FontAwesomeIcon>
              <span>11:00 a.m-6:00 p.m.</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 " version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="31.000000pt" height="36.000000pt" viewBox="0 0 31.000000 36.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)"
                  fill="#7065F0" stroke="none">
                  <path d="M110 345 c0 -11 12 -15 45 -15 33 0 45 4 45 15 0 11 -12 15 -45 15
-33 0 -45 -4 -45 -15z"/>
                  <path d="M69 276 c-86 -59 -83 -191 6 -246 29 -18 47 -22 91 -18 47 4 61 10
91 40 45 45 56 113 28 172 -13 28 -15 39 -6 50 7 8 8 17 3 20 -6 3 -15 -1 -22
-9 -11 -13 -15 -13 -33 0 -35 24 -116 19 -158 -9z m91 -40 c0 -31 5 -46 16
-50 10 -4 14 -15 12 -33 -3 -24 -8 -28 -33 -28 -26 0 -30 4 -33 30 -2 17 -15
42 -29 57 -36 37 -18 59 55 67 8 1 12 -14 12 -43z"/>
                </g>
              </svg>
              <span className="text-xs md:text-base font-bold mt-1 text-[#FF9900]">Pending</span>
            </div>
          </div>
          <i className='top-[-17%] cursor-pointer' onClick={openRatingModal} ><div className='flex ml-2'><span className="text-3xl mt-2 ml-3 text-white">3</span><FontAwesomeIcon
            icon={faStar}
            className="text-yellow-500 mx-2 text-3xl mt-2"
          ></FontAwesomeIcon>  <h4 className='text-2xl font-bold text-white text-center mt-2'>Stars</h4> </div> </i>
        </div>

      </div>
      <div className='mcd  w-80 sm:w-96 md:w-full mx-auto shadow-lg '>

        <div className='h-[50%] '>
          <img src="https://placeimg.com/400/225/arch" alt="" className="object-cover object-center  w-full rounded-t-2xl h-full " />
        </div>
        <div className="p-3 mt-2 relative">
          <h6 className="text-lg text-indigo-600 font-bold">Dentist</h6>
          <div className="flex justify-between ">

            <h2 className="text-2xl font-bold">Saloni Dev</h2>
            <p className="border-2 rounded-full p-2 absolute top-2 right-2"><BsFillPencilFill className="text-xl"></BsFillPencilFill></p>
          </div>

          <p className=" text-gray-600 ">
            Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
            Mumbai, Maharashtra 400614
          </p>


          <hr className="-mt-1" />
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faClock}
                className="text-2xl text-indigo-600"
              ></FontAwesomeIcon>
              <span>11:00 a.m-6:00 p.m.</span>
            </div>
            <div className="flex justify-between ">

              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-2xl text-red-600"
                ></FontAwesomeIcon>
                <span>248</span>
              </div>
            </div>
          </div>
          <i className='top-[-17%] cursor-pointer' onClick={openRatingModal} ><div className='flex ml-2'><span className="text-3xl mt-2 ml-3 text-white">3</span><FontAwesomeIcon
            icon={faStar}
            className="text-yellow-500 mx-2 text-3xl mt-2"
          ></FontAwesomeIcon>  <h4 className='text-2xl font-bold text-white text-center mt-2'>Stars</h4> </div> </i>
        </div>


      </div>
      <div className='mcd  w-80 sm:w-96 md:w-full mx-auto shadow-lg '>

        <div className='h-[50%] '>
          <img src="https://placeimg.com/400/225/arch" alt="" className="object-cover object-center  w-full rounded-t-2xl h-full " />
        </div>
        <div className="p-3 mt-2 relative">
          <h1 className="text-lg text-indigo-600 font-bold">Dentist</h1>
          <div className="flex justify-between ">

            <h2 className="text-2xl font-bold">Saloni Dev</h2>
            <p className="border-2 rounded-full p-2 absolute top-2 right-2"><BsFillPencilFill className="text-xl"></BsFillPencilFill></p>
          </div>

          <p className=" text-gray-600">
            Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
            Mumbai, Maharashtra 400614
          </p>

          <hr className="-mt-1" />
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faClock}
                className="text-2xl text-indigo-600"
              ></FontAwesomeIcon>
              <span>11:00 a.m-6:00 p.m.</span>
            </div>
            <div className="flex justify-between ">

              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-2xl text-red-600"
                ></FontAwesomeIcon>
                <span>248</span>
              </div>
            </div>
          </div>
          <i className='top-[-17%] cursor-pointer' onClick={openRatingModal} ><div className='flex ml-2'><span className="text-3xl mt-2 ml-3 text-white">3</span><FontAwesomeIcon
            icon={faStar}
            className="text-yellow-500 mx-2 text-3xl mt-2"
          ></FontAwesomeIcon>  <h4 className='text-2xl font-bold text-white text-center mt-2'>Stars</h4> </div> </i>
        </div>


      </div>

    </>
  );
};

export default Card;
