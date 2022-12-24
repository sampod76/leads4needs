import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import { IconEqual } from '../Svg';

const QuestionHeader = ({ open, setOpen }) => {
    return (
        <>
            <div className='hidden md:flex justify-between mx-6 items-center py-3'>
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
            <div className='flex md:hidden items-center justify-between mx-6 py-2'>
                <div className='flex gap-3 items-center'>
                    <button onClick={()=>setOpen(true)}>
                        <IconEqual className={'w-5'}></IconEqual>
                    </button>
                    <h3 className='text-xl mt-1.5'>CodeExemplor</h3>
                </div>
                <div className='flex items-center gap-1'>
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" className='rounded-full w-10 h-10 ring-2 ring-white' />
                    <AiFillCaretDown></AiFillCaretDown>
                </div>
            </div>
        </>
    );
};

export default QuestionHeader;