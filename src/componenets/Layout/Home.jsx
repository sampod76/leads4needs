import React from "react";
import Navbar from "./Navbar";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { FaMale } from "react-icons/fa";
import CardData from "./utils/Card1";
import { ImSpoonKnife } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getPgs } from "../../redux/pgActions";
import { Link } from "react-router-dom";

export default function Home() {
  const [isDown, setIsDown] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const { pgs, loading } = useSelector((state) => state.pg);
  const { user } = useSelector((state) => state.user);

  const filterdPg = [];

  pgs &&
    pgs.filter((item) => {
      if (item.status === "approve") filterdPg.push(item);
    });

  useEffect(() => {
    dispatch(getPgs(keyword, city));
  }, [dispatch, keyword, city]);

  return (
    <div className="bg-[#F7F7FD] h-screen w-screen relative overflow-scroll">
      <div className="flex w-full top-0 z-10 h-auto bg-[#F7F7FD] sticky">
        <Navbar />
      </div>
      <div className=" px-[10px] mt-4 sm:px-[120px] w-full ">
        <h5 className=" font-poppins  font-semibold text-[#000929]">
          Search Properties to Rent
        </h5>
        <div className="h-16  w-full mt-4 flex py-2 rounded-md bg-white">
          <div className="flex  h-full  sm:px-4 px-2 w-full justify-between">
            <div className="sm:block hidden h-full ">
              <div className="flex   justify-around items-center border-2 rounded-md border-slate-200 pl-2">
                <AiOutlineSearch className=" h-7 w-7" />
                <input
                  type="text"
                  placeholder="Search"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className=" px-20  py-[10px]  placeholder:text-black placeholder:font-poppins rounded-md  "
                />
              </div>
            </div>

            <>
              {" "}
              <div className="flex flex-col">
                <h5 className=" font-poppins text-[12px] font-medium text-[#878787]">
                  Location
                </h5>
                <h5 className=" font-poppins flex gap-2 text-[14px] font-semibold text-black">
                  Delhi,NCR{" "}
                  <AiOutlineDown className="mt-1 border-1 rounded-full px-[1px] text-[#7065F0] bg-[#F2F1FC]" />
                </h5>
              </div>
              <div className="h-[40px]  w-[2px] bg-[#F2F1FC]  "></div>
              <div className="flex flex-col">
                <h5 className=" font-poppins text-[12px] font-medium text-[#878787]">
                  Price
                </h5>
                <h5 className=" flex gap-2 font-poppins text-[14px] font-semibold text-black">
                  ₹1,500-₹2,000{" "}
                  <AiOutlineDown
                    onClick={() => setIsDown(!isDown)}
                    className="mt-1 border-1 rounded-full px-[1px] text-[#7065F0] bg-[#F2F1FC]"
                  />
                </h5>
                <div
                  className={`bg-white ${
                    isDown ? " visible" : "hidden"
                  } flex z-50 gap-2 font-poppins font-semibold rounded-md py-2 px-1 flex-col`}
                >
                  <span>₹2,000-₹ 3,000</span>
                  <span>₹3,000-₹ 4,000</span>
                  <span>₹4,000-₹ 5,000</span>
                </div>
              </div>
              <div className="h-[40px]  w-[2px] bg-[#F2F1FC]  "></div>
              <div className="flex flex-col">
                <h5 className=" font-poppins text-[12px] font-medium text-[#878787]">
                  Gender
                </h5>
                <div className="flex gap-4">
                  <div>
                    <h5 className=" font-poppins text-[14px] font-semibold text-black">
                      <input type="radio" id="male" /> Male
                    </h5>
                  </div>
                  <div>
                    <h5 className=" font-poppins text-[14px] font-semibold text-black">
                      <input type="radio" id="female" /> Female
                    </h5>
                  </div>    
                   <div>
                    <h5 className=" font-poppins text-[14px] font-semibold text-black">
                      <input type="radio" id="female" /> Unisex
                    </h5>
                  </div>

                </div>
              </div>
            </>
          </div>
        </div>
        {/* Card */}
        <div className="flex flex-wrap gap-4 w-full items-center  justify-center">
          {filterdPg &&
            filterdPg.map((item) => (
              <Link to={`/view/${item._id}`} style={{ textDecoration: "none" }}>
                <div className="flex mt-4 relative">
                  <div className=" mt-[146px] relative">
                    <span className="flex gap-2 -ml-2 items-center px-3 shadow-lg py-[5px] rounded-md absolute  text-[15px] bg-[#7065F0] font-poppins font-semibold text-white">
                      <FaMale />
                      female
                    </span>
                    <div className="h-4 w-4 absolute mt-[22px] -ml-1 rotate-45 bg-[#7065F0]"></div>
                  </div>
                  <div className="h-[330px] sm:w-[315px] w-[325px] bg-white rounded-md border-[1.4px] border-[#F1F0FB] ">
                    <img
                      src={item.frontImage}
                      className=" rounded-tl-md rounded-tr-md h-[50%] w-full "
                      alt=""
                    />

                    <div className="p-2 mt-[20px]">
                      <div className="flex justify-between ">
                        <h5 className=" font-poppins font-semibold text-[#7065F0] text-[20px]">
                          77
                          <span className=" text-[#878787] font-poppins text-[14px]">
                            /
                          </span>
                          <span className=" text-[#878787] font-poppins text-[10px]">
                            month
                          </span>
                        </h5>
                        <AiOutlineHeart className="text-[#7065F0] border-1 p-1 h-7 w-7 border-[#F1F0FB] rounded-full " />
                      </div>
                      <div>
                        <h5 className=" font-poppins font-semibold text-black text-[16px]">
                          {item.name}
                        </h5>
                      </div>
                      <div>
                        <p className="text-[#878787] font-poppins font-medium text-[12px]">
                          {item.city}
                        </p>
                      </div>
                      <hr className="text-[#c2c1d5] -mt-1" />
                      <div className="flex justify-between px-2">
                        <div className="flex">
                          <BiBed className="text-[#7065F0]" />
                          <p className=" font-poppins text-[10px] text-[#878787] font-medium">
                            1/2//3/4
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <ImSpoonKnife className="text-[#7065F0]" />
                          <p className=" font-poppins text-[10px] text-[#878787] font-medium">
                            No Food
                          </p>
                        </div>
                        <div className="flex  gap-2">
                          <h5 className="text-[#7065F0]  text-[18px]  font-bold">
                            P
                          </h5>{" "}
                          <span className=" font-poppins text-[#878787] text-[12px]">
                            Parking
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
