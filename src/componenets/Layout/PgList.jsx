import React from "react";
import { useState, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { delteOwnedPg, getPgs } from "../../redux/pgActions";
// import { getAllUsers, updateUser, deleteUser } from "../../redux/userActions";

export default function PgListPage() {
  const [isActive, setIsActive] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [pgLength, setPgLength] = useState();
  const [city,setCity]=useState('');
  const [pgId, setPgId] = useState("");

  const dispatch = useDispatch();
  const {pgs,loading} =useSelector(state=>state.pg);


  const deletePgHandler =async()=>{
    await dispatch(delteOwnedPg(pgId));
    dispatch(getPgs(keyword,city));
  }






  useEffect(()=>{
    dispatch(getPgs(keyword,city));
}, [dispatch,keyword,city])

  return (
    <div>
      <div
        className={`bg-white ${
          isActive ? " visible" : "hidden"
        }  h-[500px] w-[500px] rounded-md ml-[30%] mt-[5%] shadow-xl absolute z-50 `}
      >
        <div className="bg-[#7065F0]  rounded-tl-md rounded-tr-md">
          <AiOutlineClose className=" cursor-pointer absolute ml-[90%] mt-4 h-5 w-5 text-white" onClick={()=>setIsActive(false)} />
          <h5 className="text-white text-[15px] font-poppins font-medium py-4 px-4 ">
            Add Role
          </h5>
        </div>

        <div className=" pt-2 pl-4 pr-4">
          <input
            type="text"
            placeholder="Search,people,users,etc"
            className="border-1 px-8 py-[10px] text-[#4D536A] w-full  border-[#E0DDFF] rounded-md text-[13px] font-poppins"
          />

          <div className="flex gap-1 h-10 w-full border-1 border-[#E0DDFF]  mt-2">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="h-[40px] rounded-full w-[40px] py-2 px-2 ml-1 "
              alt=""
            />
            <div className="flex py-1  font-poppins font-medium text-[10px]">
              <p>
                Alisha Meyna
                <br />
                Software Developer
              </p>
            </div>
          </div>

          <div className=" h-20  py-2 rounded-md w-full border-1 border-[#E0DDFF]  mt-2">
            <div className="">
              <input type="radio" className="absolute ml-[12px] mt-4" />
              <h5 className="text-[13px] font-poppins font-bold px-[35px]">
                Admin
              </h5>
              <p className="text-[10px] font-medium font-poppins px-[35px]">
                This Role manages everything on the Page.It's the Only role that
                can edit the Page and manage all admins.
              </p>
            </div>
          </div>

          <div className=" h-20  py-2 rounded-md w-full border-1 border-[#E0DDFF]  mt-2">
            <div className="">
              <input type="radio" className="absolute ml-[12px] mt-4" />
              <h5 className="text-[13px] font-poppins font-bold px-[35px]">
                Super Admin
              </h5>
              <p className="text-[10px] font-medium font-poppins px-[35px]">
                This Role manages everything on the Page.It's the Only role that
                can edit the Page and manage all admins.
              </p>
            </div>
          </div>

          <div className=" h-20  py-2 rounded-md w-full border-1 border-[#E0DDFF]  mt-2">
            <div className="">
              <input type="radio" className="absolute ml-[12px] mt-4" />
              <h5 className="text-[13px] font-poppins font-bold px-[35px]">
                Moderator
              </h5>
              <p className="text-[10px] font-medium font-poppins px-[35px]">
                This Role manages everything on the Page.It's the Only role that
                can edit the Page and manage all admins.
              </p>
            </div>
          </div>
          <div className=" text-right">
            <button className="px-3 bg-[#7065F0] mt-2 text-[10px] py-1 text-white ">
              Save
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isActive ? " bg-gray-50" : "bg-none"} ${
          isActive ? " opacity-60" : " border-opacity-100"
        }`}
      >
        <div className=" flex py-3  ">
          <h5 className="text-[#262064] font-poppins font-semibold px-32">
            Leads4Needs
          </h5>
          <div className=" ml-[452px] font-poppins text-[12px]">
            <button className="  mr-16">Manage Property</button>
            <button className=" mr-10">Blog</button>
            <button className=" bg-[#7065F0] px-4 py-[6px] rounded-md text-white">
              Log In
            </button>
          </div>
        </div>

        <div className=" px-32 py-3 text-[11px]  font-medium">
          <Link to="/user">
            <span className="ml-4 cursor-pointer no-underline text-[#7065F0]">
              User
            </span>
          </Link>
          <Link to="/pg">
            <span className="ml-10 cursor-pointer no-underline">Pg</span>
          </Link>
          <Link to="/Useradmin">
            <span className="ml-10 cursor-pointer">Admin</span>
          </Link>
          <Link to="/pending">
            <span className="ml-10 cursor-pointer">Pending</span>
          </Link>
          <hr className="text-[#7065F0]" />
        </div>

        <div className="px-32 -mt-5 -mb-4">
          <h5 className="text-[25px] font-semibold">286 users</h5>
        </div>

        <div className="flex justify-end mr-32 mb-2">
          <div className="flex">
            <button
              className="bg-[#7065F0] px-3 text-[10px] py-[6px] mr-[5px] rounded-md text-white flex"
              onClick={() => setIsActive(!isActive)}
            >
              <IoAddCircleOutline className="text-[17px] mr-3" />
              Add Role
            </button>
          </div>
        </div>
        <div className="h-[600px] w-[1010px] rounded-md border-1 border-purple-200 ml-32">
          <div className="flex gap-[420px]">
            <div>
              <CiSearch className="absolute ml-7 text-[22px] text-[#4D536A] mt-[18px]" />
              <input
                type="text"
                className="border-1 border-purple-200 placeholder:text-[#4D536A] placeholder:text-[15px] py-2 px-16 m-2 rounded-md"
                placeholder="search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className=" py-3 flex gap-2">
              <button className="bg-[#7065F0] text-[13px] text-white  py-1 flex rounded-md px-2  "  onClick={deletePgHandler}>
                <RiDeleteBin5Line className="text-[15px] mr-2" />
                Delete(5)
              </button>
              <button className="text-[13px]">
                Showing{" "}
                <span className="bg-[#B3ACFF] px-2  rounded-sm ">10 </span>{" "}
                <span className="text-[13px]"> of 67 results</span>
              </button>
            </div>
          </div>

          <div className="flex  ">
            <div className="border-1 justify-center px-3  h-[50px]">
              <input type="checkbox" className="  mt-3 flex  " />
            </div>
            <h5 className="border-1  bg-[#F1F0FE]  text-[12px] font-bold  pr-[99px] pl-8  py-3">
              NAME
            </h5>
            <h5 className="border-1 bg-[#F1F0FE]  text-[12px]  font-bold  pr-[90px] pl-8 py-3 ">
              CONTACT
            </h5>
            <h5 className="border-1 bg-[#F1F0FE]  text-[12px] font-bold   pr-[50px] pl-14 py-3">
             status
            </h5>
            <h5 className="border-1 text-[12px] bg-[#F1F0FE] font-bold  pr-[70px] pl-8 py-3">
              NO. OF PG
            </h5>
            <h5 className="border-1 text-[12px] bg-[#F1F0FE]  font-bold pr-[26px] pl-[39px] py-3">
              VIEWS
            </h5>
            <h5 className="border-1  bg-[#F1F0FE] text-[12px] font-bold  pr-[90px] pl-10  py-3">
              EDIT PROFILE
            </h5>
          </div>

          {  pgs &&

          pgs.filter((item)=>{
               if(item.status==='approve'){
                return item;
               }
          }).map((item) => (
              <>
                <div className="mt-2 flex -mb-5 gap-4">
                <input
                    type="checkbox"
                    className=" text-[20px] flex ml-4 -mt-6"
                    onChange={()=>setPgId(item._id)}
                  />
                  <div className="flex">
                    <img
                      src={item.frontImage}
                      className="h-[40px] rounded-full w-[40px]"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <h5 className="text-[12px] mt-1 ml-2">{item.name}</h5>
                      <div className="flex">
                        <AiOutlineClockCircle className="h-[10px] text-[#4D536A] w-[10px] ml-2" />
                        <p className="text-[7px] ml-1 text-[#4D536A] ">
                          {item.createdAt.split("T")[0]}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-16">
                      <div className="flex text-[#4D536A]">
                        <AiOutlineMail className="h-[10px] text-[#4D536A] w-[10px] " />
                        <p className=" font-poppins font-semibold text-[9px] ml-2">
                         {item.city}
                        </p>
                      </div>

                      <div className="flex text-[#4D536A]">
                        <BsTelephone className="h-[10px] text-[#4D536A] w-[10px] " />
                        <p className=" font-poppins font-semibold text-[9px] ml-2">
                          {item.phoneNumber}
                        </p>
                      </div>
                    </div>

                    <div className=" ml-[70px]">
                      <button className="bg-[#FF6464] px-4 py-1 text-white rounded-xl text-[11px] ">
                       {item.status}
                      </button>
                    </div>

                    <div className="ml-[94px] mt-2">
                      <h5 className=" font-semibold text-[#0026B8] font-poppins text-[12px]">
                      5
                      </h5>
                    </div>

                    <div className="ml-[140px] mt-2">
                      <h5 className=" font-semibold text-black font-poppins text-[12px]">
                          {item.impression}
                      </h5>
                    </div>

                    <div className=" ml-[90px] ">
                      <button className="px-4 bg-[#7065F0] text-[12px] py-1 rounded-md text-white">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>

                <hr className="text-[#7065F0]" />
              </>
            ))}

          {/* 

          <div className="mt-2 flex -mb-5 gap-4">
            <input type="checkbox" className=" text-[20px] flex ml-4 -mt-6" />
            <div className="flex">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="h-[40px] rounded-full w-[40px]"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-[12px] mt-1 ml-2">Charlie Quinn</h5>
                <div className="flex">
                  <AiOutlineClockCircle className="h-[10px] text-[#4D536A] w-[10px] ml-2" />
                  <p className="text-[7px] ml-1 text-[#4D536A] ">
                    Today at 4:40 p.m.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-16">
                <div className="flex text-[#4D536A]">
                  <AiOutlineMail className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    charliequinn@gmail.com
                  </p>
                </div>

                <div className="flex text-[#4D536A]">
                  <BsTelephone className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    +91 9829228892
                  </p>
                </div>
              </div>

              <div className=" ml-[70px]">
                <button className="bg-[#FF6464] px-4 py-1 text-white rounded-xl text-[11px] ">
                  Admin
                </button>
              </div>

              <div className="ml-[94px] mt-2">
                <h5 className=" font-semibold text-[#0026B8] font-poppins text-[12px]">
                  2
                </h5>
              </div>

              <div className="ml-[140px] mt-2">
                <h5 className=" font-semibold text-black font-poppins text-[12px]">
                  10
                </h5>
              </div>

              <div className=" ml-[90px] ">
                <button className="px-4 bg-[#7065F0] text-[12px] py-1 rounded-md text-white">
                  Profile
                </button>
              </div>
            </div>
          </div>
          <hr className="text-[#7065F0]" />

          <div className="mt-2 flex -mb-5 gap-4">
            <input type="checkbox" className=" text-[20px] flex ml-4 -mt-6" />
            <div className="flex">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="h-[40px] rounded-full w-[40px]"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-[12px] mt-1 ml-2">Charlie Quinn</h5>
                <div className="flex">
                  <AiOutlineClockCircle className="h-[10px] text-[#4D536A] w-[10px] ml-2" />
                  <p className="text-[7px] ml-1 text-[#4D536A] ">
                    Today at 4:40 p.m.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-16">
                <div className="flex text-[#4D536A]">
                  <AiOutlineMail className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    charliequinn@gmail.com
                  </p>
                </div>

                <div className="flex text-[#4D536A]">
                  <BsTelephone className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    +91 9829228892
                  </p>
                </div>
              </div>

              <div className=" ml-[70px]">
                <button className="bg-[#FF6464] px-4 py-1 text-white rounded-xl text-[11px] ">
                  Admin
                </button>
              </div>

              <div className="ml-[94px] mt-2">
                <h5 className=" font-semibold text-[#0026B8] font-poppins text-[12px]">
                  2
                </h5>
              </div>

              <div className="ml-[140px] mt-2">
                <h5 className=" font-semibold text-black font-poppins text-[12px]">
                  10
                </h5>
              </div>

              <div className=" ml-[90px] ">
                <button className="px-4 bg-[#7065F0] text-[12px] py-1 rounded-md text-white">
                  Profile
                </button>
              </div>
            </div>
          </div>
          <hr className="text-[#7065F0]" />

          <div className="mt-2 -mb-4 flex gap-4">
            <input type="checkbox" className=" text-[20px] flex ml-4 -mt-6" />
            <div className="flex">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="h-[40px] rounded-full w-[40px]"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-[12px] mt-1 ml-2">Charlie Quinn</h5>
                <div className="flex">
                  <AiOutlineClockCircle className="h-[10px] text-[#4D536A] w-[10px] ml-2" />
                  <p className="text-[7px] ml-1 text-[#4D536A] ">
                    Today at 4:40 p.m.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-16">
                <div className="flex text-[#4D536A]">
                  <AiOutlineMail className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    charliequinn@gmail.com
                  </p>
                </div>

                <div className="flex text-[#4D536A]">
                  <BsTelephone className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    +91 9829228892
                  </p>
                </div>
              </div>

              <div className=" ml-[70px]">
                <button className="bg-[#FF6464] px-4 py-1 text-white rounded-xl text-[11px] ">
                  Admin
                </button>
              </div>

              <div className="ml-[94px] mt-2">
                <h5 className=" font-semibold text-[#0026B8] font-poppins text-[12px]">
                  2
                </h5>
              </div>

              <div className="ml-[140px] mt-2">
                <h5 className=" font-semibold text-black font-poppins text-[12px]">
                  10
                </h5>
              </div>

              <div className=" ml-[90px] ">
                <button className="px-4 bg-[#7065F0] text-[12px] py-1 rounded-md text-white">
                  Profile
                </button>
              </div>
            </div>
          </div>
          <hr className="text-[#7065F0]" />

          <div className="mt-2 -mb-5 flex gap-4">
            <input type="checkbox" className=" text-[20px] flex ml-4 -mt-6" />
            <div className="flex">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="h-[40px] rounded-full w-[40px]"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-[12px] mt-1 ml-2">Charlie Quinn</h5>
                <div className="flex">
                  <AiOutlineClockCircle className="h-[10px] text-[#4D536A] w-[10px] ml-2" />
                  <p className="text-[7px] ml-1 text-[#4D536A] ">
                    Today at 4:40 p.m.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-16">
                <div className="flex text-[#4D536A]">
                  <AiOutlineMail className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    charliequinn@gmail.com
                  </p>
                </div>

                <div className="flex text-[#4D536A]">
                  <BsTelephone className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    +91 9829228892
                  </p>
                </div>
              </div>

              <div className=" ml-[70px]">
                <button className="bg-[#FF6464] px-4 py-1 text-white rounded-xl text-[11px] ">
                  Admin
                </button>
              </div>

              <div className="ml-[94px] mt-2">
                <h5 className=" font-semibold text-[#0026B8] font-poppins text-[12px]">
                  2
                </h5>
              </div>

              <div className="ml-[140px] mt-2">
                <h5 className=" font-semibold text-black font-poppins text-[12px]">
                  10
                </h5>
              </div>

              <div className=" ml-[90px] ">
                <button className="px-4 bg-[#7065F0] text-[12px] py-1 rounded-md text-white">
                  Profile
                </button>
              </div>
            </div>
          </div>
          <hr className="text-[#7065F0]" /> */}

          {/* <div className="mt-2 flex -mb-5 gap-4">
            <input type="checkbox" className=" text-[20px] flex ml-4 -mt-6" />
            <div className="flex">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="h-[40px] rounded-full w-[40px]"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-[12px] mt-1 ml-2">Charlie Quinn</h5>
                <div className="flex">
                  <AiOutlineClockCircle className="h-[10px] text-[#4D536A] w-[10px] ml-2" />
                  <p className="text-[7px] font-semibold ml-1 text-[#4D536A] ">
                    Today at 4:40 p.m.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-16">
                <div className="flex text-[#4D536A]">
                  <AiOutlineMail className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    charliequinn@gmail.com
                  </p>
                </div>

                <div className="flex text-[#4D536A]">
                  <BsTelephone className="h-[10px] text-[#4D536A] w-[10px] " />
                  <p className=" font-poppins font-semibold text-[9px] ml-2">
                    +91 9829228892
                  </p>
                </div>
              </div>

              <div className=" ml-[70px]">
                <button className="bg-[#FF6464] px-4 py-1 text-white rounded-xl text-[11px] ">
                  Admin
                </button>
              </div>

              <div className="ml-[94px] mt-2">
                <h5 className=" font-semibold text-[#0026B8] font-poppins text-[12px]">
                  2
                </h5>
              </div>

              <div className="ml-[140px] mt-2">
                <h5 className=" font-semibold text-black font-poppins text-[12px]">
                  10
                </h5>
              </div>

              <div className=" ml-[90px] ">
                <button className="px-4 bg-[#7065F0] text-[12px] py-1 rounded-md text-white">
                  Profile
                </button>
              </div>
            </div>
          </div>
          <hr className="text-[#7065F0]" /> */}
        </div>
      </div>
    </div>
  );
}
