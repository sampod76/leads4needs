import React, { useState } from 'react';
import Card from './Card';
import { AiOutlineEye } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import './Home.css'
import { TagsInput } from "react-tag-input-component";

const Home = () => {
    const [selected, setSelected] = useState(["papaya"]);
    const [roomSelect,setRoomSelect]=useState(0)
    // console.log(roomSelect)
 
    return (
        <div className=' p-4 container mx-auto '>
            <section className='flex justify-between gap-7 md:gap-12'>

                <div className='hidden mdd:block  '>


                    <Card></Card>

                </div>
                <div className=' font-semibold w-full '>
                    <h1 className='md:text-3xl font-bold text-black mb-4'>Registration</h1>
                    <form className=' flex flex-col gap-3 ' >
                        <div className='flex flex-col   '>

                            <label className='mb-1'>Business/Shop Name</label>
                            <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col   '>

                            <label className='mb-1'>Business Owner Name</label>
                            <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col   '>

                            <label className='mb-1'>Business/Shop Address</label>
                            <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col   '>

                            <label className='mb-1'>City</label>
                            <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col   '>

                            <label className='mb-1'>Phone</label>
                            <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
                        </div>
                        <div className='flex flex-col   '>

                            <label className='mb-1'>Email</label>
                            <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="email" name="" id="" />
                        </div>
                        <div className='flex flex-col   '>

                            <label className='mb-1'>Business Category</label>
                            <input className='focus:outline focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2' type="text" name="" id="" />
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
                            <h1 className='my-2 font-bold text-lg'>Business Timings</h1>
                            <hr />

                            <div className='grid grid-cols-2 gap-3 mt-1'>
                                <div >
                                    <h1 className='text-lg' >Opening Time</h1>
                                    <input type="text" name="" id="" className=' focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2  w-full '  />
                                </div>
                                <div className=''>
                                    <h1 className='text-lg'>Closing Time</h1>
                                    <input type="text" name="" id="" className=' focus:outline-sky-600 border-2 rounded-lg border-gray-200 mt-1 p-2  w-full  ' />
                                </div>
                                
                            </div>
                        </div>
                      

                        <div className=''>
                            <h1 className='my-2 text-lg'>Upload Images</h1>
                            <div className='flex gap-4 ' >
                                <div className='flex flex-col justify-center items-center rounded-lg border-2 border-gray-300  w-40 h-[12rem] smm:w-60 smm:h-[16.8125rem] text-center'>
                                    <h1 className='text-lg'>+</h1>
                                    <h1 className='text-lg'>Cover Image</h1>
                                </div>
                                <div className='w-40 h-[12rem] smm:w-60 smm:h-[16.8125rem]  rounded-lg border-2 border-gray-300   '>
                                    <div className='h-[50%]'>

                                        <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className=' w-full rounded-t-lg h-full' />
                                    </div>
                                    <div className='relative uplode h-[50%]'>

                                        <div className='px-2 space-y-2'>
                                          
                                            <div className='p-2  rounded-2xl  w-[30%]   '/> 
                                            <div className='p-2 rounded-2xl bg-[#7065F0] w-[40%]   '/> 
                                            <div className='p-2 rounded-2xl bg-[#000929] w-[40%]   '/> 
                                            <div className='p-2 rounded-2xl bg-[#878787] w-[80%]   '/> 



                                        </div>

                                        <div className='hidden smm:flex gap-1 justify-around mt-1 p-1'>
                                          
                                            <div className='flex gap-[4px]'>
                                                <p className='w-2 h-2 mt-[2px] smm:w-5 smm:h-5 smm:mt-1  rounded-full bg-[#7065F0]'></p>
                                                <p className='w-7 h-2 mt-[2px] smm:w-12 smm:h-5 smm:mt-1  rounded-lg bg-[#878787]'></p>

                                            </div>
                                            <div className='flex gap-[4px]'>
                                                <p className='w-2 h-2 mt-[2px] smm:w-5 smm:h-5 smm:mt-1  rounded-full bg-[#7065F0]'></p>
                                                <p className='w-7 h-2 mt-[2px] smm:w-12 smm:h-5 smm:mt-1  rounded-lg bg-[#878787]'></p>

                                            </div>
                                            <div className='flex gap-[4px]'>
                                                <p className='w-2 h-2 mt-[2px] smm:w-5 smm:h-5 smm:mt-1  rounded-full bg-[#7065F0]'></p>
                                                <p className='w-7 h-2 mt-[2px] smm:w-12 smm:h-5 smm:mt-1  rounded-lg bg-[#878787]'></p>

                                            </div>
                                        </div>
                                        <i className='top-[-29%] smm:top-[-22%]'>
                                            <div className='flex gap-1'>
                                                <p className='w-6 h-6 mt-2 ml-3 rounded-full bg-white'></p>
                                                <p className='w-12 h-5 mt-2 ml-3 rounded-xl bg-white'></p>

                                            </div>
                                        </i>
                                    </div>


                                </div>



                            </div>
                        </div>


                        <div className='mt-2 border-2 border-gray-300 p-[0.685rem] rounded-lg'>
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
                            <button className='bg-[#7065F0] p-3  rounded-lg text-center text-lg sm:w-[30%] text-white font-bold'>Approved</button>
                            <button className='bg-[#7065F0] p-3  rounded-lg text-center text-lg sm:w-[30%] text-white font-bold'>Reject</button>
                        </div>

                    </form>

                </div>
            </section>


        </div>
    );
};

export default Home;