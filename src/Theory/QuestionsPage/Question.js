import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { SiJava } from "react-icons/si";
import { FaChevronCircleLeft } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import './progressBarCss.css'

export const Question = () => {
    const [quizAnsCss, setQuizAnsCss] = useState('')
    // console.log(quizAnsCss)

    return (
        <div className='max-w-[1440px] mx-auto text-white font-Poppins min-h-screen relative '>
            <div className='flex '>
                <div className='w-[40%] hidden md:block'>

                    <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")` }} className='w-full h-full bg-cover bg-no-repeat  flex items-center justify-center'>
                        <h1 className='flex justify-center items-center '>JAVA</h1>
                        <div className='flex gap-2 absolute top-[3%] left-[5%]'>
                            <FaChevronCircleLeft className='text-xl mt-1'></FaChevronCircleLeft>
                            <p className='text-xl'>Back to main menu</p>
                        </div>

                    </div>
                </div>
                <div className='w-full md:w-[60%] bg-[#1e2736] p-2'>
                    <div className='flex justify-between mx-6 items-center'>
                        <div>
                            <div className='flex gap-2 items-center'>

                                <TiTick className='text-xl '></TiTick>
                                <div className='p-1 w-20 bg-blue-400 rounded-3xl'> </div>
                                <span className=''> 12</span>
                            </div>
                            <div className='flex gap-2 items-center'>

                                <RxCross2 className='text-xl '></RxCross2>
                                <div className='p-1 w-28 md:w-36 bg-blue-400 rounded-3xl'> </div>
                                <span className=''>20</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h6 className='text-blue-500 text-sm md:text-lg'>TIME REMAINING</h6>
                            <p className='px-2.5 py-2 rounded-full border-2'>30</p>
                        </div>
                    </div>
                    <hr className='bg-black p-[2px]' />
                    <div className='mx-6'>
                        <h6 className='text-blue-500'>QUESTION 1</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati eius tempora ab unde possimus recusandae officiis illum optio, dolorum voluptatum ipsum veritatis soluta omnis praesentium itaque laborum quis inventore.</p>
                        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" className='w-full max-h-80' />
                        <div className='mt-4 space-y-3'>
                            <div className={`p-2 border-2 flex gap-2 items-center  w-full ${quizAnsCss == '1' && 'border-blue-500'}`} >
                                <input onClick={(e) => setQuizAnsCss(e.target.value)} type="radio" name="quiz" id="1" value={1} />
                                <label htmlFor="1">Alvasst</label>
                            </div>
                            <div className={`p-2 border-2 flex gap-2 items-center  w-full ${quizAnsCss == '2' && 'border-blue-500'}`} >
                                <input onClick={(e) => setQuizAnsCss(e.target.value)} type="radio" name="quiz" id="2" value={2} />
                                <label htmlFor="2">forloop</label>
                            </div>
                            <div className={`p-2 border-2 flex gap-2 items-center  w-full ${quizAnsCss == '3' && 'border-blue-500'}`} >
                                <input onClick={(e) => setQuizAnsCss(e.target.value)} type="radio" name="quiz" id="3" value={3} />
                                <label htmlFor="3">Function</label>
                            </div>
                            <div className={`p-2 border-2 flex gap-2 items-center  w-full ${quizAnsCss == '4' && 'border-blue-500'}`} >
                                <input onClick={(e) => setQuizAnsCss(e.target.value)} type="radio" name="quiz" id="4" value={4} />
                                <label htmlFor="4">classname</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#1e2736] p-3  sticky bottom-0 grid md:grid-cols-12 gap-3 items-center'>
                <div className='col-span-12 md:col-span-3'>

                    <div className='flex gap-2 items-center'>
                        <SiJava className='text-3xl'></SiJava>
                        <h6 className='mt-2'><span className='text-blue-400 text-lg'>Java</span>/Javainheritance</h6>

                    </div>
                </div>
                <div className='col-span-12 md:col-span-6'>
                    <ProgressBar
                        completed={70}
                        className="wrapper"
                        barContainerClassName="containerBar"
                        completedClassName="barCompleted"
                    />
                </div>
                {/* LEAVE QUIZ
                NEXT QUESTION
                 */}
                <div className='col-span-12 md:col-span-3'>

                    <div className='flex justify-between md:justify-end gap-2 '>
                        <button type='submit' className=' bg-red-400 text-base px-2 py-1 whitespace-nowrap uppercase'>leave quiz</button>
                        <button type='submit' className=' bg-green-400 text-base px-2 py-1 whitespace-nowrap uppercase'>next question</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

