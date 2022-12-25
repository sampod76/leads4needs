import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { IconCE, PythonIcon } from '../Svg';
import CourseArticleHeader from './CourseArticleHeader';
import SarIcon from './Img/Group 72.png'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import '../TheoryAll.css'
import { Link } from 'react-router-dom';
import ArticleList_Leftside from './ArticleList_Leftside';
const CourseArticle = () => {

    return (
        <div className=' bg-[#1E2736] text-white min-h-screen font-Poppins'>
            <CourseArticleHeader></CourseArticleHeader>
            <div className=' bg-[#333F50]  p-3 shadow-lg'>
                <div className='max-w-[1040px] mx-auto py-3 flex justify-between '>
                    <a href=" " className='no-underline relative text-blue-500'>JavaScript</a>
                    <a href=" " className='no-underline relative text-white'>C</a>
                    <a href=" " className='no-underline relative text-white'>C#</a>
                    <a href=" " className='no-underline relative text-white'>JAVA</a>
                    <a href=" " className='no-underline relative text-white'>C++</a>
                    <a href=" " className='no-underline relative text-white'>PHP</a>

                </div>
            </div>
            <main className='max-w-[1040px] mx-auto flex gap-14 justify-between relative p-3'>

                <ArticleList_Leftside></ArticleList_Leftside>
                <div className='w-full relative '>
                    <button className='absolute -top-4 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden'>All Topics</button>
                    <div className='flex justify-between mt-3'>
                        <div>

                        </div>
                        <p className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></p>
                        <p className='text-3xl  no-underline text-[#01B6FF]'>Python Variables</p>
                        <p className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill> <span className='mt-2'>Next</span></p>
                        <div className='flex lg:hidden gap-2 '>
                            <BsFillArrowLeftCircleFill className='text-4xl'></BsFillArrowLeftCircleFill>
                            <BsFillArrowRightCircleFill className='text-4xl'></BsFillArrowRightCircleFill>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-[#01B6FF]'>What is Python Variable, and how is Python vairiable declaration ?</h5>
                        <div className='text-[#9EB2D2]'>
                            <p>

                                1. Variable is the name of a memory location in which we can store the value
                            </p>
                            <p>

                                2. python variable can change the variable value
                            </p>
                            <p>

                                3. A variable is defined by combining an identifier, data types, and an initializer.
                            </p>
                            <p>

                                4. The first character in the variable name must be an alphabet, underscore, a
                            </p>
                            digit, or a dollar sign.
                            <p>

                                5. All variables have a scope
                            </p>
                            <p>

                                6. The identifier is the name of the variable
                            </p>
                            <p>

                                7.  Commas or blanks not used inside a variable name
                            </p>

                        </div>
                        <h5 className='text-[#01B6FF]'>Python Variable Declaration Syntax:
                        </h5>

                        <div className='bg-[#000000] p-3'>
                            <code>
                                <span className='text-yellow-400'>variable-name</span> = <span className='text-[#83CB8F]'>assigned value</span> <br />
                                <span className='text-red-500'>x</span> = 5 <br />
                                <span className='text-red-500'>x</span> is a <span className='text-[#EB00FF]'>Variable Name</span> <br />
                                = is a <span className='text-[#EB00FF]'>Assignment Operator</span>  <br />
                                5 is a <span className='text-[#EB00FF]'>Assigned Value to the</span>  <span className='text-orange-600'>Variable Name</span>

                            </code>
                        </div>

                        <h5 className='text-[#01B6FF] mt-2'>Addition of Variables Examples:</h5>
                        <div className='bg-[#000000] p-3'>
                            <code>
                                <span className='text-yellow-400'>variable-name</span> = <span className='text-[#83CB8F]'>assigned value</span> <br />
                                <span className='text-red-500'>x</span> = 5 <br />
                                <span className='text-red-500'>x</span> is a <span className='text-[#EB00FF]'>Variable Name</span> <br />
                                = is a <span className='text-[#EB00FF]'>Assignment Operator</span>  <br />
                                5 is a <span className='text-[#EB00FF]'>Assigned Value to the</span>  <span className='text-orange-600'>Variable Name</span>

                            </code>
                        </div>
                        <h5 className='text-[#01B6FF]'>What is Python Variable, and how is Python vairiable declaration ?</h5>
                        <div className='text-[#9EB2D2]'>
                            <p>

                                1. Variable is the name of a memory location in which we can store the value
                            </p>
                            <p>

                                2. python variable can change the variable value
                            </p>
                            <p>

                                3. A variable is defined by combining an identifier, data types, and an initializer.
                            </p>
                            <p>

                                4. The first character in the variable name must be an alphabet, underscore, a
                            </p>
                            digit, or a dollar sign.
                            <p>

                                5. All variables have a scope
                            </p>
                            <p>

                                6. The identifier is the name of the variable
                            </p>
                            <p>

                                7.  Commas or blanks not used inside a variable name
                            </p>

                        </div>
                        <h5 className='text-[#01B6FF]'>What is Python Variable, and how is Python vairiable declaration ?</h5>
                        <div className='text-[#9EB2D2]'>
                            <p>

                                1. Variable is the name of a memory location in which we can store the value
                            </p>
                            <p>

                                2. python variable can change the variable value
                            </p>
                            <p>

                                3. A variable is defined by combining an identifier, data types, and an initializer.
                            </p>
                            <p>

                                4. The first character in the variable name must be an alphabet, underscore, a
                            </p>
                            digit, or a dollar sign.
                            <p>

                                5. All variables have a scope
                            </p>
                            <p>

                                6. The identifier is the name of the variable
                            </p>
                            <p>

                                7.  Commas or blanks not used inside a variable name
                            </p>

                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default CourseArticle;