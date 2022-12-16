import React from 'react';
import Features from '../profileNew/Features';
import Image from '../profileNew/Image';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import { TfiSharethis } from "react-icons/tfi";
import Price from '../profileNew/Price';
import Intro from '../profileNew/Intro';
import Group_77 from '../Img/Group_77.png'
import UseShareButton from '../Hooks/UseShareButton';
import Slider from 'react-slick';
import './Main.css'

const Main7 = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000,
    };

    const manu = [<FaFacebook className='w-6 h-6 md:w-10 md:h-10 ' ></FaFacebook>,
    <FaLinkedin className='w-6 h-6 md:w-10 md:h-10 ' ></FaLinkedin>,
    <FaWhatsappSquare className='w-6 h-6 md:w-10 md:h-10 ' ></FaWhatsappSquare>,
    <FaTwitterSquare className='w-6 h-6 md:w-10 md:h-10 ' ></FaTwitterSquare>,
    <SiTelegram className='w-6 h-6 md:w-10 md:h-10 ' ></SiTelegram>]
    return (
        <div className='relative md:mx-20 '>
            <div className='block md:hidden w-full overflow-hidden h-full bg-fixed' >

                <Slider {...settings}>
                <div className=" ">
                            <img src="https://images.unsplash.com/photo-1670968982569-722c875727dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="min-w-full    " />
                        </div>
                        <div className=" ">
                            <img src="https://images.unsplash.com/photo-1664574653006-4d7eb5f1a418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" className="min-w-full    " />
                        </div>
                        <div className=" ">
                            <img src="https://plus.unsplash.com/premium_photo-1661484952533-83719b54ca6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="min-w-full    " />
                        </div>
                        <div className=" ">
                            <img src="https://images.unsplash.com/photo-1670942298778-f339cac1fe01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="min-w-full    " />
                        </div>
                        <div className=" ">
                            <img src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="min-w-full    " />
                        </div>
                        <div className=" ">
                            <img src="https://images.unsplash.com/photo-1670969548019-18ec1aae8abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="min-w-full    rounded-xl"/>
                        </div>
                </Slider>
            </div>

            <div className='md:container mx-auto p-4 flex flex-col justify-between absolute md:relative top-[90%]  bg-white rounded-[1.875rem]  overflow-hidden'>

                {/* <Navbar></Navbar> */}


                <Image></Image>


                <div className='flex justify-between gap-11  md:my-10 '>

                    <div className='w-[98%] md:w-[60%] mt-4'>

                        <Features></Features>
                    </div>
                    <div className='hidden md:block w-[45%] '>

                        <Price></Price>
                    </div>
                </div>
                <div>
                    <Intro></Intro>
                </div>
            </div>
        </div>
    );
};

export default Main7;