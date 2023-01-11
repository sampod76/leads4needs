import React from 'react';
import map from '../Img/map.png'

import { FaFacebook, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import Footer from '../../Footer/Footer';


const Intro = () => {
    return (
        <div className='-mt-4 '>
            <div className='mb-4 mt-4'>
                <h4 className='font-semibold'>Map</h4>
                <div>
                    <img src={map} alt="" className='h-[10rem] md:h-full' />
                </div>
            </div>
            <div className='hidden md:block'>

                <h3>Share this business</h3>

                <div className='flex gap-2 my-3'>
                <FaFacebook className='w-10  h-10 text-blue-500' ></FaFacebook>
                <FaLinkedin className='w-10  h-10 text-blue-900' ></FaLinkedin>
                <FaWhatsappSquare className='w-10  h-10 text-emerald-800' ></FaWhatsappSquare>
                <FaTwitterSquare className='w-10  h-10 text-blue-500' ></FaTwitterSquare>
                <SiTelegram className='w-10  h-10 text-blue-400' ></SiTelegram>
                </div>
            </div>


            <div className='mt-4'>
                <h4>Description</h4>
                <p className='text-lg'>Pg In Provide the Best Facility at a Very Less Price, This Pg Business Specialization is no AC, Geyser, wifi, and More. If you want to connect with these Pg In, Click on Contact Details and Directly Call This Business Owner without any Circumstances. If you are interested in this business profile so directly call, and firstly please say that you got This Business Detail from PgWars.com Website.</p>
            </div>
            {/* <Footer></Footer> */}
        </div>


    );
};

export default Intro;