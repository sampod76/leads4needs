import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { IconCE } from '../Svg';
import CourseArticleHeader from './CourseArticleHeader';
import SarIcon from './Img/Group 72.png'
const CourseArticle = () => {

    return (
        <div className=' bg-[#1E2736] text-white min-h-screen'>
            <CourseArticleHeader></CourseArticleHeader>
            <div className=' bg-[#333F50]  py-3 shadow-lg'>
                <div className='max-w-[1040px] mx-auto py-3 flex justify-between '>
                    <a href="" className='no-underline text-blue-500'>JavaScript</a>
                    <a href="" className='no-underline text-white'>C</a>
                    <a href="" className='no-underline text-white'>C#</a>
                    <a href="" className='no-underline text-white'>JAVA</a>
                    <a href="" className='no-underline text-white'>C++</a>
                    <a href="" className='no-underline text-white'>PHP</a>
                </div>
            </div>
            <main className='max-w-[1040px] mx-auto'>

            </main>
        </div>
    );
};

export default CourseArticle;