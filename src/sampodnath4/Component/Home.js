import React, { useState } from 'react';
import Card from './Card';
import { AiOutlineEye } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import './Home.css'
import { TagsInput } from "react-tag-input-component";

const Home = () => {
    const [selected, setSelected] = useState(["papaya"]);
    console.log(selected);
    return (
        <div className='flex justify-between gap-[7%] p-1  '>

            <div className='hidden md:block'>
                <div className=''>

                    <Card></Card>
                </div>
            </div>
            <div className=' font-semibold '>
                <h1 className='md:text-3xl font-bold text-black mb-4'>Add PG</h1>
                <form className=' flex flex-col gap-3 ' >
                    <div className='flex flex-col   '>

                        <label className='mb-1'>PG Name</label>
                        <input className='border-2 rounded-lg border-gray-200 mt-1 p-1' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col   '>

                        <label className='mb-1'>Phone</label>
                        <input className='border-2 rounded-lg border-gray-200 mt-1 p-1' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col   '>

                        <label className='mb-1'>PG Address</label>
                        <input className='border-2 rounded-lg border-gray-200 mt-1 p-1' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col   '>

                        <label className='mb-1'>City</label>
                        <input className='border-2 rounded-lg border-gray-200 mt-1 p-1' type="text" name="" id="" />
                    </div>

                    <div className=''>
                        <h1 className='mb-1 text-lg'>Gender</h1>
                        <div className='flex justify-around gap-2 md:gap-10 sm:text-lg'>
                            <div className='rounded-lg text-center  sm:p-1 border-2 w-full h-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Male</label>
                            </div>
                            <div className='rounded-lg text-center  sm:p-1 border-2 w-full h-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Female</label>
                            </div>
                            <div className='rounded-lg text-center  sm:p-1 border-2 w-full h-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Unisex</label>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-1 text-lg'>Types of Room Sharing</h1>
                        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-6 md:text-lg '>
                            <div className='rounded-lg text-center smm:p-1 border-2 w-full h-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">1 room</label>
                            </div>
                            <div className='rounded-lg text-center sm:p-1 border-2 w-full h-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">2 room</label>
                            </div>
                            <div className='rounded-lg text-center sm:p-1 border-2 w-full h-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">3 room</label>
                            </div>
                            <div className='rounded-lg text-center sm:p-1 border-2 w-full h-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">4 room</label>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='my-2 font-bold text-lg'>Room Sharing Price</h1>
                        <hr />

                        <div className='grid grid-cols-2 gap-3 mt-1'>
                            <div >
                                <h1 className='text-lg' >Single Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 mt-1 p-1  w-full' h-full />
                            </div>
                            <div className=''>
                                <h1 className='text-lg'>Double Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 mt-1 p-1  w-full' h-full />
                            </div>
                            <div className=''>
                                <h1 className='text-lg'>Triple Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 mt-1 p-1  w-full' h-full />
                            </div>
                            <div className=''>
                                <h1 className='text-lg'>Four Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 mt-1 p-1  w-full' h-full />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>Add Tag</h4>
                        {/* <pre className='flex'>{selected.map(se=><p >,{se}</p>)}</pre> */}
                        <TagsInput
                            value={selected}
                            onChange={setSelected}
                            name="fruits"
                            placeHolder="enter fruits"
                        />
                    </div>

                    <div className=''>
                        <h1 className='my-2 text-lg'>Upload Images</h1>
                        <div className='flex gap-4 ' >
                            <div className='flex flex-col justify-center items-center rounded-lg border-2 border-gray-300  w-60 h-[16.8125rem] text-center'>
                                <h1 className='text-lg'>+</h1>
                                <h1 className='text-lg'>Cover Image</h1>
                            </div>
                            <div className='w-60 h-[16.8125rem]  rounded-lg border-2 border-gray-300 relative uplode '>
                                <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className='h-[50%] w-full rounded-t-lg' />
                                <div className='px-2'>
                                    <h1 className=' rounded-2xl bg-[#7065F0] w-[30%] '> </h1>
                                    <h1 className=' p-1 rounded-2xl bg-[#7065F0] w-[30%]   '> </h1>
                                    <h1 className='p-2 rounded-2xl bg-[#7065F0] w-[40%]   '> </h1>
                                    <h1 className='p-2 rounded-2xl bg-[#000929] w-[40%]   '> </h1>
                                    <h1 className='p-2 rounded-2xl bg-[#878787] w-[80%]   '> </h1>


                                </div>
                                <i className='top-[43%]'>
                                    <div className='flex gap-1'>
                                        <p className='w-6 h-6 mt-2 ml-3 rounded-full bg-white'></p>
                                        <p className='w-12 h-5 mt-2 ml-3 rounded-xl bg-white'></p>

                                    </div>
                                </i>

                                <div className='flex gap-1 justify-around '>
                                    <div className='flex gap-[4px]'>
                                        <p className='w-5 h-5 mt-1  rounded-full bg-[#7065F0]'></p>
                                        <p className='w-12 h-5 mt-1  rounded-lg bg-[#878787]'></p>

                                    </div>
                                    <div className='flex gap-[4px]'>
                                        <p className='w-5 h-5 mt-1  rounded-full bg-[#7065F0]'></p>
                                        <p className='w-12 h-5 mt-1  rounded-lg bg-[#878787]'></p>

                                    </div>
                                    <div className='flex gap-[4px]'>
                                        <p className='w-5 h-5 mt-1  rounded-full bg-[#7065F0]'></p>
                                        <p className='w-12 h-5 mt-1  rounded-lg bg-[#878787]'></p>

                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>


                    <div className=' border-2 border-gray-300 p-[0.685rem] rounded-lg'>
                        <div className='grid grid-cols-6 gap-1 justify-between items-center'>
                            <div className='flex flex-col justify-center items-center border-2 border-gray-300 rounded-xl xl:h-[9rem] lg:h-[7rem] md:h-[5rem] text-center  sm:text-xs'>
                                <h1 className=' text-[10px] md:text-base'>+</h1>
                                <h1 className=' text-[10px] md:text-base'>More</h1>
                                <h1 className=' text-[8px]'>Uplode 5 image</h1>
                            </div>
                            <div className='  h-full bg-black rounded-lg relative'>
                                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className=' w-full h-full  opacity-70 rounded-lg' />

                                <AiOutlineEye className='lg:text-4xl text-3xl text-white absolute top-[35%]'></AiOutlineEye>
                                <FiTrash2 className='lg:text-4xl text-3xl text-white absolute top-[35%] left-[60%] opacity-60'></FiTrash2>

                            </div>
                            <div className='  h-full bg-black rounded-lg'>
                                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className=' w-full h-full  opacity-70 rounded-lg' />
                            </div>
                            <div className='  h-full bg-black rounded-lg'>
                                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className=' w-full h-full  opacity-70 rounded-lg' />
                            </div>
                            <div className='  h-full bg-black rounded-lg'>
                                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className=' w-full h-full  opacity-70 rounded-lg' />
                            </div>
                            <div className='  h-full bg-black rounded-lg'>
                                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className=' w-full h-full  opacity-70 rounded-lg' />
                            </div>


                        </div>
                    </div>
                    <div className='flex justify-end gap-2 '>
                        <button className='bg-[#7065F0] sm:p-3 p-1 rounded-lg text-center text-lg sm:w-[30%] text-white font-bold'>Approved</button>
                        <button className='bg-[#7065F0] sm:p-3 p-1 rounded-lg text-center text-lg sm:w-[30%] text-white font-bold'>Reject</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Home;