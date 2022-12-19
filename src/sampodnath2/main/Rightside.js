import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsappSquare, FaTwitterSquare, } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import Map from './Ima2/map2.png'
import Ellipse from './Ima2/Ellipse-7.png'
import { MdCall } from 'react-icons/md';


const Rightside = () => {
    return (
        <div className='space-y-4 md:mt-4 hidden md:block'>
            <h3>Share this business</h3>

            <div className='flex gap-2'>
                <FaFacebook className='w-10  h-10 ' ></FaFacebook>
                <FaLinkedin className='w-10  h-10 ' ></FaLinkedin>
                <FaWhatsappSquare className='w-10  h-10 ' ></FaWhatsappSquare>
                <FaTwitterSquare className='w-10  h-10 ' ></FaTwitterSquare>
                <SiTelegram className='w-10  h-10 ' ></SiTelegram>
            </div>

            <div className='space-y-5'>
                <h3>Map</h3>
                <img src={Map} alt="" className='h-[20rem] md:h-[30rem] w-full' />
            </div>
            <div className='mt-10'>
                <p className='text-xl md:text-2xl font-semibold'><span className='text-red-500 '>Map Location:</span> If PG location is not pined on exact point then it means PG location is pinned on nearest yuo </p>
            </div>
            <div>
                <div className='hidden md:block '>
                    <h5 className='md:text-3xl '>Owner Details</h5>
                    <div className='flex items-center gap-2 '>
                        <img src={Ellipse} alt="" className='w-20' />
                        <div className='space-y-[-0.3125rem]'>
                            <p className='text-2xl font-semibold'>Alana Rey</p>
                            <p className='text-lg'>Owner 9876543210</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#7065F0] p-2 w-full rounded-lg hidden md:block text-white text-center gap-1 mt-4 '>

                    {/* <MdCall className='text-white text-4xl mt-2'></MdCall> */}
                  

                    <div className='text-center flex justify-center items-center gap-2'>   <svg  width="36" height="36" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.8887 30.6748V36.8426C40.8911 37.4152 40.7738 37.982 40.5444 38.5066C40.315 39.0312 39.9786 39.5022 39.5566 39.8893C39.1347 40.2763 38.6366 40.571 38.0942 40.7545C37.5518 40.9379 36.977 41.006 36.4068 40.9545C30.0803 40.2671 24.0033 38.1053 18.664 34.6428C13.6965 31.4862 9.48497 27.2746 6.32842 22.3071C2.85384 16.9436 0.691535 10.837 0.0166874 4.48215C-0.0346894 3.91361 0.0328778 3.34061 0.215086 2.79962C0.397295 2.25862 0.690153 1.7615 1.07501 1.33989C1.45988 0.918285 1.92831 0.581433 2.45049 0.350782C2.97267 0.120132 3.53715 0.000736913 4.108 0.000199328H10.2758C11.2736 -0.00962075 12.2409 0.343703 12.9974 0.994313C13.7539 1.64492 14.248 2.54843 14.3877 3.53641C14.648 5.51025 15.1308 7.4483 15.8268 9.3136C16.1035 10.0495 16.1633 10.8492 15.9994 11.6181C15.8354 12.3869 15.4544 13.0926 14.9017 13.6516L12.2906 16.2627C15.2174 21.4098 19.4791 25.6716 24.6263 28.5983L27.2373 25.9873C27.7963 25.4345 28.502 25.0536 29.2709 24.8896C30.0397 24.7256 30.8395 24.7855 31.5753 25.0621C33.4406 25.7581 35.3787 26.2409 37.3525 26.5013C38.3512 26.6421 39.2633 27.1452 39.9153 27.9147C40.5673 28.6842 40.9137 29.6665 40.8887 30.6748Z" fill="white" />
                    </svg> <p className='md:text-3xl text-center mt-2 '>Call Now</p></div>
                </div>
            </div>
        </div>
    );
};

export default Rightside;