import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { IconCE } from '../Svg';
import SarIcon from './Img/Group 72.png'

const CourseArticleHeader = () => {
    return (
        <div className=' bg-[#1E2736]   shadow-xl '>
        <head className='flex justify-between items-center max-w-[1440px] mx-auto p-3 z-10 '>

            <h1 className='flex gap-1 items-center'><span><IconCE className={'w-14'}></IconCE></span> Code<span className='text-[#01B6FF]'>Exempler</span></h1>

            <a href="" className='no-underline text-white text-xl'>QUIZ</a>
            <a href="" className='no-underline text-white text-xl'>TUTORIAL</a>
            <a href="" className='no-underline text-white text-xl'>CERTIFICATE</a>
            <a href="" className='no-underline text-white text-xl'>EXAMS</a>

            <div className='flex gap-3 justify-between items-center'>
                <div className='space-y-1 flex flex-col items-end'>
                    <div className='bg-white w-60 flex justify-end rounded-3xl'>
                        <div className='p-1.5 w-[30%] rounded-3xl bg-[#01B6FF]'>

                        </div>
                    </div>
                    <p className='text-base text-[#9EB2D2]'>25 more points to unlock your rank !</p>
                    <p className='text-base text-[#9EB2D2]'>Rank: <span className='text-blue-400'>12345</span> | Coins: <span className='text-blue-400'>309</span> </p>
                </div>
                <img src={SarIcon} alt="" className='w-12' />
                <div className='flex items-center gap-1'>
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" className='rounded-full w-14 h-14 ring-2 ring-white' />
                    <AiFillCaretDown></AiFillCaretDown>
                </div>
            </div>
        </head>

    </div>
    );
};

export default CourseArticleHeader;