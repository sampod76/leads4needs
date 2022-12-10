import React from 'react';
import { MdCall } from 'react-icons/md';
import Ellipse from './Ima2/Ellipse-7.png'

const Leftside = () => {
    return (
        <div className='space-y-4  '>
            <div className='md:space-y-2 space-y-1 '>
                <h5 className=' text-black font-semibold text-xl md:text-4xl xl:text-6xl md:pt-2  '>ABC Dentist </h5>
                <p className='lg:text-2xl md:tracking-wide text-gray-500 md:py-2 md:text-xl'>2685, Outram Lines, GTB Nagar, Delhi, 110009</p>
                <p className='font-semibold md:text-3xl md:py-2'>11 a.m. to 7:00 p.m.</p>
                <div className='flex items-center '>
                    <div className='flex mt-1 '>
                        {/* <FcRating></FcRating>
                        <FcRating></FcRating>
                        <FcRating></FcRating>
                        <FcRating></FcRating> */}
                        <svg className='w-3 h-full md:w-full' width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                        </svg>
                        <svg className='w-3 h-full md:w-full' width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                        </svg>
                        <svg className='w-3 h-full md:w-full' width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                        </svg>
                        <svg className='w-3 h-full md:w-full' width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                        </svg>
                        <svg className='w-3 h-full md:w-full' width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z" fill="#FFA800" />
                        </svg>


                        <p className='md:ml-4 ml-1 md:text-xl -mt-1 md:-mt-2'>9Rate</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <h3 className='-mt-5'>Business Specialization</h3>
                <div className='grid grid-cols-2 gap-4 text-center'>
                    <div className='border-2 bg-[#7065F0] text-white rounded-lg  text-base px-1 py-3 font-semibold'>
                        Digital Marketing
                    </div>
                    <div className='border-2 bg-[#7065F0] text-white rounded-lg text-text-base px-1 py-3  font-semibold'>
                        Coaching Center
                    </div>
                    <div className='border-2 bg-[#7065F0] text-white rounded-lg text-text-base px-1 py-3  font-semibold'>
                        Institiute
                    </div>
                    <div className='border-2 bg-[#7065F0] text-white rounded-lg text-text-base px-1 py-3  font-semibold'>
                        More...
                    </div>
                </div>
            </div>

            <div className='block md:hidden'>
                <div>
                    <h5 className='md:text-3xl'>Owner Details</h5>
                    <div className='flex items-center gap-2'>
                        <img src={Ellipse} alt="" className='w-18' />
                        <div className='space-y-[-0.7125rem]'>
                        <p className='text-lg font-semibold'>Alana Rey</p> 
                        <p className=''>Owner 9876543210</p>
                        </div>
                    </div>
                </div>
                <div className=' mt-3 bg-[#7065F0] p-1 w-full rounded-lg  text-white text-center gap-1  '>

                
                <div className='text-center flex justify-center items-center gap-2'>   <svg  width="29" height="29" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.8887 30.6748V36.8426C40.8911 37.4152 40.7738 37.982 40.5444 38.5066C40.315 39.0312 39.9786 39.5022 39.5566 39.8893C39.1347 40.2763 38.6366 40.571 38.0942 40.7545C37.5518 40.9379 36.977 41.006 36.4068 40.9545C30.0803 40.2671 24.0033 38.1053 18.664 34.6428C13.6965 31.4862 9.48497 27.2746 6.32842 22.3071C2.85384 16.9436 0.691535 10.837 0.0166874 4.48215C-0.0346894 3.91361 0.0328778 3.34061 0.215086 2.79962C0.397295 2.25862 0.690153 1.7615 1.07501 1.33989C1.45988 0.918285 1.92831 0.581433 2.45049 0.350782C2.97267 0.120132 3.53715 0.000736913 4.108 0.000199328H10.2758C11.2736 -0.00962075 12.2409 0.343703 12.9974 0.994313C13.7539 1.64492 14.248 2.54843 14.3877 3.53641C14.648 5.51025 15.1308 7.4483 15.8268 9.3136C16.1035 10.0495 16.1633 10.8492 15.9994 11.6181C15.8354 12.3869 15.4544 13.0926 14.9017 13.6516L12.2906 16.2627C15.2174 21.4098 19.4791 25.6716 24.6263 28.5983L27.2373 25.9873C27.7963 25.4345 28.502 25.0536 29.2709 24.8896C30.0397 24.7256 30.8395 24.7855 31.5753 25.0621C33.4406 25.7581 35.3787 26.2409 37.3525 26.5013C38.3512 26.6421 39.2633 27.1452 39.9153 27.9147C40.5673 28.6842 40.9137 29.6665 40.8887 30.6748Z" fill="white" />
                    </svg> <p className='md:text-3xl text-2xl text-center mt-2 '>Call Now</p></div>
                </div>
            </div>
            <div className='leading-6'>
                <h3>Description</h3>
                <p className='text-lg md:text-xl text-gray-500'>Pg In Provide the Best Facility at a Very Less Price, This Pg Business Specialization is no AC, Geyser, wifi, and More. If you want to connect with these Pg In, Click on Contact Details and Directly Call This Business Owner without any Circumstances. If you are interested in this business profile so directly call, and firstly please say that you got This Business Detail from PgWars.com Website.</p>
            </div>

            {/* <div>
                <h2 className='md:text-3xl'>Owner Details</h2>
                <div className='flex items-center gap-2'>
                    <img src={Ellipse} alt="" />
                    <p className='mt-3'>Alana Rey</p>
                </div>
            </div>
            <div className='bg-[#7065F0] rounded-lg text-white text-center w-fit '>

             
                <h3 className=''>Call Now</h3>
            </div> */}
        </div>
    );
};

export default Leftside;