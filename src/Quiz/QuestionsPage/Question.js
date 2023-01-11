import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { SiJava } from "react-icons/si";
import { FaChevronCircleLeft } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

const Question = () => {
    const [quizAns ,setQuizAns]=useState(0)
    return (
        <div className='max-w-[1440px] mx-auto text-white font-Poppins min-h-screen relative bg-[#1e2736]'>
            <div className='flex '>
                <div className='w-[40%]'>

                    <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")` }} className='w-full h-full bg-cover bg-no-repeat  flex items-center justify-center'>
                        <h1 className='flex justify-center items-center '>JAVA</h1>
                        <div className='flex gap-2 absolute top-[3%] left-[5%]'>
                            <FaChevronCircleLeft className='text-xl mt-1'></FaChevronCircleLeft>
                            <p className='text-xl'>Back to main menu</p>
                        </div>

                    </div>
                </div>
                <div className='w-[60%] bg-[#1e2736] p-2'>
                    <div className='flex justify-between mx-6 items-center'>
                        <div>
                            <div className='flex gap-2 items-center'>

                                <TiTick className='text-xl '></TiTick>
                                <h1 className='p-1 w-20 bg-blue-400 rounded-3xl'> </h1>
                                <span className=''> 12</span>
                            </div>
                            <div className='flex gap-2 items-center'>

                                <RxCross2 className='text-xl '></RxCross2>
                                <h1 className='p-1 w-36 bg-blue-400 rounded-3xl'> </h1>
                                <span className=''>20</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h6 className='text-blue-500'>TIME REMAINING</h6>
                            <p className='px-2.5 py-2 rounded-full border-2'>30</p>
                        </div>
                    </div>
                    <hr className='bg-black p-[2px]' />
                    <div className='mx-6'>
                        <h6 className='text-blue-500'>QUESTION 1</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati eius tempora ab unde possimus recusandae officiis illum optio, dolorum voluptatum ipsum veritatis soluta omnis praesentium itaque laborum quis inventore.</p>
                        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" className='w-full max-h-60' />
                        <div className='mt-4 space-y-3'>
                            <div className='p-2 border-2 flex gap-2 items-center  w-full'>
                                <input type="radio" name="quiz" id="1" />
                                <label htmlFor="1">Alvasst</label>
                            </div>
                            <div className='p-2 border-2 flex gap-2 items-center  w-full'>
                                <input type="radio" name="quiz" id="2" />
                                <label htmlFor="2">forloop</label>
                            </div>
                            <div className='p-2 border-2 flex gap-2 items-center  w-full'>
                                <input type="radio" name="quiz" id="3" />
                                <label htmlFor="3">Function</label>
                            </div>
                            <div className='p-2 border-2 flex gap-2 items-center  w-full'>
                                <input type="radio" name="quiz" id="4" />
                                <label htmlFor="4">classname</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#1e2736] p-3 flex justify-between gap-3 items-center sticky bottom-0 w-full '>
                <div className='flex gap-2 items-center'>
                    <SiJava className='text-3xl'></SiJava>
                    <h6 className='mt-2'><span className='text-blue-400'>Java</span>/Javainheritance</h6>

                </div>
                <div className='w-[90%]'>
                    <ProgressBar completed={80} />
                </div>
                <div className='flex gap-2 '>
                    <button className='px-4 py-3 bg-red-400 text-lg whitespace-nowrap '>LEAVE QUIZ</button>
                    <button className='px-4 py-3 bg-green-400 text-lg whitespace-nowrap '>NEXT QUESTION</button>
                </div>
            </div>
        </div>
    );
};

export default Question;