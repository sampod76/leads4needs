import React from "react";
import {
  faClock,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css";
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
          <p className=" text-gray-600">
            Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
            Mumbai, Maharashtra 400614
          </p>
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
          <p className=" text-gray-600">
            Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
            Mumbai, Maharashtra 400614
          </p>
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
          <p className=" text-gray-600">
            Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
            Mumbai, Maharashtra 400614
          </p>
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
