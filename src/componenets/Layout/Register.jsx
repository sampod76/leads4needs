import React from 'react'
import Navbar from './Navbar'
import { AiOutlinePlus, AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
export default function Register() {
    return (
        <div>
            <Navbar />


            <div className='p-4'>
                <div className='flex gap-32'>


                    {/* left card */}
                    <div className='h-[420px] sm:block hidden p-4 w-[420px] ml-28 rounded-md bg-[#7065F0]'>
                        <h5 className=' font-poppins text-[12px] text-white font-medium'>PGWARS</h5>
                        <div className=' mt-3 flex gap-3'>

                            <div className=' mt-4 '>
                                <h5 className=' font-poppins font-semibold text-white text-[35px]'>Register your <br /><span className='text-[16px]  font-poppins font-thin'>Discover India's</span> PG with us. <br /><span className='text-[16px]  font-poppins font-thin'>vast and large growing <br /> PG website.</span> </h5>

                                <div className=' pt-12'>
                                    <div className='flex gap-3'>
                                        <img src="https://i.pinimg.com/originals/0a/0d/64/0a0d6425b397fd24f92b5d14d5c13023.jpg" className='h-[40px] w-[40px] rounded-md' alt="" />
                                        <div className='flex font-poppins text-white flex-col'>
                                        <span className='text-[14px]' >Luke Simson</span>
                                        <span className='text-[10px] text-[#BBBAFF]'>Student</span>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>


                    <div className='  '>
                        <h5 className=' font-poppins text-[30px] py-3 font-semibold'>PG Registration</h5>
                        <div className='mt-2'>
                            <div className=' '>
                                <div className='flex flex-col '>
                                    <label htmlFor="Pg name" className=' font-poppins text-[#5B5B5B] text-[15px]'> PG Name</label>
                                    <input type="text" placeholder='' className=' h-8 md:w-[420px] w-[310px] rounded-md border-[1.5px] border-[#E4E4E4]' />
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label htmlFor="Pg name" className=' font-poppins text-[#5B5B5B] text-[15px]'>Phone</label>
                                    <input type="text" placeholder='' className=' h-8 md:w-[420px] w-[310px] rounded-md border-[1.5px] border-[#E4E4E4]' />
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label htmlFor="Pg name" className=' font-poppins text-[#5B5B5B] text-[15px]'> PG Address</label>
                                    <input type="text" placeholder='' className=' h-8  md:w-[420px] w-[310px]  rounded-md border-[1.5px] border-[#E4E4E4]' />
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label htmlFor="Pg name" className=' font-poppins text-[#5B5B5B] text-[15px]'> City</label>
                                    <input type="text" placeholder='' className=' h-8 md:w-[420px] w-[310px] rounded-md border-[1.5px] border-[#E4E4E4]' />
                                </div>
                                <div className='font-poppins text-[#5B5B5B] mt-3'>
                                    <label htmlFor="">Gender</label>
                                    <div className=' mt-1  flex'>
                                        <span className='bg-[#F1F0FE] border-1 border-[#7065F0] font-poppins font-semibold text-[12px] rounded-md text-[#7065F0] md:px-12 px-8 py-2'>Male</span>
                                        <span className=' border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B] md:px-12 px-8 py-2'>Female</span>
                                        <span className=' border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B] md:px-12 px-6 py-2'>Unisex</span>
                                    </div>
                                </div>
                                <div className='font-poppins text-[#5B5B5B] mt-3'>
                                    <label htmlFor="">Types of Room Sharing</label>
                                    <div className=' mt-1  flex'>
                                        <span className='bg-[#F1F0FE] border-1 border-[#7065F0] font-poppins font-semibold text-[12px] rounded-md text-[#7065F0] md:px-6 px-2  py-2'>1 Room</span>
                                        <span className=' border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B]  md:px-6 px-2 py-2'>2 Room</span>
                                        <span className=' border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B] md:px-6 px-3 py-2'>3 Room</span>
                                        <span className=' border-1 border-[#E4E4E4] ml-3 font-poppins font-semibold text-[12px] rounded-md text-[#5B5B5B] md:px-6 px-3 py-2'>4 Room</span>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <h5 className=' font-poppins font-semibold text-[17px] -mb-3'>Room Sharing Price</h5>
                                    <hr className='text-[#7065F0]' />
                                    <div className='md:flex  gap-4'>
                                        <div className='flex flex-col  '>
                                            <label htmlFor="Pg name" className=' font-poppins font-semibold text-[#5B5B5B] text-[14px]'> Single Room Price</label>
                                            <input type="text" placeholder='' className=' h-8 md:w-52 w-[310px] mt-2 rounded-md border-[1.5px] border-[#E4E4E4]' />
                                        </div>
                                        <div className='flex flex-col '>
                                            <label htmlFor="Pg name" className=' font-poppins font-semibold text-[#5B5B5B] text-[14px]'> Double Room Price</label>
                                            <input type="text" placeholder='' className=' mt-2 h-8 md:w-52 w-[310px] rounded-md border-[1.5px] border-[#E4E4E4]' />
                                        </div>
                                    </div>

                                    <div className='md:flex mt-3 gap-4'>
                                        <div className='flex flex-col '>
                                            <label htmlFor="Pg name" className=' font-poppins font-semibold text-[#5B5B5B] text-[14px]'> Triple Room Price</label>
                                            <input type="text" placeholder='' className=' mt-2 h-8 md:w-52 w-[310px] rounded-md border-[1.5px] border-[#E4E4E4]' />
                                        </div>
                                        <div className='flex flex-col '>
                                            <label htmlFor="Pg name" className=' font-poppins font-semibold text-[#5B5B5B] text-[14px]'> Four Room Price</label>
                                            <input type="text" placeholder='' className=' mt-2 h-8 md:w-52 w-[310px] rounded-md border-[1.5px] border-[#E4E4E4]' />
                                        </div>
                                    </div>

                                    <div className='mt-3'>
                                        <h5 className=' font-poppins text-[15px] text-[#5B5B5B] font-semibold'>Upload Images</h5>

                                        <div className='md:flex gap-3  '>
                                            <div className=' h-52 w-48 border-[1.4px] rounded-md border-[#E4E4E4]'>
                                                <div className=' '>
                                                    {/* <AiOutlinePlus className='absolute -mb-16s h-10  w-10'/> */}
                                                    <p className=' mt-20 text-center'>Cover Image</p>
                                                </div>
                                            </div>
                                            <div className=' h-52 w-48  border-[1.4px] rounded-md border-[#F1F0FB]'>
                                                <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className=' rounded-tl-md rounded-tr-md h-[50%] w-full ' alt="" />

                                                <div className='p-3'>

                                                    <div className='h-5 w-16 rounded-md bg-[#7065F0]'> </div>
                                                    <div className='h-3 mt-1 w-16 rounded-lg bg-black'> </div>
                                                    <div className='h-3 mt-1 w-32 rounded-lg bg-[#878787] -mb-2'> </div>
                                                    <hr className='text-[#c3c0dd]' />

                                                    <div className='flex gap-2'>
                                                        <div className='h-[10px] w-[10px] -mt-2 rounded-full bg-[#7065F0] '></div>
                                                        <div className='h-[10px] w-[35px] -mt-2 rounded-sm bg-[#878787] '></div>
                                                        <div className='h-[10px] w-[10px] -mt-2 rounded-full bg-[#7065F0] '></div>
                                                        <div className='h-[10px] w-[35px] -mt-2 rounded-sm bg-[#878787] '></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-3'>
                                        <div className=' md:h-20 h-36 p-2 rounded-md border-[#D9D9D9] border-[1.4px]'>
                                            <div className='flex gap-2 flex-wrap'>
                                                <div className='h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]'></div>
                                                <div className='h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]'>
                                                    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='h-14 w-16 rounded-md' />
                                                </div>
                                                <div className='h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]'>
                                                    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='h-14 w-16 rounded-md' />
                                                </div>
                                                <div className='h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]'>
                                                    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='h-14 w-16 rounded-md' />
                                                </div>
                                                <div className='h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]'>
                                                    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='h-14 w-16 rounded-md' />
                                                </div>
                                                <div className='h-14 w-16 rounded-md border-[#D9D9D9] border-[1.4px]'>
                                                    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='h-14 w-16 rounded-md' />
                                                </div>

                                            </div>
                                        </div>

                                        <div className='flex justify-end mt-2 sm:pr-2'>
                                            <button className='bg-[#7065F0] font-poppins text-[12px] px-5 py-[10px] font-semibold mr-2 rounded-md text-white  '>Create PG</button>


                                        </div>

                                    </div>


                                </div>






                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}
