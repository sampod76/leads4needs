import React from 'react';
import { MdCall } from "react-icons/md";

const Price = () => {
    return (
        <div className=''>

            <div className='p-3 border-2 rounded-xl space-y-3'>
                <h5 className='lg:font-bold lg:text-3xl md:text-2xl'>Price</h5>
                <div className='flex justify-evenly items-center bg-[#7065F0] rounded-lg text-white py-1 md:py-2 xl:h-[6.5rem] md:h-[5.5rem]'>
                    <h1 className='text-4xl lg:font-bold '>1</h1>
                    <p className='mt-2 lg:text-2xl md:text-base lg:font-semibold'>Single Room</p><span >|</span>
                    <p className='mt-2 lg:text-2xl md:text-base lg:font-semibold'>₹4000</p>
                </div>
                <div className='flex justify-evenly items-center border-2 rounded-lg  py-1 md:py-2 xl:h-[6.5rem] md:h-[5.5rem]'>
                    <h1 className='text-4xl lg:font-bold'>2</h1>
                    <p className='mt-2 lg:text-2xl md:text-base lg:font-semibold'>Double Rooms</p><span>|</span>
                    <p className='mt-2 lg:text-2xl md:text-base lg:font-semibold'>₹4000</p>
                </div>
                <div className='flex justify-evenly items-center bg-[#7065F0] rounded-lg text-white py-1 md:py-2 xl:h-[6.5rem] md:h-[5.5rem]'>
                    <h1 className='text-4xl lg:font-bold'>3</h1>
                    <p className='mt-2 lg:text-2xl md:text-base lg:font-semibold'>Triple Rooms</p><span >|</span>
                    <p className='mt-2 lg:text-2xl md:text-base lg:font-semibold'>₹4000</p>
                </div>
                <div className='flex justify-evenly items-center border-2 rounded-lg  py-1 md:py-2 xl:h-[6.5rem] md:h-[5.5rem]'>
                    <h1 className='text-4xl lg:font-bold'>4</h1>
                    <p className='mt-2 lg:text-2xl md:text-base lg:font-semibold'>Four Rooms</p> <span >|</span>
                    <p className='mt-2 lg:text-2xl md:text-base lg:font-semibold'>₹4000</p>
                </div>
            </div>

            <div className='flex justify-between items-center gap-2 md:mt-14 '>
                <div className='bg-[#7065F0] p-1 px-2 rounded-lg h-[4rem]'>

                    <MdCall className='text-white text-4xl mt-2'></MdCall>
                </div>


                <div className='bg-[#7065F0] w-full rounded-lg  h-[4rem] '>
                    <h3 className=' text-center mt-3 text-white '>Call Now</h3>
                </div>

            </div>
        </div>
    );

};

export default Price;