import React from 'react';
import { MdCall } from "react-icons/md";

const Price = () => {
    return (
        <div>

            <div className='p-3 border-2 rounded-xl space-y-3'>
                <h5>Price</h5>
                <div className='flex justify-evenly items-center bg-[#7065F0] rounded-lg text-white py-2'>
                    <h1>1</h1>
                    <p className='mt-2'>Single Room</p><span >|</span>
                    <p className='mt-2'>₹4000</p>
                </div>
                <div className='flex justify-evenly items-center border-2 rounded-lg  py-2'>
                    <h1>2</h1>
                    <p className='mt-2'>Double Rooms</p><span>|</span>
                    <p className='mt-2'>₹4000</p>
                </div>
                <div className='flex justify-evenly items-center border-2 rounded-lg  py-2'>
                    <h1>3</h1>
                    <p className='mt-2'>Triple Rooms</p><span >|</span>
                    <p className='mt-2'>₹4000</p>
                </div>
                <div className='flex justify-evenly items-center border-2 rounded-lg  py-2'>
                    <h1>4</h1>
                    <p className='mt-2'>Four Rooms</p> <span >|</span>
                    <p className='mt-2'>₹4000</p>
                </div>
            </div>

            <div className='flex justify-between items-center gap-2 mt-2'>
                <div className='bg-[#7065F0] p-1 px-2 rounded-lg'>

                    <MdCall className='text-white text-4xl '></MdCall>
                </div>


                <div className='bg-[#7065F0] w-full rounded-lg '>
                    <h3 className=' text-center p-[0.105rem] text-white '>Call Now</h3>
                </div>

            </div>
        </div>
    );

};

export default Price;