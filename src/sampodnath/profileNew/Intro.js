import React from 'react';
import map from '../Img/map.png'
import Mail from '../Img/Mail.png'
import My_Location from '../Img/My_Location.png'

import Footer_Image_2 from '../Img/Footer_Image_2.png'
import { BsArrowRight } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

const Intro = () => {
    return (
        <div className='-mt-4 '>
            <div className='mb-4 mt-4'>
                <h4 className='font-semibold'>Map</h4>
                <div>
                    <img src={map} alt="" className='h-[10rem] md:h-full'/>
                </div>
            </div>
            <div className='hidden md:block'>

                <h3>Share this business</h3>

                <div className='flex gap-2 my-3'>
                    <FaFacebook className='w-10  h-10 ' ></FaFacebook>
                    <FaLinkedin className='w-10  h-10 ' ></FaLinkedin>
                    <FaWhatsappSquare className='w-10  h-10 ' ></FaWhatsappSquare>
                    <FaTwitterSquare className='w-10  h-10 ' ></FaTwitterSquare>
                    <SiTelegram className='w-10  h-10 ' ></SiTelegram>
                </div>
            </div>


            <div className='mt-4'>
                <h4>Description</h4>
                <p className='text-xl leading-8 font-serif'>Pg In Provide the Best Facility at a Very Less Price, This Pg Business Specialization is no AC, Geyser, wifi, and More. If you want to connect with these Pg In, Click on Contact Details and Directly Call This Business Owner without any Circumstances. If you are interested in this business profile so directly call, and firstly please say that you got This Business Detail from PgWars.com Website.</p>
            </div>

            <div style={{ background: `url(${Footer_Image_2})`, "height": "100%", "width": "100%", "backgroundRepeat": "no-repeat", "backgroundSize": "auto" }} className='my-2 md:p-5 px-2'  >

                <div className='md:flex justify-around pt-4 md:pt-10 text-white'>

                    <div className='text-white space-y-1 md:ml-[3rem] md:w-1/4'>
                        <p className='font-semibold'>PG Wars</p>
                        <div className='flex md:block items-center '>
                            <p className='text-lg md:text-2xl  '>Easiest way <br className='hidden md:block' /> to find yourself a <span className='md:text-3xl text-lg font-bold'>PG</span>.</p>
                        </div>
                        <h5 className='flex items-center bg-white text-black p-1 md:px-2 rounded-lg md:mt-4 w-fit text-sm'>FREE REGISTER <span><BsArrowRight></BsArrowRight></span></h5>
                    </div>
                    <div className='flex text-sm justify-around md:w-3/4 gap-2'>
                        <div className='space-y-2'>
                            <h5>Services</h5>
                            <p>Blog</p>
                            <p>Feedback</p>
                            <p>Report</p>
                        </div>
                        <div className='space-y-2'>
                            <h5>Links</h5>
                            <p>About Us</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Disclaimer</p>
                        </div>
                        <div className=''>
                            <h5>Contact Us</h5>
                            <div className='flex  gap-2'>
                                <img src={My_Location} alt="" className='h-4 w-5 mt-1' />
                                <p className=''> Sector 63, H-Block,
                                    Noida</p>
                            </div>

                            <div className='flex  gap-2'>

                                <img src={Mail} alt="" className='h-4 w-5 mt-1' />
                                <p className=''>contact@codeexampler.com</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='w-[92%] mx-auto pb-2 '>

                    <hr className='bg-white' />
                    <p className='text-white text-start'>2022 CodeExampler | Designed By CodeExampler.com | All Right Reserved
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Intro;