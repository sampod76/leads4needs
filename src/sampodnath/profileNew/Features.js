import React from 'react';
import { FcRating } from "react-icons/fc";
import bathroom from '../Img/bathroom.png'
import heat_pump from '../Img/heat_pump.png'
import local_parking from '../Img/local_parking.png'
import soup_kitchen from '../Img/soup_kitchen.png'
import Group_84 from '../Img/Group_84.png'
import Group_77 from '../Img/Group_77.png'
import { MdCall } from 'react-icons/md';

const Features = () => {
    return (

        <div>

            <div className='flex flex-col justify-between gap-2 md:gap-5 h-full rounded-5xl'>
                <div>

                    <div className='flex justify-between items-center'>
                        <div>
                            <h5 className=' text-black font-bold'>Birdhouse PG (Boys)</h5>
                            <p>2685, Outram Lines, GTB Nagar, Delhi, 110009</p>

                            <div className='flex items-center -mt-2'>
                                <div className='flex -mt-1'>
                                    <FcRating></FcRating>
                                    <FcRating></FcRating>
                                    <FcRating></FcRating>
                                    <FcRating></FcRating>
                                </div>
                                <h6 className='ml-1'>9 Reviews</h6>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <button className='flex  items-center bg-blue-500 rounded-lg px-4 py-2 text-white'>

                                <FcRating></FcRating>
                                Rate
                            </button>
                        </div>
                    </div>
                    <div className=''>
                        <h5>Features</h5>
                        <div className=' grid grid-cols-4  gap-4 '>
                            <div className='flex flex-col  justify-center items-center border-2  rounded-2xl '>
                                <img src={bathroom} alt="" className='w-[1.125rem] pt-3' />
                                <p>Food</p>
                            </div>
                            <div className='flex flex-col justify-center items-center border-2  rounded-2xl '>
                                <img src={heat_pump} alt="" className='w-[1.125rem] pt-3' />
                                <p>Geyser</p>
                            </div>

                            <div className='flex flex-col justify-center items-center border-2  rounded-2xl '>
                                <img src={local_parking} alt="" className='w-[1.125rem] pt-3' />
                                <p>AC</p>
                            </div>
                            <div className='flex flex-col justify-center items-center border-2  rounded-2xl '>
                                <img src={soup_kitchen} alt="" className='w-[1.125rem] pt-3' />
                                <p>Parking </p>
                            </div>

                            <div className='flex flex-col  justify-center items-center border-2  rounded-2xl '>
                                <img src={bathroom} alt="" className='w-[1.125rem] pt-3' />
                                <p>Food</p>
                            </div>
                            <div className='flex flex-col justify-center items-center border-2  rounded-2xl '>
                                <img src={heat_pump} alt="" className='w-[1.125rem] pt-3' />
                                <p>Geyser</p>
                            </div>

                            <div className='flex flex-col justify-center items-center border-2  rounded-2xl '>
                                <img src={local_parking} alt="" className='w-[1.125rem] pt-3' />
                                <p>AC</p>
                            </div>
                            <div className='flex flex-col justify-center items-center border-2  rounded-2xl '>
                                <img src={soup_kitchen} alt="" className='w-[1.125rem] pt-3' />
                                <p>Parking </p>
                            </div>


                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div>

                        <h5 className='font-bold mt-2 md:mt-5'>PG Agent</h5>
                        <div className='flex space-x-3'>
                            <img src={Group_84} alt="" className='w-14 h-14' />
                            <div className=''>
                                <h6 className='font-bold'>Jenna White</h6>
                                <p>Owner   9876543210</p>
                            </div>
                        </div>
                    </div>
                    <div>
                       
                            <div className='bg-[#7065F0] p-1 rounded-lg text-white flex justify-between items-center gap-1 mt-4 w-fit'>

                                <MdCall className='text-white text-2xl '></MdCall>
                            <h3>Call Now</h3>
                            </div>



                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;