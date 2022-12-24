import React from 'react';
import { IconEqual } from '../Svg';
import SarIcon from './Img/Group 72.png'
import { FiLogOut } from "react-icons/fi";

const Sidebar = ({open ,setOpen}) => {

    return (
        <div className={`bg-[#1E2736] ${open ? 'w-[55%] sm:w-[50%]' :'w-0 -left-4'} min-h-screen  md:hidden px-2 py-3 duration-500  absolute top-0 left-0  z-20`}>
            <div className={`flex gap-2 items-center justify-between  ml-1   ${open || 'hidden'}`}>
                <button onClick={()=>setOpen(false)}>

                <IconEqual  className={'w-4'}></IconEqual>
                </button>
                <div className='space-y-1 flex flex-col items-end'>
                    <div className='bg-white w-[90%] flex justify-end rounded-3xl'>
                        <div className='p-1 w-[30%] rounded-3xl bg-[#01B6FF]'>

                        </div>
                    </div>
                    <p className='text-[6px] text-[#9EB2D2]'>25 more points to unlock your rank !</p>
                    <p className='text-[6px] text-[#9EB2D2]'>Rank: <span className='text-blue-400'>12345</span> | Coins: <span className='text-blue-400'>309</span> </p>
                </div>
                <img src={SarIcon} alt="" className='w-6' />
            </div>
            
            <div className={`pl-3 space-y-10 mt-5 ${open || 'hidden'} duration-500 bg-[#1E2736]` } >
                <p  className='text-sm '>QUIZ</p>
                <p className='text-sm '>TUTORIAL</p>
                <p className='text-sm '>CERTIFICATE</p>
                <p className='text-sm '>EXAMS</p>
                <p className='text-sm flex items-center gap-1'><span><FiLogOut></FiLogOut></span> Log Out</p>
            </div>
        </div>
    );
};

export default Sidebar;