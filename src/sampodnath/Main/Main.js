import React from 'react';
import Features from '../profileNew/Features';
import Image from '../profileNew/Image';

import Navbar from '../profileNew/Navbar';
import Price from '../profileNew/Price';
import Intro from '../profileNew/Intro';
import Group_77 from '../Img/Group_77.png'


const Main = () => {
    return (
        <div className='relative'>
            <img src={Group_77} alt="" className='block md:hidden w-full' />
            <div className='container mx-auto p-4 flex flex-col justify-between absolute md:relative top-[90%]  bg-white rounded-3xl'>
                {/* h-[100vh] */}
                {/* <Navbar></Navbar> */}


                <Image></Image>
                <div className='flex justify-between gap-20'>

                    <div className='w-full md:w-4/6'>

                        <Features></Features>
                    </div>
                    <div className='hidden md:block w-2/6'>

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