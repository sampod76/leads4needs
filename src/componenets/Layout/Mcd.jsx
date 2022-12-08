import React from 'react'
import Navbar from './Navbar'
import { AiFillStar, AiOutlinePlus,AiOutlineHeart,AiOutlineClockCircle,AiOutlineEye } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { BsArrow90DegRight } from "react-icons/bs";
import  CardData1  from './utils/Card1';
import { FaMale } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Mcd({user}) {
    return (
        <div>
            <div className='flex w-full top-0 bg-white z-[60] h-auto  sticky'>
                <Navbar />
            </div>

            <div className=''>
                
                <img src="https://images.unsplash.com/photo-1606720335177-3d04e70fb13b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWNkb25hbGRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className='w-full h-[270px]' />
            </div>

            <div className='py-4 ms:px-6 md:px-40'>

                <div className=' border-[0.50px] px-6 py-4 md:h-[300px] bg-white -mt-16 relative rounded-md border-[#D0D0D0]'>
                    <div className='flex gap-3'>
                        <img src="https://images.unsplash.com/photo-1606720335177-3d04e70fb13b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWNkb25hbGRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className='h-[75px] w-[75px] rounded-xl' />
                        <div className=' font-poppins flex flex-col'>
                            <div>
                                <h5 className='text-[#423D74] -mb-[1px] font-semibold'>{user && user.name}</h5>
                            </div>
                            <span className='text-[#878787] flex flex-col text-[12px]'>Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi Mumbai,<span> Maharashtra 400614</span></span>

                            <div className='mt-1 text-[12px] flex gap-2 font-poppins items-center'>
                                <AiFillStar className='text-[#FFA800]' />
                                <div className=' flex gap-3'>
                                    <span className='text-[#423D74] font-semibold'>4.8<span className='text-[#878787]'>/5</span></span>
                                    <span className='flex gap-2 text-[#484ECE] items-center'><FiLink />mcdonalds.com</span>
                                </div>
                            </div>
                        </div>

                        <div className='md:flex gap-2 sm:block hidden md:absolute md:ml-[750px]'>
                            <button className='border-1 flex gap-1 items-center font-poppins text-[14px] px-2 py-[6px] rounded-md text-[#878787] border-[#B4B4B4]'><BsArrow90DegRight />Share</button>
                            <button className=' text-[white] bg-[#7065F0]  font-poppins text-[14px] px-2 py-[6px] rounded-md'>Call Now</button>
                        </div>
                    </div>

                    <div className='mt-8 '>
                        <div className='flex font-poppins justify-around md:px-4 py-3 rounded-md bg-[#F7F6FF] md:w-[50%]' >
                            <div className='flex flex-col'>
                                <span className='font-semibold'>52</span>
                                <span>Total Businesses</span>
                            </div>
                            <div className=' border-1 bg-[#C4BDFF]'>

                            </div>
                            <div className='flex flex-col'>
                                <span className='font-semibold'>52</span>
                                <span>Total views/month</span>
                            </div>
                        </div>
                    </div>
                    <div className=' font-poppins mt-4 '>
                        <h5 className='text-[#423D74] font-semibold text-[15px]'>About us</h5>
                        <p className='text-[14px] text-[#878787]'>Welcome to our happy meals store and bring your families and friends along and enjoy exciting offers !!!</p>
                    </div>
                    <div className='flex gap-2 sm:hidden md:absolute md:ml-[750px]'>
                            <button className='border-1 flex gap-1 items-center font-poppins text-[14px] px-2 py-[6px] rounded-md text-[#878787] border-[#B4B4B4]'><BsArrow90DegRight />Share</button>
                            <button className=' text-[white] bg-[#7065F0]  font-poppins text-[14px] px-2 py-[6px] rounded-md'>Call Now</button>
                        </div>
                </div>
                <div className=' mt-4 '>
                    <div className='flex items-center font-poppins justify-between'>
                        <h5 className='text-[#423D74] font-semibold'>Properties</h5>
                        <button className='flex border-1 gap-1 px-1 py-[2px] rounded-md border-[#878787] text-[#878787] items-center'><AiOutlinePlus />Add New</button>
                    </div>

                    <div className='flex flex-wrap md:gap-4 w-full items-center  justify-center'>
                        {user && user.ownedPGSList && user.ownedPGSList.map(item => (
                            <Link to={`/view/${item._id}`} style={{textDecoration:"none"}}>
                          
                            <div className='flex mt-4 relative'>

                                <div className=' mt-[146px] relative'>
                                    <span className='flex gap-1 md:ml-48 ms:ml-[233px] items-center px-3 shadow-3xl py-[5px] rounded-2xl rounded-br-sm absolute z-50  text-[15px] bg-[#7065F0] font-poppins font-semibold text-white'>3<AiFillStar className='text-[#FF9900]'/>stars</span>
                                <div className='h-4 w-3 absolute mt-[30px] ml-[320px] shadow-xl md:ml-[279px] rounded-br-xl  bg-[#665ae8]'></div>
                                
                                </div>
                                <div className='h-[350px]  md:w-[280px]  bg-white rounded-md border-[1.4px] border-[#F1F0FB] '>
                                    <img src={item.frontImage} className=' rounded-tl-md rounded-tr-md h-[50%] w-full ' alt="" />


                                    <div className='p-2 mt-[20px]'>
                                        <div className='flex justify-between '>
                                            <h5 className=' font-poppins font-semibold text-[#7065F0] text-[15px]'>mudjao yaha se miliyomat </h5>
                                           
                                        </div>
                                        <div>
                                            <h5 className=' font-poppins font-semibold text-black text-[16px]'>{item.name}</h5>
                                        </div>
                                        <div>
                                            <p className='text-[#878787] font-poppins font-medium text-[12px]'>{item.city}</p>
                                        </div>
                                        <hr className='text-[#c2c1d5] -mt-1' />
                                        <div className='flex justify-between px-2'>
                                            <div className='flex gap-1 items-center'>
                                                <AiOutlineClockCircle className='text-[#7065F0]' /><span className=' font-poppins text-[10px] text-[#878787] font-medium'>11:00 a.m-6:00 p.m.</span>
                                            </div>
                                            <div className='flex text-[#FF0000] gap-2'>
                                            <AiOutlineEye className='' />
                                                 <span className=' font-poppins  text-[12px]'>{item.impression}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            ))}</div>
                </div>
            </div>
        </div>
    )
}
