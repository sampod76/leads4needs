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
const Card = () => {
  return (
    <>
      <div className="card card-compact rounded-t-lg my-3 bg-base-100 shadow-xl relative designCard w-80 lg:w-96   mx-auto ">
        <i className="text-white font-bold flex justify-center items-center text-2xl">
          {" "}
          <span className=" mr-2">3</span>{" "}
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-500 mr-2"
          ></FontAwesomeIcon>
          <span>Star</span>
        </i>
        <figure>
          <FontAwesomeIcon
            className=" absolute text-slate-800 p-2 bg-slate-100 rounded-full top-7 right-6"
            icon={faHeart}
          ></FontAwesomeIcon>
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h1 className="text-sm text-indigo-600 font-bold">Dentist</h1>
          <h2 className="card-title font-bold">Shoes!</h2>
          <div className="flex justify-between items-center">
            <p className=" text-gray-600">
              Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
              Mumbai, Maharashtra 400614
            </p>
            <BsFillPencilFill className="text-4xl "></BsFillPencilFill>
          </div>
          <hr />
          <div className="flex justify-between ">
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
                  fill="#000000" stroke="none">
                  <path d="M110 345 c0 -11 12 -15 45 -15 33 0 45 4 45 15 0 11 -12 15 -45 15
-33 0 -45 -4 -45 -15z"/>
                  <path d="M69 276 c-86 -59 -83 -191 6 -246 29 -18 47 -22 91 -18 47 4 61 10
91 40 45 45 56 113 28 172 -13 28 -15 39 -6 50 7 8 8 17 3 20 -6 3 -15 -1 -22
-9 -11 -13 -15 -13 -33 0 -35 24 -116 19 -158 -9z m91 -40 c0 -31 5 -46 16
-50 10 -4 14 -15 12 -33 -3 -24 -8 -28 -33 -28 -26 0 -30 4 -33 30 -2 17 -15
42 -29 57 -36 37 -18 59 55 67 8 1 12 -14 12 -43z"/>
                </g>
              </svg>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-compact rounded-t-lg my-3 bg-base-100 w-80 lg:w-96  mx-auto shadow-xl designCard">
        <i className="text-white font-bold flex justify-center items-center text-2xl">
          {" "}
          <span className=" mr-2">3</span>{" "}
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-500 mr-2"
          ></FontAwesomeIcon>
          <span>Star</span>
        </i>
        <figure>
          <FontAwesomeIcon
            className=" absolute text-slate-800 p-2 bg-slate-100 rounded-full top-7 right-6"
            icon={faHeart}
          ></FontAwesomeIcon>
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h1 className="text-sm text-indigo-600 font-bold">Dentist</h1>
          <h2 className="card-title font-bold">Shoes!</h2>
          <div className="flex justify-between items-center">
            <p className=" text-gray-600">
              Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
              Mumbai, Maharashtra 400614
            </p>
            <BsFillPencilFill className="text-4xl "></BsFillPencilFill>
          </div>
          <hr />
          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faClock}
                className="text-2xl text-indigo-600"
              ></FontAwesomeIcon>
              <span>11:00 a.m-6:00 p.m.</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faEye}
                className="text-2xl text-red-600"
              ></FontAwesomeIcon>
              <span>248</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-compact rounded-t-lg my-3 bg-base-100 w-80 lg:w-96 shadow-xl designCard mx-auto">
        <i className="text-white font-bold flex justify-center items-center text-2xl">
          {" "}
          <span className=" mr-2">3</span>{" "}
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-500 mr-2"
          ></FontAwesomeIcon>
          <span>Star</span>
        </i>
        <figure>
          <FontAwesomeIcon
            className=" absolute text-slate-800 p-2 bg-slate-100 rounded-full top-7 right-6"
            icon={faHeart}
          ></FontAwesomeIcon>
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h1 className="text-sm text-indigo-600 font-bold">Dentist</h1>
          <h2 className="card-title font-bold">Shoes!</h2>
          <div className="flex justify-between items-center">
            <p className=" text-gray-600">
              Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
              Mumbai, Maharashtra 400614
            </p>
            <BsFillPencilFill className="text-4xl "></BsFillPencilFill>
          </div>
          <hr />
          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faClock}
                className="text-2xl text-indigo-600"
              ></FontAwesomeIcon>
              <span>11:00 a.m-6:00 p.m.</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faEye}
                className="text-2xl text-red-600"
              ></FontAwesomeIcon>
              <span>248</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
