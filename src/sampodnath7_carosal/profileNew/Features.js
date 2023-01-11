import React from 'react';
import { FcRating } from "react-icons/fc";
import bathroom from '../Img/bathroom.png'
import heat_pump from '../Img/heat_pump.png'
import local_parking from '../Img/local_parking.png'
import soup_kitchen from '../Img/soup_kitchen.png'
import Group_84 from '../Img/Group_84.png'
import Group_77 from '../Img/Group_77.png'
import { MdCall } from 'react-icons/md';
import { useState } from 'react';

const Features = () => {
    const [features, setFeatures] = useState(false)

    const featuresAll = [
        <div className='flex flex-col  justify-center items-center border-2  rounded-2xl w-full  xl:h-[8rem]'>
            <img src={bathroom} alt="" className='max-w-[2.125rem] pt-3' />
            <p className='text-lg'>Food</p>
        </div>,
        <div className='flex flex-col justify-center items-center border-2  rounded-2xl w-full  xl:h-[8rem]'>
            <img src={heat_pump} alt="" className='max-w-[2.125rem] pt-3' />
            <p className='text-lg'>Geyser</p>
        </div>,

        <div className='flex flex-col justify-center items-center border-2  rounded-2xl w-full  xl:h-[8rem]'>
            <img src={local_parking} alt="" className='max-w-[2.125rem] pt-3' />
            <p className='text-lg'>AC</p>
        </div>,
        <div className='flex flex-col justify-center items-center border-2  rounded-2xl w-full  xl:h-[8rem]'>
            <img src={soup_kitchen} alt="" className='max-w-[2.125rem] pt-3' />
            <p className='text-lg md:text-sm lg:text-lg text-center'>No Parking </p>
        </div>,

        <div className='flex flex-col  justify-center items-center border-2  rounded-2xl w-full  xl:h-[8rem]'>
            <img src={bathroom} alt="" className='max-w-[2.125rem] pt-3' />
            <p className='text-lg'>Food</p>
        </div>,
        <div className='flex flex-col justify-center items-center border-2  rounded-2xl w-full  xl:h-[8rem]'>
            <img src={heat_pump} alt="" className='max-w-[2.125rem] pt-3' />
            <p className='text-lg md:text-sm lg:text-lg text-center'>No Geyser</p>
        </div>,

        <div className='flex flex-col justify-center items-center border-2  rounded-2xl w-full  xl:h-[8rem]'>
            <img src={local_parking} alt="" className='max-w-[2.125rem] pt-3' />
            <p className='text-lg md:text-sm lg:text-lg text-center'>No AC</p>
        </div>,
        <div className='flex flex-col justify-center items-center border-2  rounded-2xl w-full  xl:h-[8rem]'>
            <img src={soup_kitchen} alt="" className='max-w-[2.125rem] pt-3' />
            <p className='text-lg'>Parking </p>
        </div>,
       
    ]
    return (



        <div className='flex flex-col justify-between gap-2 md:gap-x-5  rounded-5xl '>
            <div>

                <div className='flex justify-between   -mt-4 '>
                    <div className='md:space-y-4'>
                        <p className=' text-black font-bold lg:text-3xl text-2xl '>Birdhouse PG (Boys)</p>
                        <p className='md:text-lg -mt-2'>2685, Outram Lines, GTB Nagar, Delhi, 110009</p>

                        <div className='flex items-center -mt-2'>
                            <div className='flex -mt-1'>
                               
                                <svg width="15" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                                </svg><svg width="15" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                                </svg><svg width="15" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                                </svg><svg width="15" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                                </svg><svg width="15" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                                </svg>
                                <h6 className='ml-1'>9 Reviews</h6>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block ld:-mt-10'>
                        <button className='flex  items-center bg-blue-500 rounded-lg px-4 py-2 text-white gap-1'>

                            <svg width="15" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFFFFF" />
                            </svg>
                            Rate
                        </button>
                    </div>
                </div>
                <div className='md:my-2  md:mr-1'>
                    <div className='flex justify-between'>

                        <h5 className='mb-3 text-2xl'>Features</h5>
                        <button onClick={()=>setFeatures(!features)} className='block md:hidden text-[#2194FF]'>See More</button>
                    </div>
                    <div className='hidden md:grid  md:grid-cols-4 md:gap-3 lg:gap-8   '>

                        {
                            featuresAll.map(feature => feature) 
                        }

                    </div>
                    <div className='grid grid-cols-3 gap-4  md:hidden '>
                    {features ?
                            featuresAll.map(feature => feature) :featuresAll.slice(0,6).map(feature => feature)
                        }

                    </div>
                </div>
            </div>


            <div className='flex items-center justify-between md:mt-12 xl:mt-16 py-2'>
                <div>

                    <h5 className='font-semibold mt-2 md:mt-5 space-y-2  md:text-2xl'>PG Agent</h5>
                    <div className='flex  space-x-2' >
                        <img src={Group_84} alt="" className='w-14 h-14 md:w-20 md:h-20 ' />
                        <div className='space-y-1 mt-1.5'>
                            <h6 className='font-bold md:text-xl'>Jenna White</h6>
                            <p className='md:text-lg'>Owner   9876543210</p>
                        </div>
                    </div>
                </div>
                <div className='block md:hidden '>

                    <div className='bg-[#7065F0] p-1 rounded-lg text-white flex justify-between items-center  mt-9  w-fit'>

                        <MdCall className='text-white md:text-2xl '></MdCall>
                        <h6 className='md:text-lg mt-1  pr-1'>Call Now</h6>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Features;