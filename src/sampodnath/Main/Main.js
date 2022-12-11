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


const Main = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const manu = [<FaFacebook className='w-6 h-6 md:w-10 md:h-10 ' ></FaFacebook>,
    <FaLinkedin className='w-6 h-6 md:w-10 md:h-10 ' ></FaLinkedin>,
    <FaWhatsappSquare className='w-6 h-6 md:w-10 md:h-10 ' ></FaWhatsappSquare>,
    <FaTwitterSquare className='w-6 h-6 md:w-10 md:h-10 ' ></FaTwitterSquare>,
    <SiTelegram className='w-6 h-6 md:w-10 md:h-10 ' ></SiTelegram>]
    return (
        <div className='relative md:mx-20'>
          

                <img src='https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="" className='block md:hidden w-full h-full bg-fixed' />
        
            {

                <UseShareButton manu={manu}>
                </UseShareButton>
            }
            <div className='md:container mx-auto p-4 flex flex-col justify-between absolute md:relative top-[90%]  bg-white rounded-3xl '>

                {/* <Navbar></Navbar> */}


                <Image></Image>
               

                <div className='flex justify-between gap-11  md:my-10 '>

                    <div className=' md:w-[60%] mt-4'>

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

export default Main;