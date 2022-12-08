import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsappSquare, FaTwitterSquare, } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import Map from './Ima2/map2.png'
import Ellipse from './Ima2/Ellipse-7.png'
import { FcMissedCall } from 'react-icons/fc';
import { MdCall } from 'react-icons/md';

const Rightside = () => {
    return (
        <div className='space-y-4'>
            <h3>Share this business</h3>

            <div className='flex gap-2'>
                <FaFacebook className='w-10  h-10 ' ></FaFacebook>
                <FaLinkedin className='w-10  h-10 ' ></FaLinkedin>
                <FaWhatsappSquare className='w-10  h-10 ' ></FaWhatsappSquare>
                <FaTwitterSquare className='w-10  h-10 ' ></FaTwitterSquare>
                <SiTelegram className='w-10  h-10 ' ></SiTelegram>
            </div>

            <div className=''>
                <h3>Map</h3>
                <img src={Map} alt="" className='h-[15rem] w-full' />
            </div>
            <div className='mt-10'>
                <p>Map Location: If PG location is not pined on exact point then it means PG location is pinned on nearest yuo </p>
            </div>
            <div>
                <h2>Owner Details</h2>
                <div className='flex items-center gap-2'>
                    <img src={Ellipse} alt="" />
                    <p className='mt-3'>Alana Rey</p>
                </div>
            </div>
            <div className='bg-[#7065F0] p-2 w-full rounded-lg text-white text-center gap-1 mt-4 '>

             
                <h3>Call Now</h3>
            </div>
        </div>
    );
};

export default Rightside;